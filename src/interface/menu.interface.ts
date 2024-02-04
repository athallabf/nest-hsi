interface MenuItems {
  label: string;
  icon?: string;
  disabled?: boolean;
}

export interface Menu {
  id: number;
  title: string;
  description?: string;
  items: MenuItems[];
  price: number;
}
