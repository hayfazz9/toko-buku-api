import { BadGatewayException, Injectable } from '@nestjs/common';
import { BilanganDto } from './dto/bilangan.dto.js';

@Injectable()
export class No1CekBilanganService {
    cekBilangan(angkaParam: string): BilanganDto {
        const angka = Number(angkaParam);

        if (angkaParam.trim() === '' || Number.isNaN(angka) || !Number.isInteger(angka) || angka < 1 || angka > 100) {
            throw new BadGatewayException('Angka harus berupa bilangan bulat antara 1 sampai 100,');
        }

        return {
            angka: angka,
            jenis: angka % 2 === 0 ? 'genap' : 'ganjil',
            kuadrat: angka * angka,
            kelipatanLima: angka % 5 === 0,
        };

    }
}
