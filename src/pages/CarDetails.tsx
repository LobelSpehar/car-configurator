import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { configCarAtom } from '../modules/atoms/Index';
import { useDatabase } from '../modules/hooks/Index';
import {
  Details,
  DetailsNavbar,
  LoadingMsg,
  Carousel,
  Navbar,
} from '../modules/components/index';

export function CarDetails() {
  type urlParams = {
    id: string;
  };
  const id: string = useParams<urlParams>().id || '';
  const { getCarById } = useDatabase();
  const car = useRecoilValue(configCarAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarById(id, setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='w-full h-20'>
        <Navbar homeState={false} />
      </div>
      {loading ? (
        <LoadingMsg />
      ) : (
        <>
          <DetailsNavbar id={id} car={car} />
          <div className='w-4/5 mx-auto'>
            <Carousel data={car} />
            <Details
              data={{
                name: car.name,
                year: car.year,
                total: car.total,
                color: { type: car.color.type, price: car.color.price },
                model: car.model,
                wheel: {
                  type: car.wheel.type,
                  name: car.wheel.name,
                  price: car.wheel.price,
                },
                interior: {
                  type: car.interior.type,
                  price: car.interior.price,
                },
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
