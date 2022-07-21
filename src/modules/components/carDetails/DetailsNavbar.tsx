import React from 'react';
import { Link } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';
import { message } from 'modules//atoms/Index';
import { useDatabase } from 'modules//hooks/Index';

interface DetailsNavbarProps {
  car: {
    name: string;
    year: string;
    total: number;
    color: object;
    model: string;
    wheel: object;
    interior: object;
  };
  id: string;
}

export function DetailsNavbar(props: DetailsNavbarProps) {
  const setMessage = useSetRecoilState(message);
  const { deleteCar } = useDatabase();
  return (
    <div className='pt-5 pl-10 flex top-20 left-0 w-full h-20 bg-[#fcfcfd] border border-[#C7C7D1] border-solid border-b-1'>
      <Link to='/'>
        <svg
          className='w-[34px] h-[34px] pr-6 pt-2'
          width='9'
          height='16'
          viewBox='0 0 9 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            d='M8.85355 0.146447C9.04882 0.341709 9.04882 0.658291 8.85355 0.853553L1.70711 8L8.85355 15.1464C9.04882 15.3417 9.04882 15.6583 8.85355 15.8536C8.65829 16.0488 8.34171 16.0488 8.14645 15.8536L0.646447 8.35355C0.451184 8.15829 0.451184 7.84171 0.646447 7.64645L8.14645 0.146447C8.34171 -0.0488155 8.65829 -0.0488155 8.85355 0.146447Z'
            fill='#2E2E38'
          />
        </svg>
      </Link>
      <p className='tracking-[-2px] hidden md:block text-[28px] text-[#9D9DAF] optician '>
        {props.car.year}
      </p>
      <p className=' pl-6 tracking-[-2px] hidden md:block  text-[28px] text-[#2E2E38] optician '>
        {props.car.name}
      </p>
      <Link
        className='ml-auto w-30'
        to={{ pathname: `/configurator/${props.id}` }}
      >
        <button
          type='button'
          className='px-5  pb-4 h-14  bg-white text-[#3f3fe4]'
        >
          Edit configuration
        </button>
      </Link>
      {props.id === 'rs5' ||
      props.id === 'rs6' ||
      props.id === 'e-tron' ? null : (
        <Link to='/'>
          <button
            type='button'
            className='w-20  px-5 mr-6 h-14  pb-4 bg-white  text-[#d2341e]'
            onClick={(e) => {
              deleteCar(props.id);
              setMessage({ state: true });
              setTimeout(() => {
                setMessage({ state: false });
              }, 2500);
            }}
          >
            Delete
          </button>
        </Link>
      )}
    </div>
  );
}
