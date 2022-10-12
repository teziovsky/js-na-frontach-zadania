import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../persistence/prisma.service';
import { AuthService } from '../users/auth.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  findAll() {
    try {
      return this.prisma.report.findMany({
        where: {
          ownerId: this.authService.getCurrentUser().id,
        },
      });
    } catch (error) {
      throw new ForbiddenException("You don't have access to this resource");
    }
  }
}
