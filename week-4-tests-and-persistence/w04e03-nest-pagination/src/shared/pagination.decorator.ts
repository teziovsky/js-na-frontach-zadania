import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Pagination } from './Pagination';

const DEFAULT_LIMIT = 10;

export const GetPagination = createParamDecorator(
  (data, ctx: ExecutionContext): Pagination => {
    const req: Request = ctx.switchToHttp().getRequest();

    const paginationParams: Pagination = {
      skip: 0,
      limit: DEFAULT_LIMIT,
    };

    paginationParams.skip = parseInt(req?.query?.skip?.toString()) || 0;
    paginationParams.limit =
      parseInt(req?.query?.limit?.toString()) || DEFAULT_LIMIT;

    return paginationParams;
  },
);
