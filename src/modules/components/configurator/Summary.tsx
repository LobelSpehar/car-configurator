import React from 'react';
import { Link } from 'react-router-dom';

import { useDatabase } from '../../hooks/Index';
import { PricelistItem, Carousel } from '../index';

interface SummaryProps {
  data: {
    id: string;
    name: string;
    year: string;
    total: number;
    color: { type: string; price: number };
    model: string;
    wheel: { type: string; name: string; price: number };
    interior: { type: string; price: number };
  };
  onSetStep: Function;
}

export function Summary(props: SummaryProps) {
  const { addCar } = useDatabase();

  return (
    <>
      <div className='w-4/5 mx-auto'>
        <h1 className='text-[40px] font-bold aeonik w-[260px] text-center text-[#2E2E38] relative left-1/2 -translate-x-[130px] mt-12'>
          Almost done!
        </h1>
        <h1 className=' text-[#2E2E38] mt-4 mx-auto w-[424px] text-center'>
          Review your configuration and save your car.
        </h1>
        <div className='-translate-y-16'>
          <Carousel data={props.data} />
        </div>
        <div className='-translate-y-16 pb-[36px] border-b-2 mt-[92px] w-full border-solid border-[#C7C7D1]'>
          <p className='text-[#2E2E38] leading-[44px] tracking-[-2px] optician text-5xl'>
            {props.data.name}
          </p>

          <p className='text-[#73738C] tracking-[-2px] text-[28px] leading-[32px] optician'>
            {props.data.year}
          </p>
          <div className='w-40 h-auto  float-right  -translate-y-12'>
            <p className='text-[#9D9DAF] text-sm tracking-[2px] w-12 inter ml-auto -translate-x-8 '>
              TOTAL
              <svg
                className='translate-x-[60px] -translate-y-[19px]'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z'
                  fill='#9898F0'
                />
              </svg>
            </p>
            <p className='inter text-2xl ml-auto text-[#2E2E38] -translate-y-[19px] translate-x-2'>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }).format(props.data.total)}
            </p>
          </div>
        </div>
        <div className='w-full h-20 -translate-y-4 mt-9'>
          <p className='inter text-2xl text-[#2E2E38] float-left'>
            Your configuration details
          </p>
          <div className='float-right w-7/12 h-auto'>
            <p className='inter text-2xl text-[#505062]'>Exterior</p>{' '}
            <button
              type='button'
              className='float-right inter -translate-y-4 text-sm text-[#1E1ED2]'
              onClick={(e) => props.onSetStep(0)}
            >
              Edit
            </button>
            <div className='w-full mt-4 border-t border-solid border-[#C7C7D1]'>
              <PricelistItem type={'exterior'} data={props.data.color} />
              <PricelistItem
                type={'wheel'}
                model={props.data.model}
                data={props.data.wheel}
              />
            </div>
            <p className='inter text-2xl text-[#505062] mt-12'>Interior</p>{' '}
            <button
              type='button'
              className='float-right inter  -translate-y-4 text-sm text-[#1E1ED2]'
              onClick={(e) => props.onSetStep(1)}
            >
              Edit
            </button>
            <div className='w-full mt-4 border-t border-solid border-[#C7C7D1]'>
              <PricelistItem type={'interior'} data={props.data.interior} />
            </div>
            <div className='mt-12 flex mb-36'>
              <b className='inter text-2xl text-[#505062]'>Total</b>
              <b className='inter text-2xl text-[#505062] ml-auto'>
                {new Intl.NumberFormat('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(props.data.total)}
              </b>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className='flex w-screen fixed bottom-0 h-20 bg-[#FCFCFD] border-t border-[#C7C7D1]'>
        <p className='tracking-[-2px] ml-[40px] mt-[23px] leading-[32px] text-[28px] text-[#9D9DAF] optician '>
          {props.data.year}
        </p>
        <p className=' pl-6 tracking-[-2px] mt-[23px] leading-[32px] text-[28px] text-[#2E2E38] optician '>
          {props.data.name}
        </p>
        <div className='ml-auto '>
          <p className='text-[#9D9DAF] -translate-x-28 text-sm tracking-[2px] inline-block pl-10  w-12 mt-2 inter'>
            TOTAL
            <svg
              className='translate-x-14 -translate-y-[19px]'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z'
                fill='#9898F0'
              />
            </svg>
          </p>
          <p className='inter text-2xl inline-block text-[#2E2E38] pr-10 leading-[32px] mt-[23px]'>
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(props.data.total)}
          </p>
        </div>
        <Link
          to='/'
          className='w-[356px] h-20 bg-[#1E1ED2]'
          onClick={(e) => {
            addCar(props.data);
          }}
        >
          <p className='inter text-[#FCFCFD] font-bold text-center mt-7 '>
            Save your configuration
          </p>
        </Link>
      </div>
    </>
  );
}
