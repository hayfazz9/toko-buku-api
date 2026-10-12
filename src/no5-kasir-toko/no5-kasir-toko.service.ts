import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class No5KasirTokoService {
    checkout(memberParam: string, metode: string, body: any) {
        const member = memberParam?.toLowerCase();

        if (!['reguler', 'silver', 'gold'].includes(member)) {
            throw new BadRequestException('Member harus reguler, silver, atau gold',);
        }

        const metodeBayar = metode?.toLowerCase();

        if (!['tunai', 'qris'].includes(metodeBayar)) {
            throw new BadRequestException('Metode harus tunai atau qris',);
        }

        const items = body?.items;

        if (!Array.isArray(items) || items.length === 0) {
            throw new BadRequestException('Items harus berupa array dan tidak boleh kosong',);
        }

        if (items.length > 10) {
            throw new BadRequestException('Items maksimal 10 item',);
        }

        let subtotal = 0;
        let totalItem = 0;

        const rincian = items.map((item: any, index: number) => {
            const urutan = index + 1;

            if (typeof item?.nama !== 'string' || item.nama.trim() === '') {
                throw new BadRequestException(`Item ke-${urutan}: nama harus berupa string dan tidak kosong`,);
            }

            if (typeof item.harga !== 'number' || !Number.isFinite(item.harga) || item.harga <= 0) {
                throw new BadRequestException(`Item ke-${urutan}: harga harus angka lebih dari 0`,); 
            }

            if (typeof item.qty !== 'number' || !Number.isInteger(item.qty) || item.qty <= 0) {
                throw new BadRequestException(`Item ke-${urutan}: qty harus bilangan bulat lebih dari 0`,);
            }

            const subtotalItem = item.harga * item.qty;
            subtotal += subtotalItem;
            totalItem += item.qty;

            return {
                nama: item.nama.trim(),
                harga: item.harga,
                qty: item.qty,
                subtotal: subtotalItem,
            };
          });

          let persenDiskon = 0;
          if (member === 'silver') persenDiskon = 5;
          else if (member === 'gold') persenDiskon = 10;

          const diskon = subtotal * persenDiskon / 100;

          const biayaAdmin = metodeBayar === 'qris' ? (subtotal - diskon) * 0.01 : 0;

          const total = subtotal - diskon + biayaAdmin;

          return {
            member,
            metode: metodeBayar,
            rincian,
            totalItem,
            subtotal,
            diskon,
            biayaAdmin,
            total,
          };
        }
    }
