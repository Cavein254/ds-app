'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TribeListings from './TribeListings';

const TribeListingContainer = () => {
  const [tribe, setTribe] = useState([]);
  const id = 'clr0q48ic00005ej2qnd61sey';

  useEffect(() => {
    axios
      .post('/api/me/tribes', { profileId: id })
      .then((res) => setTribe(res?.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(tribe);
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
