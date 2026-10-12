
import { Module } from '@nestjs/common';
import { No5TokoKasirController } from './no5-kasir-toko.controller.js';
import { No5KasirTokoService } from './no5-kasir-toko.service.js';

@Module({
  controllers: [No5TokoKasirController],
  providers: [No5KasirTokoService],
})
export class No5KasirTokoModule {}

