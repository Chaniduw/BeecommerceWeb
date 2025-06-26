export interface SubmenuItem {
  label: string;
  href: string;
}

export interface HeaderItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}
