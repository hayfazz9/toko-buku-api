import { Module } from '@nestjs/common';
import { No2KonversiSuhuService } from './no2-konversi-suhu.service.js';
import { No2KonversiSuhuController } from './no2-konversi-suhu.controller.js';

@Module({
  controllers: [No2KonversiSuhuController],
  providers: [No2KonversiSuhuService],
})
export class No2KonversiSuhuModule {}
