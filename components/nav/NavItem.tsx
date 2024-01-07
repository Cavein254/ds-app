"use client"

import Dog from '@/assets/dog2_edited.png';
import Image from 'next/image';

import { Actio } from ;
const NavItem = () => {
  return (
    <div className="pt-2">
      <Image
        src={Dog}
        alt="tribe image"
        height={50}
        width={50}
        className="contain rounded-full"
      />
    </div>
  );
};

export default NavItem;
