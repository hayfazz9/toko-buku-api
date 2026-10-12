
import {Controller, Post, Param, Query, Body,} from '@nestjs/common';
import { No5KasirTokoService } from './no5-kasir-toko.service.js';

@Controller('kasir')
export class No5TokoKasirController {
  constructor(private readonly no5KasirTokoService: No5KasirTokoService,) {}

  @Post('checkout/:member')
  checkout(
    @Param('member') member: string,
    @Query('metode') metode: string,
    @Body() body: any,
  ) {
    return this.no5KasirTokoService.checkout(
      member,
      metode,
      body,
    );
  }
}

