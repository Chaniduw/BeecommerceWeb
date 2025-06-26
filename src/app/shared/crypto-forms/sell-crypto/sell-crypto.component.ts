import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LogoComponent } from '../../logo/logo.component';
import { CryptoService, Crypto } from '../../../services/crypto.service';

@Component({
  selector: 'app-sell-crypto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LogoComponent],
  templateUrl: './sell-crypto.component.html',
  styleUrl: './sell-crypto.component.scss',
})
export class SellCryptoComponent implements OnInit {
  sellForm: FormGroup;
  loading = false;
  cryptoList: Crypto[] = [];
  selectedCrypto: Crypto = { name: 'Bitcoin BTC/USD', price: 67646.84 };
  isDropdownOpen = false;

  constructor(private fb: FormBuilder, private cryptoService: CryptoService) {
    this.sellForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0.001)]],
    });
  }

  ngOnInit() {
    this.cryptoList = this.cryptoService.getCryptoList();
    if (this.cryptoList.length > 0) {
      this.selectedCrypto = this.cryptoList[0];
    }
  }

  get totalValue(): string {
    const amount = this.sellForm.get('amount')?.value;
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
    if (this.sellForm.valid) {
      this.loading = true;
      try {
        const formData = {
          cryptoType: 'sell',
          amount: parseFloat(this.sellForm.get('amount')?.value),
          cryptoName: this.selectedCrypto.name,
          price: this.selectedCrypto.price,
        };

        const result = await this.cryptoService.sellCrypto(formData);
        console.log('Sell successful:', result);
        this.sellForm.reset();
      } catch (error) {
        console.error('Sell failed:', error);
      } finally {
        this.loading = false;
      }
    }
  }
}
