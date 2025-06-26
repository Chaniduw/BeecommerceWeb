import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyCryptoComponent } from '../../shared/crypto-forms/buy-crypto/buy-crypto.component';
import { SellCryptoComponent } from '../../shared/crypto-forms/sell-crypto/sell-crypto.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, BuyCryptoComponent, SellCryptoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroSection', { static: false }) heroSection!: ElementRef;

  isBuyModalOpen = false;
  isSellModalOpen = false;
  isAnimationsEnabled = true;

  // Dynamic crypto data
  cryptoData = {
    ethereum: {
      price: 2847.32,
      change: 5.47,
      symbol: 'ETH',
    },
    portfolio: {
      value: 12459.0,
      change: 12.5,
    },
  };

  // Animation intervals
  private priceUpdateInterval?: number;
  private animationFrameId?: number;

  ngOnInit(): void {
    this.checkAnimationPreference();
    this.startPriceUpdates();
  }

  ngAfterViewInit(): void {
    if (this.isAnimationsEnabled) {
      this.initializeAnimations();
    }
  }

  ngOnDestroy(): void {
    if (this.priceUpdateInterval) {
      clearInterval(this.priceUpdateInterval);
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isBuyModalOpen) {
      this.closeBuyModal();
    }
    if (this.isSellModalOpen) {
      this.closeSellModal();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Handle responsive animations
    this.handleResponsiveAnimations();
  }

  openBuyModal(): void {
    this.isBuyModalOpen = true;
    document.body.style.overflow = 'hidden';
    // Add modal open class for additional styling
    document.body.classList.add('modal-open');
  }

  closeBuyModal(): void {
    this.isBuyModalOpen = false;
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  }

  openSellModal(): void {
    this.isSellModalOpen = true;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  }

  closeSellModal(): void {
    this.isSellModalOpen = false;
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  }

  // Download app functionality
  downloadAndroidApp(): void {
    // In a real app, this would redirect to Google Play Store
    console.log('Redirecting to Google Play Store...');
    // window.open('https://play.google.com/store/apps/details?id=com.crypgo.app', '_blank');
  }

  downloadIOSApp(): void {
    // In a real app, this would redirect to App Store
    console.log('Redirecting to App Store...');
    // window.open('https://apps.apple.com/app/crypgo/id123456789', '_blank');
  }

  private checkAnimationPreference(): void {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    this.isAnimationsEnabled = !prefersReducedMotion;
  }

  private startPriceUpdates(): void {
    // Simulate live price updates every 3 seconds
    this.priceUpdateInterval = window.setInterval(() => {
      this.updateCryptoPrices();
    }, 3000);
  }

  private updateCryptoPrices(): void {
    // Simulate price fluctuations
    const priceVariation = (Math.random() - 0.5) * 100; // ±50
    const changeVariation = (Math.random() - 0.5) * 10; // ±5%

    this.cryptoData.ethereum.price += priceVariation;
    this.cryptoData.ethereum.change += changeVariation;

    // Keep prices within realistic bounds
    this.cryptoData.ethereum.price = Math.max(
      2000,
      Math.min(4000, this.cryptoData.ethereum.price)
    );
    this.cryptoData.ethereum.change = Math.max(
      -15,
      Math.min(20, this.cryptoData.ethereum.change)
    );

    // Update portfolio value accordingly
    this.cryptoData.portfolio.value += priceVariation * 4.37; // Assuming some ETH holdings
    this.cryptoData.portfolio.change = this.cryptoData.ethereum.change * 0.8; // Portfolio follows ETH trend
  }

  private initializeAnimations(): void {
    if (!this.heroSection) return;

    // Initialize intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.triggerHeroAnimations();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.heroSection.nativeElement);
  }

  private triggerHeroAnimations(): void {
    // Add staggered animation classes to elements
    const animatedElements = this.heroSection.nativeElement.querySelectorAll(
      '[class*="animate-"]'
    );

    animatedElements.forEach((element: HTMLElement, index: number) => {
      setTimeout(() => {
        element.classList.add('animation-triggered');
      }, index * 100);
    });
  }

  private handleResponsiveAnimations(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Disable heavy animations on mobile
      document.documentElement.style.setProperty(
        '--animation-duration',
        '0.3s'
      );
    } else {
      // Enable full animations on desktop
      document.documentElement.style.setProperty(
        '--animation-duration',
        '0.8s'
      );
    }
  }

  // Utility methods for template
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  }

  formatChange(change: number): string {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  }

  getChangeColor(change: number): string {
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  }
}
