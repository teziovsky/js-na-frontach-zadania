import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { Pagination } from '../shared/Pagination';
import { GetPagination } from '../shared/pagination.decorator';
import { UsersRepository } from './users.repository';

@Controller('users')
export class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Get()
  getAll(@GetPagination() pagination: Pagination) {
    return this.usersRepository.find(pagination);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersRepository.findOne({ id });
  }
}
