import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Pagination } from './Pagination';

export const GetPagination = createParamDecorator(
  (data, ctx: ExecutionContext): Pagination => {
    const req: Request = ctx.switchToHttp().getRequest();

    const paginationParams: Pagination = {
      skip: 0,
      limit: 10,
    };

    paginationParams.skip = parseInt(req?.query?.skip?.toString()) || 0;
    paginationParams.limit = parseInt(req?.query?.limit?.toString()) || 10;

    return paginationParams;
  },
);
