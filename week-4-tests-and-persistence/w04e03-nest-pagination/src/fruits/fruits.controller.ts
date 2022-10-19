import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { Pagination } from '../shared/Pagination';
import { GetPagination } from '../shared/pagination.decorator';
import { FruitsRepository } from './fruits.repository';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsRepository: FruitsRepository) {}

  @Get()
  getAll(@GetPagination() pagination: Pagination) {
    return this.fruitsRepository.find(pagination);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.fruitsRepository.findOne({ id });
  }
}
