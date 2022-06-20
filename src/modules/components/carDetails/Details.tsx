import React from 'react';

import { PricelistItem } from '../index';

interface DetailsProps {
  data: {
    name: string;
    year: string;
    total: number;
    color: { type: string; price: number };
    model: string;
    wheel: { type: string; name: string; price: number };
    interior: { type: string; price: number };
  };
}

export function Details(props: DetailsProps) {
  return (
    <>
      <div className=' pb-[36px] border-b-2 mt-[98px] w-full border-solid border-[#C7C7D1]'>
        <div className='float-left'>
          <p className='text-[#2E2E38] leading-[44px] tracking-[-2px] optician text-[48px]'>
            {props.data.name}
          </p>

          <p className='text-[#73738C] leading-[32px] text-[28px] optician tracking-[-2px] '>
            {props.data.year}
          </p>
        </div>
        <div className='w-40 h-auto ml-auto '>
          <p className='text-[#9D9DAF] text-sm leading-[20px] tracking-[2px] w-12 inter ml-auto -translate-x-9 translate-y-4'>
            TOTAL
            <svg
              className='translate-x-[60px] -translate-y-[18px] '
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
          <p className='inter text-2xl ml-auto leading-[32px] text-[#2E2E38] translate-x-1'>
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(props.data.total)}
          </p>
        </div>
      </div>
      <div className='w-full h-20   mt-[60px]'>
        <p className='inter text-2xl float-left text-[#2E2E38]'>
          Your configuration details
        </p>
        <div className='float-right w-7/12 h-auto'>
          <p className='inter text-2xl mb-5 text-[#505062]'>Exterior</p>
          <div className='w-full mt-5 border-t border-solid border-[#C7C7D1]'>
            <PricelistItem
              type={'exterior'}
              data={{
                type: props.data.color.type,
                price: props.data.color.price,
              }}
            />
            <PricelistItem
              type={'wheel'}
              model={props.data.model}
              data={{
                type: props.data.wheel.type,
                name: props.data.wheel.name,
                price: props.data.wheel.price,
              }}
            />
          </div>
          <p className='inter text-2xl text-[#505062] mt-12 mb-5'>Interior</p>
          <div className='w-full mt-4 border-t border-solid border-[#C7C7D1]'>
            <PricelistItem
              type={'interior'}
              data={{
                type: props.data.interior.type,
                price: props.data.interior.price,
              }}
            />
          </div>
          <div className='mt-[50px] flex mb-20'>
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
    </>
  );
}
