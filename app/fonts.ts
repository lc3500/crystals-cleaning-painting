import { Lilita_One } from 'next/font/google';
import localFont from 'next/font/local';

export const lilitaOne = Lilita_One({
  subsets: ['latin'],
  variable: '--font-lilita-one',
  weight: '400',
});

export const antero = localFont({
  src: [
    {
      path: '../public/Antero.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-antero',
  display: 'swap',
});
