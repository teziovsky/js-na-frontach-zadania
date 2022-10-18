import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../database/prisma.service';
import { UsersService } from '../users.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService, PrismaService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw error when wrong credentials', async () => {
    await expect(
      service.signIn('jakub@example.pl', 'pass123'),
    ).rejects.toThrowError();
  });

  it('should return token when correct credentials', async () => {
    const token = await service.signIn('peter@myclient.com', 'som3pa55w0rd');
    expect(token).toBeDefined();
  });

  it('should sign out', async () => {
    const { accessToken } = await service.signOut(1);
    expect(accessToken).toBeNull();
  });
});
