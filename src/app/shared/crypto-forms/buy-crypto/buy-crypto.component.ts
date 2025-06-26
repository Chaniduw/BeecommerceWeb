import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogoComponent } from '../../logo/logo.component';
import { CryptoService, Crypto } from '../../../services/crypto.service';

@Component({
  selector: 'app-buy-crypto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LogoComponent],
  templateUrl: './buy-crypto.component.html',
  styleUrl: './buy-crypto.component.scss'
})
export class BuyCryptoComponent implements OnInit {
  buyForm: FormGroup;
  loading = false;
  cryptoList: Crypto[] = [];
  selectedCrypto: Crypto = { name: 'Bitcoin BTC/USD', price: 67646.84 };
  isDropdownOpen = false;

  constructor(
    private fb: FormBuilder,
    private cryptoService: CryptoService
  ) {
    this.buyForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0.001)]]
    });
  }

  ngOnInit() {
    this.cryptoList = this.cryptoService.getCryptoList();
    if (this.cryptoList.length > 0) {
      this.selectedCrypto = this.cryptoList[0];
    }
  }

  get totalCost(): string {
    const amount = this.buyForm.get('amount')?.value;
    if (amount && !isNaN(amount)) {
      return (this.selectedCrypto.price * parseFloat(amount)).toFixed(2);
    }
    return '0.00';
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCrypto(crypto: Crypto) {
    this.selectedCrypto = crypto;
    this.isDropdownOpen = false;
  }

  async onSubmit() {
    if (this.buyForm.valid) {
      this.loading = true;
      try {
        const formData = {
          cryptoType: 'buy',
          amount: parseFloat(this.buyForm.get('amount')?.value),
          cryptoName: this.selectedCrypto.name,
          price: this.selectedCrypto.price
        };
        
        const result = await this.cryptoService.buyCrypto(formData);
        console.log('Buy successful:', result);
        this.buyForm.reset();
      } catch (error) {
        console.error('Buy failed:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
