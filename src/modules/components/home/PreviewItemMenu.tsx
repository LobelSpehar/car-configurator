import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';
import { message } from 'modules/atoms/Index';
import { useDatabase } from 'modules/hooks/Index';

interface PreviewItemMenuProps {
  id: string;
}

export function PreviewItemMenu(props: PreviewItemMenuProps) {
  const [menuState, setMenuState] = useState(false);
  const setMessage = useSetRecoilState(message);
  const { deleteCar } = useDatabase();
  return (
    <div className='relative right-0'>
      <button
        type='button'
        onClick={(e) => setMenuState(!menuState)}
        className='float-right w-4 h-4 mt-[30px] mr-[26px] '
      >
        <svg
          className='mx-auto'
          width='4'
          height='16'
          viewBox='0 0 4 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8Z'
            fill='#9898F0'
          />
          <path
            d='M4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14Z'
            fill='#9898F0'
          />
          <path
            d='M4 2C4 0.895431 3.10457 0 2 0C0.89543 0 0 0.895431 0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2Z'
            fill='#9898F0'
          />
        </svg>
      </button>
      <div
        className={
          menuState
            ? 'z-10 absolute right-8 top-12 drop-shadow-md block h-[104px] w-[200px] flex flex-col'
            : 'hidden'
        }
      >
        <Link to={{ pathname: `/view/${props.id}` }}>
          <button
            type='button'
            className='w-full h-[52px] bg-white text-[#3f3fe4]'
          >
            Edit configuration
          </button>
        </Link>
        <button
          type='button'
          className='w-full h-[52px] bg-white mt-[1px] text-[#d2341e]'
          onClick={(e) => {
            deleteCar(props.id);
            setMenuState(!menuState);
            setMessage({ state: true });
            setTimeout(() => {
              setMessage({ state: false });
            }, 2500);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
