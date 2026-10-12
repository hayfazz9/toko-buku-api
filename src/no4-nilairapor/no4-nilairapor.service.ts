
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class No4NilaiRaporService {
  hitung(body: any) {
    const { nama, tugas, uts, uas } = body;

    // Validasi nama
    if (typeof nama !== 'string' || nama.trim() === '') {
      throw new BadRequestException('Nama wajib diisi');
    }

    // Validasi tugas
    if (!Array.isArray(tugas) || tugas.length < 1) {
      throw new BadRequestException('Tugas harus berupa array berisi minimal 1 nilai');
    }

    for (const nilai of tugas) {
      if (typeof nilai !== 'number' || nilai < 0 || nilai > 100) {
        throw new BadRequestException('Setiap nilai tugas harus angka 0 sampai 100');
      }
    }

    if (
      typeof uts !== 'number' || uts < 0 || uts > 100 ||
      typeof uas !== 'number' || uas < 0 || uas > 100
    ) {
      throw new BadRequestException('Nilai UTS dan UAS harus angka 0 sampai 100');
    }

    const totalTugas = tugas.reduce(
      (total: number, nilai: number) => total + nilai,
      0,
    );
    const rataTugas = totalTugas / tugas.length;

    const nilaiAkhir =
      Math.round(
        ((0.3 * rataTugas) + (0.3 * uts) + (0.4 * uas) + Number.EPSILON) * 100,
      ) / 100;

    let predikat: string;
    if (nilaiAkhir >= 90) predikat = 'A';
    else if (nilaiAkhir >= 80) predikat = 'B';
    else if (nilaiAkhir >= 70) predikat = 'C';
    else predikat = 'D';

    const status = nilaiAkhir >= 75 ? 'Lulus' : 'Remedial';

    return {
      nama: nama.trim(),
      rataTugas,
      nilaiAkhir,
      predikat,
      status,
    };
  }
}
