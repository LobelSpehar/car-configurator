import React from 'react';

interface TotalProps {
  total: number;
}

export function Total(props: TotalProps) {
  return (
    <div className='w-[356px] h-16 bg-white border-l border-[#C7C7D1] absolute bottom-16 right-0'>
      <p className='text-[#9D9DAF] pl-10 text-xs w-12 mt-2 inter float-left'>
        TOTAL
        <svg
          className='translate-x-12 -translate-y-4'
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
      <p className='inter text-xl float-right text-[#2E2E38] pr-10'>
        {new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(props.total)}
      </p>
    </div>
  );
}
