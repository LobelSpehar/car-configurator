import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MainMenu } from '../index';

interface NavbarProps {
  hideMenuBtn?: boolean;
  homeState?: boolean;
}

export function Navbar(props: NavbarProps) {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className='relative top-0 left-0 w-full h-20 bg-[#2E2E38]'>
      <div className='absolute w-20 h-20 top-[28px] text-center left-[51px]'>
        <svg
          width='18'
          height='20'
          viewBox='0 0 18 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.3132 9.25442C12.1637 9.25442 13.5379 8.28371 13.5379 6.51308C13.5379 4.62859 12.3881 3.82866 10.3132 3.82866H4.53665V9.25442H10.3132ZM0.25 0H10.569C14.7186 0 17.831 2.4839 17.831 6.53834C17.831 10.651 14.8308 13.078 10.569 13.078H4.53971V19.9876H0.25V0Z'
            fill='white'
          />
        </svg>
      </div>
      {props.hideMenuBtn ? null : (
        <>
          <button
            className='h-12 w-12 float-right mt-4 mr-10'
            type='button'
            onClick={(e) => {
              setMenuState(!menuState);
            }}
          >
            <div className='w-10 h-[2.86px] bg-white rounded'></div>
            <div className='w-[31.43px] h-[2.86px] bg-white rounded mt-[5.71px]'></div>
          </button>
          <div className={menuState ? 'absolute right-64 top-14' : 'hidden'}>
            <MainMenu />
          </div>{' '}
        </>
      )}
      <div className={props.homeState ? 'block' : 'hidden'}>
        <Link to='/selection'>
          <button className='inter float-right mt-6 mr-10 border-solid border border-[#505062] text-white font-bold w-[132px] h-8 text-xs'>
            Configure a car
          </button>
        </Link>
      </div>
    </div>
  );
}
