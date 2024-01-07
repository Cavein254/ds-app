import axios from 'axios';
// import { useEffect, useState } from 'react';
import TribeListings from './TribeListings';

const TribeListingContainer = () => {
  // const [tribe, setTribe] = useState([]);
  const id = 'clr0q48ic00005ej2qnd61sey';

  //TODO :: Better way to find tribes as
  //TODO :: is being used in multiple places

  const tribe = axios
    .post('/api/me/tribes', { profileId: id })
    .then((res) => res?.data)
    .catch((err) => console.log(err));

  return (
    <>
      {tribe?.map((item) => (
        <div key={item?.id}>
          <TribeListings name={item?.name} />
        </div>
      ))}
    </>
  );
};

export default TribeListingContainer;
