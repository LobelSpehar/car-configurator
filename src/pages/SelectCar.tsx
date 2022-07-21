import React, { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { Navbar, SelectItem, LoadingMsg } from 'modules/components/index';
import { baseState, DbInterface } from 'modules/atoms/FirebaseAtom';
import { useDatabase } from 'modules/hooks/useDatabase';

export function SelectCar() {
  const newCarList = useRecoilValue(baseState);
  const { getNewCarList } = useDatabase();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewCarList(setLoading);
  }, []);
  return (
    <div className='w-full h-screen'>
      <Navbar homeState={false} />

      {loading ? (
        <LoadingMsg />
      ) : (
        <main className='w-4/5 mx-auto h-auto'>
          <header>
            <h2 className='mt-20 inter text-[#2E2E38] text-2xl'>
              Configure a car
            </h2>
            <p className='mt-4 inter text-[#73738C] text-sm mb-16'>
              Pick your favorite model and start configuring.
            </p>
          </header>
          <ul className='w-full h-auto flex flex-wrap flex-starts'>
            {newCarList.map((item: DbInterface) => (
              <SelectItem key={item.id} car={item} />
            ))}
          </ul>
        </main>
      )}
    </div>
  );
}
