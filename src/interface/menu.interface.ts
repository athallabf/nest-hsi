interface MenuItems {
  label: string;
  icon?: string;
  disabled?: boolean;
}

export interface Menu {
  title: string;
  description?: string;
  items: MenuItems[];
  price: number;
}
