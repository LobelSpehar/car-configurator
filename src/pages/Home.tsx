import React, { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { baseLengthState } from '../modules/atoms/Index';
import { useDatabase } from '../modules/hooks/Index';
import {
  LoadingMsg,
  SavedConfigPreview,
  Navbar,
  EmptyPage,
} from '../modules/components/index';

export function Home() {
  const baseLength = useRecoilValue(baseLengthState);

  const { getCarList } = useDatabase();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarList(setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full h-screen'>
      <div className='w-full h-20'>
        <Navbar homeState={baseLength > 0} />
      </div>

      {baseLength > 0 ? (
        loading ? (
          <LoadingMsg />
        ) : (
          <SavedConfigPreview />
        )
      ) : (
        <EmptyPage />
      )}
    </div>
  );
}
