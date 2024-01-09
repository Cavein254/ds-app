'use client';

import { usePathname } from 'next/navigation';

import Dog from '@/assets/dog2_edited.png';
import Image from 'next/image';

import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface NavItemProps {
  id: string;
  imageUrl: string | null;
}

const NavItem = ({ id, imageUrl }: NavItemProps) => {
  const router = useRouter();
  const path = usePathname();
  const useClick = () => {
    return router.replace(`/tribe/${id}`);
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
