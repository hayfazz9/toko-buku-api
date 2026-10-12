import { BadRequestException, Injectable } from '@nestjs/common';
import { SuhuDto } from './dto/suhu.dto.js';

@Injectable()
export class No2KonversiSuhuService {
    konversi(nilaiParam: string, dari: string, ke: string): SuhuDto {
        if (nilaiParam === undefined || dari === undefined || ke === undefined || nilaiParam.trim() === '') {
            throw new BadRequestException('Query nilai, dari, dan ke wajib diisi',);
        }

        const nilai = Number(nilaiParam);
        if (!Number.isFinite(nilai)) {
            throw new BadRequestException('Nilai harus berupa angka');
        }

        const satuan = ['celsius', 'fahrenheit', 'kelvin'];
        if (!satuan.includes(dari) || !satuan.includes(ke)) {
            throw new BadRequestException('Satuan harus celsius, fahrenheit, atau kelvin',);
        }

        if (dari === ke) {
            throw new BadRequestException('Satuan asal dan tujuan tidak boleh sama',);
        }

        if (dari === 'kelvin' && nilai < 0) {
            throw new BadRequestException('Suhu Kelvin tidak boleh kurang dari 0',);
        }

        let celsius: number;
        if (dari === 'celsius') {
            celsius = nilai;
        } else if (dari === 'fahrenheit') {
            celsius = (nilai - 32) * 5 / 9;
        } else {
            celsius = nilai - 273.15;
        }

        let hasil: number;
        if (ke === 'celsius') {
            hasil = celsius;
        } else if (ke === 'fahrenheit') {
            hasil = celsius * 9 / 5 + 32;
        } else {
            hasil = celsius + 273.15;
        }

        hasil = Math.round((hasil + Number.EPSILON) * 100) / 100;

        return {
            nilaiAsal: nilai,
            satuanAsal: dari,
            hasil,
            satuanHasil: ke,
        };
    }
}
