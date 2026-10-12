import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 1. Nama
  @Get('greeting/:name')
  getGreeting(@Param('name') name: string): string {
    return this.appService.getGreeting(name);
  }

  // 2. umur
  @Get('age-category/:age')
  getAgeCategory(@Param('age') age: string): string {
    const ageNumber = Number(age);

    if (isNaN(ageNumber)) {
      return 'Invalid age';
    }
    return this.appService.getAgeCategory(ageNumber);
  }

  // 3. BMI
@Get('bmi')
getBMI(
  @Query('weight') weight: string,
  @Query('height') height: string
): string {
  const weightNumber = parseFloat(weight);
  const heightNumber = parseFloat(height);

  if (isNaN(weightNumber) || isNaN(heightNumber)) {
    return 'Invalid input';
  }

  return this.appService.getBMI(weightNumber, heightNumber);
}

@Post('luas-balok')
countLuasBalok(@Body('panjang') panjang: number, @Body('lebar')
lebar: number): number {
  return this.appService.countLuasBalok(panjang, lebar);
}

@Post('belah-ketupat')
countBelahKetupat(
  @Body('d1') d1: number,
  @Body('d2') d2: number,
  @Body('sisi') sisi: number
) {
  return this.appService.countBelahKetupat(d1, d2, sisi);
}

}

