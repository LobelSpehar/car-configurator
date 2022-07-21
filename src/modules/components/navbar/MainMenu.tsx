import React from 'react';
import { Link } from 'react-router-dom';

import { useLogin } from 'modules/hooks/Index';

export function MainMenu() {
  const { logOut } = useLogin();
  return (
    <div className='z-10 drop-shadow-md block h-[104px] w-[212px] fixed bg-[#F1F1F4] flex flex-col'>
      <Link to='/'>
        <button
          type='button'
          className='w-full h-[52px] leading-5 bg-white text-sm text-[#3F3FE4]'
        >
          <p className='float-left ml-6 inter'>My saved configurations</p>
        </button>
      </Link>
      <Link to='/'>
        <button
          onClick={(e) => logOut()}
          type='button'
          className='w-full h-[52px] leading-5 bg-white mt-0.5 text-sm text-[#3F3FE4] '
        >
          <p className='float-left ml-6 inter'> Logout</p>
        </button>
      </Link>
    </div>
  );
}
