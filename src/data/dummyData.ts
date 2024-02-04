import { Menu } from 'src/interface/menu.interface';

export const dummyData: Menu[] = [
  {
    title: 'Paket Nasi + Ayam Bakar',
    description: 'ayam bakar khas daerah xyz',
    items: [
      {
        label: 'Nasi putih',
        icon: 'rice',
        disabled: false,
      },
      {
        label: 'Ayam Bakar',
        icon: 'meat',
        disabled: false,
      },
    ],
    price: 21000,
  },
  {
    title: 'Paket Nasi + Ikan bakar',
    description: 'ikan bakar khas daerah xyz',
    items: [
      {
        label: 'Nasi putih',
        icon: 'rice',
        disabled: false,
      },
      {
        label: 'Ikan bakar',
        icon: 'fish',
        disabled: false,
      },
    ],
    price: 32000,
  },
];
