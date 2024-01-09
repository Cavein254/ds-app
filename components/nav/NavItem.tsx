'use client';

import Dog from '@/assets/dog2_edited.png';
import Image from 'next/image';

import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface NavItemProps {
  id: string;
  imageUrl: string | null;
}

const NavItem = ({ id, imageUrl }: NavItemProps) => {
  const useClick = () => {
    //return router.push(`tribes/${id}`);
  };
  return (
    <div className="pt-2">
      <TooltipProvider>
        <Tooltip side="right" align="center" label="my Label">
          <button className={cn()} onClick={() => useClick()}>
            <Image
              src={Dog}
              alt="tribe image"
              height={50}
              width={50}
              className="contain rounded-full"
            />
          </button>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default NavItem;
