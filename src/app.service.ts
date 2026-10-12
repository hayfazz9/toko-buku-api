import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // 1. Nama
  getGreeting(name: string): string {
    return `Hello, ${name}!`;
  }

  // 2. Umur
  getAgeCategory(age: number): string {
    if (age > 17) {
      return 'Anak-anak';
    } else if (age < 17) {
      return 'Remaja';
    } else {
      return 'Dewasa';
    }
  }

  getBMI(weight: number, height: number): string {
    // Validate input
    if (height <= 0 || weight <= 0) {
      return 'Invalid input';
    }
    if (isNaN(weight) || isNaN(height)) {
      return 'Invalid input';
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    if (bmi < 10.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  }

  countLuasBalok(panjang: number, lebar: number): number {
    if (panjang <= 0 || lebar <= 0) {
      throw new Error('Panjang dan lebar harus lebih besar dari 0');
    }
    return panjang * lebar;
  }

  countBelahKetupat(d1: number, d2: number, sisi: number):
  {luas: number, keliling: number} {
    if (d1 <= 0 || d2 <= 0) {
      throw new Error('Diagonal harus lebih besar dari 0');
    }
    const luas = (d1 * d2) / 2;
    const keliling = 4 * sisi;
    const result = {
      luas: luas,
      keliling: keliling,
    };
    return result;    
  }


}
