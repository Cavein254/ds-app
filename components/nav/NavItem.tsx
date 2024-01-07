import Dog from '@/assets/dog2_edited.png';
import Image from 'next/image';
const NavItem = () => {
  return (
    <div>
      <Image src={Dog} alt="tribe image" height={50} width={50} />
    </div>
  );
};

export default NavItem;
