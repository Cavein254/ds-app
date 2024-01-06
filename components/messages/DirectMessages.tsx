import Dog from '@/assets/dog2_edited.png';
import Image from 'next/image';
const DirectMessages = () => {
  return (
    <div className="flex justify-between items-center hover:text-lg mt-2 hover:font-extrabold">
      <div>
        <Image
          src={Dog}
          height={50}
          width={50}
          alt="user profile image"
          className="contain rounded-full"
        />
      </div>
      <div>
        <h4>Jeremy Dickson</h4>
      </div>
      <div>
        <div className="h-[24px] w-[24px] rounded-full  bg-blue-300 text-blue-900 flex justify-center items-center">
          <h4 className="">2</h4>
        </div>
      </div>
    </div>
  );
};

export default DirectMessages;
