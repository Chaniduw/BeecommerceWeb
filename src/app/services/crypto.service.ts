import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Crypto {
  name: string;
  price: number;
}

export interface CryptoFormData {
  cryptoType: string;
  amount: number;
  cryptoName: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private cryptoList: Crypto[] = [
    { name: 'Bitcoin', price: 43000 },
    { name: 'Ethereum', price: 2500 },
    { name: 'Litecoin', price: 150 },
    { name: 'Ripple', price: 0.6 },
    { name: 'Cardano', price: 0.5 },
  ];

  constructor() {}

  getCryptoList(): Crypto[] {
    return this.cryptoList;
  }

  async buyCrypto(formData: CryptoFormData): Promise<any> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Successfully bought ${formData.amount} ${formData.cryptoName}`,
          transactionId: Math.random().toString(36).substr(2, 9),
        });
      }, 1000);
    });
  }

  async sellCrypto(formData: CryptoFormData): Promise<any> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Successfully sold ${formData.amount} ${formData.cryptoName}`,
          transactionId: Math.random().toString(36).substr(2, 9),
        });
      }, 1000);
    });
  }
}
