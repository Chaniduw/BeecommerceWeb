import { Injectable } from '@angular/core';

export interface FooterLabel {
  label: string;
  href: string;
}

export interface PriceData {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}

export interface PortfolioData {
  image: string;
  title: string;
}

export interface UpgradeData {
  title: string;
}

export interface PerksData {
  icon: string;
  title: string;
  text: string;
  space: string;
}

export interface TimelineData {
  icon: string;
  title: string;
  text: string;
  position: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  footerLabels: FooterLabel[] = [
    { label: 'Terms', href: '#' },
    { label: 'Disclosures', href: '#' },
    { label: 'Disclosures', href: '#' },
    { label: 'Latest News', href: '#' },
  ];

  priceData: PriceData[] = [
    {
      title: 'Bitcoin',
      short: 'BTC/USD',
      icon: '/assets/images/icons/icon-bitcoin.svg',
      background: 'bg-warning bg-opacity-20',
      price: '$93,291.24',
      mark: '$94,040.99 (-0.9%)',
      width: 18,
      height: 23,
      padding: 'px-4 py-3',
    },
    {
      title: 'Ethereum',
      short: 'ETH/USD',
      icon: '/assets/images/icons/icon-ethereum.svg',
      background: 'bg-light_grey',
      price: '$3,128.84',
      mark: '$4,878.26 (-35.9%)',
      width: 18,
      height: 23,
      padding: 'px-4 py-2',
    },
    {
      title: 'Bitcoin Cash',
      short: 'BTC/USD',
      icon: '/assets/images/icons/icon-bitcoin-circle.svg',
      background: 'bg-warning bg-opacity-20',
      price: '$443.27',
      mark: '$3,785.82 (-88.3%)',
      width: 46,
      height: 46,
      padding: 'px-0 py-0',
    },
    {
      title: 'Litecoin',
      short: 'LTC/USD',
      icon: '/assets/images/icons/icon-litecoin.svg',
      background: 'bg-light_grey',
      price: '$86.11',
      mark: '$410.26 (-79.1%)',
      width: 18,
      height: 23,
      padding: 'px-4 py-3',
    },
    {
      title: 'Solana',
      short: 'SOL/USD',
      icon: '/assets/images/icons/icon-solana.svg',
      background: 'bg-light_grey',
      price: '$238.70',
      mark: '$259.96 (-8.2%)',
      width: 24,
      height: 24,
      padding: 'px-4 py-3',
    },
    {
      title: 'Dogecoin',
      short: 'DOGE/USD',
      icon: '/assets/images/icons/icon-dogecoin.svg',
      background: 'bg-light_grey',
      price: '$0.394',
      mark: '$0.7316 (-46.2%)',
      width: 46,
      height: 46,
      padding: 'px-0 py-0',
    },
  ];

  portfolioData: PortfolioData[] = [
    {
      image: '/assets/images/portfolio/icon-wallet.svg',
      title: 'Manage your portfolio',
    },
    {
      image: '/assets/images/portfolio/icon-vault.svg',
      title: 'Vault protection',
    },
    {
      image: '/assets/images/portfolio/icon-mobileapp.svg',
      title: 'Mobile apps',
    },
  ];

  upgradeData: UpgradeData[] = [
    { title: '100% Secure' },
    { title: 'A Fraction of the Cost' },
    { title: 'More Durable' },
    { title: 'Easier to Use' },
  ];

  perksData: PerksData[] = [
    {
      icon: '/assets/images/perks/icon-support.svg',
      title: '24/7 Support',
      text: 'Need help? Get your requests solved quickly via support team.',
      space: 'lg:mt-8',
    },
    {
      icon: '/assets/images/perks/icon-community.svg',
      title: 'Community',
      text: 'Join the conversations on our worldwide OKEx communities',
      space: 'lg:mt-14',
    },
    {
      icon: '/assets/images/perks/icon-academy.svg',
      title: 'Academy',
      text: 'Learn blockchain and crypto for free.',
      space: 'lg:mt-4',
    },
  ];

  timelineData: TimelineData[] = [
    {
      icon: '/assets/images/timeline/icon-planning.svg',
      title: 'Planning',
      text: "Map the project's scope and architecture",
      position: 'md:top-0 md:left-0',
    },
    {
      icon: '/assets/images/timeline/icon-refinement.svg',
      title: 'Refinement',
      text: 'Refine and improve your solution',
      position: 'md:top-0 md:right-0',
    },
    {
      icon: '/assets/images/timeline/icon-prototype.svg',
      title: 'Prototype',
      text: 'Build a working prototype to test your product',
      position: 'md:bottom-0 md:left-0',
    },
    {
      icon: '/assets/images/timeline/icon-support.svg',
      title: 'Support',
      text: 'Deploy the product and ensure full support by us',
      position: 'md:bottom-0 md:right-0',
    },
  ];

  constructor() {}

  getFooterLabels(): FooterLabel[] {
    return this.footerLabels;
  }

  getPriceData(): PriceData[] {
    return this.priceData;
  }

  getPortfolioData(): PortfolioData[] {
    return this.portfolioData;
  }

  getUpgradeData(): UpgradeData[] {
    return this.upgradeData;
  }

  getPerksData(): PerksData[] {
    return this.perksData;
  }

  getTimelineData(): TimelineData[] {
    return this.timelineData;
  }
}
