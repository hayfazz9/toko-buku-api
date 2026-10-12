
import { Module } from '@nestjs/common';
import { No4NilaiRaporController } from './no4-nilairapor.controller.js';
import { No4NilaiRaporService } from './no4-nilairapor.service.js';

@Module({
  controllers: [No4NilaiRaporController],
  providers: [No4NilaiRaporService],
})
export class No4NilaiRaporModule {}

