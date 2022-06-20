import React from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { baseState } from 'modules/atoms/Index';
import { ConfigureACarButton, PreviewItems } from '../index';

export function SavedConfigPreview() {
  const database = useRecoilValue(baseState);

  return (
    <div className='mx-auto w-4/5 max-h-full mt-[76px]'>
      <p className='text-[#2E2E38] inter text-2xl float-left'>
        View saved configurations
      </p>
      <Link to='/selection'>
        <ConfigureACarButton />
      </Link>

      <div className='flex flex-col w-full pb-14 '>
        {database.map((car, index) => {
          return <PreviewItems key={index} data={car} />;
        })}
      </div>
    </div>
  );
}
