import React, { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { useDatabase } from 'modules/hooks/Index';
import { baseState } from 'modules/atoms/Index';
import {
  LoadingMsg,
  SavedConfigPreview,
  Navbar,
  EmptyPage,
} from 'modules/components/index';

export function Home() {
  const baseLength = useRecoilValue(baseState).length;
  const { getCarList } = useDatabase();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarList(setLoading);
  }, []);

  return (
    <div className='w-full h-screen'>
      <Navbar homeState={baseLength > 0} />

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
