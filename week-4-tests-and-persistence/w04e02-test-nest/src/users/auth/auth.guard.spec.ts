import { PrismaService } from '../../database/prisma.service';
import { UsersService } from '../users.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let prismaService: PrismaService;
  let usersService: UsersService;
  let authService: AuthService;
  let authGuard: AuthGuard;

  beforeEach(() => {
    prismaService = new PrismaService();
    usersService = new UsersService(prismaService);
    authService = new AuthService(usersService);
    authGuard = new AuthGuard(authService);
  });

  it('should be defined', () => {
    expect(authGuard).toBeDefined();
  });
});
