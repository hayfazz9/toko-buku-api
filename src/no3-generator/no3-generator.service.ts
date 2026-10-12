import { BadRequestException, Injectable } from '@nestjs/common';
import { DeretDto } from './dto/deret.dto.js';

@Injectable()
export class No3GeneratorService {
    buatDeret(jenis: string, jumlahParam: string): DeretDto {
        const jenisValid = ['ganjil', 'genap', 'kuadrat'];
        
        if (!jenisValid.includes(jenis)) {
            throw new BadRequestException('Jenis harus ganjil, genap, atau kuadrat',);
        }

        if (jumlahParam === undefined || jumlahParam.trim() === '') {
            throw new BadRequestException('Query jumlah wajib diisi');
        }

        const jumlah = Number(jumlahParam);

        if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 20) {
            throw new BadRequestException('Jumlah harus bilangan bulat antara 1 sampai 20',);
        }

        const data: number[] = [];
        let total = 0;

        for (let i = 1; i <= jumlah; i++) {
            let nilai: number;

            if (jenis === 'ganjil') {
                nilai = 2 * i - 1;
            } else if (jenis === 'genap') {
                nilai = 2 * i;
            } else {
                nilai = i * i;
            }

            data.push(nilai);
            total += nilai;
        }

        return { jenis, jumlah, data, total };
    }
}
