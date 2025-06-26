import { HeaderItem } from '../types/menu';

export const headerData: HeaderItem[] = [
  {
    label: 'Buy & Sell',
    href: '#buy-sell',
  },
  {
    label: 'Development',
    href: '#development',
    submenu: [
      { label: 'Blockchain Consulting', href: '#consulting' },
      { label: 'Smart Contracts', href: '#smart-contracts' },
      { label: 'DApp Development', href: '#dapp-dev' },
      { label: 'Token Creation', href: '#token-creation' },
    ],
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
  },
  {
    label: 'Upgrade',
    href: '#upgrade',
  },
  {
    label: 'Docs',
    href: '#docs',
  },
];
