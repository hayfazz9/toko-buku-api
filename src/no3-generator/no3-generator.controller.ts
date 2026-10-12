import { Controller, Get, Param, Query } from '@nestjs/common';
import { No3GeneratorService } from './no3-generator.service.js';

@Controller('generator')
export class No3GeneratorController {
  constructor(private readonly no3GeneratorService: No3GeneratorService) {}

  @Get(':jenis')
  buatDeret(
    @Param('jenis') jenis: string,
    @Query('jumlah') jumlah: string,
  ) {
    return this.no3GeneratorService.buatDeret(jenis, jumlah);
  }
}

