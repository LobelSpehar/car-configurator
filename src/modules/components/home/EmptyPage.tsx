import React from 'react';
import { Link } from 'react-router-dom';

import { ConfigureACarButton } from 'modules/components/index';

export function EmptyPage() {
  return (
    <div className=' mx-auto w-4/5 max-h-full  mt-[76px]'>
      <header>
        <p className='text-[#2E2E38] inter text-2xl float-left mr-16 '>
          View saved configurations
        </p>
        <Link to='/selection'>
          <ConfigureACarButton />
        </Link>
      </header>
      <main className='sm:w-1/2 lg:w-2/5 mx-auto md:translate-y-2/3 '>
        <img
          src={require('assets/images/RS6/View=Front Left, Color=Black, Wheel Style=One.png')}
          alt='text'
          className='opacity-10'
        ></img>
        <p className='text-[#73738C] mt-6 inter sm:text-xl text-center'>
          You haven’t configured any cars yet. You may <br /> choose to{' '}
          <Link to='/selection'>
            <b className='text-[#1e1ed2] hover:underline hover:cursor-pointer'>
              configure some now.
            </b>
          </Link>
        </p>
      </main>
    </div>
  );
}
