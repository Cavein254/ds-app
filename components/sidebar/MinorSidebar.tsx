'use client';

import { ArrowLeft } from 'lucide-react';
import DirectMessages from '../messages/DirectMessages';
import { ScrollArea } from '../ui/scroll-area';
import FavoriteListings from './FavoritesListing';
import MinorSidebarItem from './MinorSidebarItem';
import TribeListingContainer from './TribeListingContainer';
interface StateProps {
  setopenModal: (value: boolean) => void;
  openModal: boolean;
}
const MinorSidebar = async ({ openModal, setopenModal }: StateProps) => {
  //TODO :: implement better state management tool

  return (
    <div className="h-full w-[250px] dark:bg-[#000000] p-4 flex flex-row justify-center items-center bg-gray-300">
      <div>
        <div className="flex justify-end items-center py-2">
          <div
            className="h-[48px] w-[48px] rounded-full py-2 hover:shadow-sm dark:bg-slate-900 flex justify-center items-center
    hover:dark:bg-slate-100 hover:dark:text-[#130f0e] hover:bg-emerald-600 hover:text-slate-100"
            onClick={() => setopenModal(!openModal)}
          >
            {openModal ? '' : <ArrowLeft />}
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md dark:bg-gray-900"
          />
        </div>
        <MinorSidebarItem name="favorites" />
        <div>
          <FavoriteListings name="Jungle Tribe" />
          <FavoriteListings name="Drama Tribe" />
        </div>
        <MinorSidebarItem name="Direct Messages" />
        <div>
          <DirectMessages />
          <DirectMessages />
          <DirectMessages />
        </div>
        <MinorSidebarItem name="Tribes" />
        <div>
          <ScrollArea className="flex-1 w-full h-[200px]">
            <TribeListingContainer />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default MinorSidebar;
