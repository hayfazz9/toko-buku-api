import { Controller, Get, Param } from '@nestjs/common';
import { No1CekBilanganService } from './no1-cek-bilangan.service.js';

@Controller('no1-cek-bilangan')
export class No1CekBilanganController {
  constructor(private readonly no1CekBilanganService: No1CekBilanganService) {}

  @Get(':angka')
  cekBilangan(@Param('angka') angka: string) {
    return this.no1CekBilanganService.cekBilangan(angka);
  }
}
