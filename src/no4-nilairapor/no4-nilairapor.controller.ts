
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { No4NilaiRaporService } from './no4-nilairapor.service.js';

@Controller('nilai')
export class No4NilaiRaporController {
  constructor(
    private readonly no4NilaiRaporService: No4NilaiRaporService,
  ) {}

  @Post('hitung')
  @HttpCode(200)
  hitung(@Body() body: any) {
    return this.no4NilaiRaporService.hitung(body);
  }
}

