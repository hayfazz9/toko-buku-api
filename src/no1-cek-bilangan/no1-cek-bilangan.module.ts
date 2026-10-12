import { Module } from '@nestjs/common';
import { No1CekBilanganService } from './no1-cek-bilangan.service.js';
import { No1CekBilanganController } from './no1-cek-bilangan.controller.js';

@Module({
  controllers: [No1CekBilanganController],
  providers: [No1CekBilanganService],
})
export class No1CekBilanganModule {}
