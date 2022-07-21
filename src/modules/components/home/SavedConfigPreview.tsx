import React from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { baseState, DbInterface } from 'modules/atoms/Index';
import { ConfigureACarButton, PreviewItems } from 'modules/components/index';

export function SavedConfigPreview() {
  const database = useRecoilValue(baseState);

  return (
    <main className='mx-auto w-4/5 max-h-full mt-[76px]'>
      <header>
        <p className='text-[#2E2E38] inter text-2xl float-left mr-16'>
          View saved configurations
        </p>
        <Link to='/selection'>
          <ConfigureACarButton />
        </Link>
      </header>

      <ul className='flex flex-col w-full pb-14 '>
        {database.map((car: DbInterface, index: number) => {
          return <PreviewItems key={index} car={car} />;
        })}
      </ul>
    </main>
  );
}
