import { Module } from '@nestjs/common';
import { No3GeneratorService } from './no3-generator.service.js';
import { No3GeneratorController } from './no3-generator.controller.js';

@Module({
  controllers: [No3GeneratorController],
  providers: [No3GeneratorService],
})
export class No3GeneratorModule {}
