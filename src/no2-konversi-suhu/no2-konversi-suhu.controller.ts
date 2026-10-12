import { Controller, Get, Query } from '@nestjs/common';
import { No2KonversiSuhuService } from './no2-konversi-suhu.service.js';

@Controller('suhu')
export class No2KonversiSuhuController {
  constructor(private readonly no2KonversiSuhuService: No2KonversiSuhuService) {}

  @Get('konversi')
  konversi(
    @Query('nilai') nilai: string,
    @Query('dari') dari: string,
    @Query('ke') ke: string,
  ) {
    return this.no2KonversiSuhuService.konversi(nilai, dari, ke);
  }
}
