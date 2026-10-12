import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './books/books.module.js';
import { No1CekBilanganModule } from './no1-cek-bilangan/no1-cek-bilangan.module.js';
import { No2KonversiSuhuModule } from './no2-konversi-suhu/no2-konversi-suhu.module.js';
import { No3GeneratorModule } from './no3-generator/no3-generator.module.js';
import { No4NilaiRaporModule } from './no4-nilairapor/no4-nilairapor.module.js';
import { No5KasirTokoModule } from './no5-kasir-toko/no5-kasir-toko.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'toko-buku-api',
    }),
    BooksModule,
    No1CekBilanganModule,
    No2KonversiSuhuModule,
    No3GeneratorModule,
    No4NilaiRaporModule,
    No5KasirTokoModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
