import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { AuthService } from './auth.service';
import { hash } from 'bcryptjs';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UsersService;

  beforeEach(async () => {
    const validPass = await hash('boom', 8);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            getOne() {
              // Fake record (niby z DB)
              return {
                id: 10,
                password: validPass,
              };
            },
            saveToken() {},
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);

    userService = module.get(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw error when wrong credentials', async () => {
    await expect(
      service.signIn('jakub@example.pl', 'pass123'),
    ).rejects.toThrowError('Invalid password');
  });

  it('should return token when correct credentials', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2022-12-06'));

    const token = await service.signIn('peter@myclient.com', 'boom');

    expect(token).toEqual('lbbgg00a');
  });

  it('should sign out, making accessToken null', async () => {
    const spyTheNullify = jest.spyOn(userService, 'saveToken');
    const userId = 29;

    await service.signOut(userId);

    expect(spyTheNullify).toHaveBeenCalledWith(userId, null);
  });
});
