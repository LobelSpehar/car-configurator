import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { configCarAtom } from 'modules/atoms/Index';
import { useDatabase } from 'modules/hooks/Index';
import {
  Details,
  DetailsNavbar,
  LoadingMsg,
  Carousel,
  Navbar,
} from 'modules/components/index';

export function CarDetails() {
  type urlParams = {
    id: string;
  };
  const id: string = useParams<urlParams>().id || '';
  const { getCarById } = useDatabase();
  const config = useRecoilValue(configCarAtom);
  const car = config.data;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarById(id, setLoading);
  }, []);

  return (
    <div className='w-full h-full'>
      <Navbar homeState={false} />

      {loading ? (
        <LoadingMsg />
      ) : (
        <>
          <DetailsNavbar id={id} car={car} />
          <main className='w-4/5 mx-auto'>
            <Carousel data={car} />
            <Details data={car} />
          </main>
        </>
      )}
    </div>
  );
}
