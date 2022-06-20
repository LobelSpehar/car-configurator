import React, { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { Navbar, SelectItem, LoadingMsg } from '../modules/components/index';
import { baseState } from '../modules/atoms/Index';
import { useDatabase } from '../modules/hooks/Index';

export function SelectCar() {
  const newCarList = useRecoilValue(baseState);
  const { getNewCarList } = useDatabase();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewCarList(setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-20'>
        <Navbar homeState={false} />
      </div>
      {loading ? (
        <LoadingMsg />
      ) : (
        <div className='w-4/5 mx-auto h-auto'>
          <p className='mt-20 inter text-[#2E2E38] text-2xl'>Configure a car</p>
          <p className='mt-4 inter text-[#73738C] text-sm mb-16'>
            Pick your favorite model and start configuring.
          </p>
          <div className='w-full  h-auto flex flex-wrap flex-starts'>
            {newCarList.map((item) => (
              <SelectItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
