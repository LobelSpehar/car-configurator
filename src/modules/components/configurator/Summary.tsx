import React from 'react';
import { Link } from 'react-router-dom';

import { useDatabase } from 'modules/hooks/Index';
import { PricelistItem, Carousel } from 'modules/components/index';
import { DbInterface } from 'modules/atoms/Index';

interface SummaryProps {
  car: DbInterface;
  onSetStep: Function;
}

export function Summary(props: SummaryProps) {
  const { addCar } = useDatabase();

  return (
    <>
      <div className='w-4/5 mx-auto'>
        <header>
          <h1 className='text-[40px] font-bold aeonik md:w-[260px] text-center text-[#2E2E38] relative -translate-x-1/2 left-1/2 mt-12'>
            Almost done!
          </h1>
          <h1 className=' text-[#2E2E38] mt-4 mx-auto md:w-[424px] text-center'>
            Review your configuration and save your car.
          </h1>
        </header>
        <main>
          <section className='md:-translate-y-16'>
            <Carousel data={props.car.data} />
          </section>
          <div>
            <section className='pb-[36px] border-b-2 mt-6 md:mt-[98px] h-20 md:h-auto w-full border-solid border-[#C7C7D1]'>
              <div className='float-left'>
                <h1 className='text-[#2E2E38]  leading-[44px] tracking-[-2px] optician text-[24px] md:text-[48px]'>
                  {props.car.data.name}
                </h1>

                <p className='text-[#73738C] leading-[32px]  md:text-[28px] optician tracking-[-2px] '>
                  {props.car.data.year}
                </p>
              </div>
              <div className='md:w-40 h-auto float-right md:float-none md:ml-auto'>
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
                <p className='inter text-l md:text-2xl ml-auto leading-[32px] text-[#2E2E38] -translate-x-2 md:translate-x-1'>
                  {new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  }).format(props.car.data.total)}
                </p>
              </div>
            </section>
            <section className='w-full md:h-20 -translate-y-4 mt-9'>
              <p className='inter md:text-2xl text-[#2E2E38] mb-4 lg:mb-0'>
                Your configuration details
              </p>
              <div className='md:float-right  w-full lg:w-7/12 h-auto'>
                <p className='inter md:text-2xl text-[#505062]'>Exterior</p>
                <button
                  type='button'
                  className='float-right inter -translate-y-4 text-sm text-[#1E1ED2]'
                  onClick={(e) => props.onSetStep(0)}
                >
                  Edit
                </button>
                <div className='w-full mt-4 border-t border-solid border-[#C7C7D1]'>
                  <PricelistItem
                    type={'exterior'}
                    data={props.car.data.color}
                  />
                  <PricelistItem
                    type={'wheel'}
                    model={props.car.data.model}
                    data={props.car.data.wheel}
                  />
                </div>
                <p className='inter md:text-2xl text-[#505062] mt-12'>
                  Interior
                </p>
                <button
                  type='button'
                  className='float-right inter  -translate-y-4 text-sm text-[#1E1ED2]'
                  onClick={(e) => props.onSetStep(1)}
                >
                  Edit
                </button>
                <div className='w-full mt-4 border-t border-solid border-[#C7C7D1]'>
                  <PricelistItem
                    type={'interior'}
                    data={props.car.data.interior}
                  />
                </div>
                <div className='mt-12 flex mb-36'>
                  <b className='inter md:text-2xl text-[#505062]'>Total</b>
                  <b className='inter md:text-2xl text-[#505062] ml-auto'>
                    {new Intl.NumberFormat('de-DE', {
                      style: 'currency',
                      currency: 'EUR',
                    }).format(props.car.data.total)}
                  </b>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <footer className='flex w-screen fixed bottom-0 h-20 bg-[#FCFCFD] border-t border-[#C7C7D1]'>
        <p className='tracking-[-2px] hidden lg:block ml-[40px] mt-[23px] leading-[32px] md:text-[28px] text-[#9D9DAF] optician '>
          {props.car.data.year}
        </p>
        <p className=' pl-6 tracking-[-2px] hidden lg:block mt-[23px] leading-[32px] md:text-[28px] text-[#2E2E38] optician '>
          {props.car.data.name}
        </p>
        <div className='ml-auto '>
          <p className='ml-6 text-[#9D9DAF] md:-translate-x-10 md:-translate-x-28 text-sm tracking-[2px] inline-block pl-7pl-10  w-12 mt-2 inter'>
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
          <p className='ml-6 inter md:text-2xl md:inline-block text-[#2E2E38] pr-10 leading-[32px] md:mt-[23px]'>
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(props.car.data.total)}
          </p>
        </div>
        <Link to='/' className='w-fill md:w-[356px]h-20 bg-[#1E1ED2]'>
          <button
            className='w-[150px] sm:w-[356px] h-20'
            onClick={(e) => {
              addCar(props.car);
            }}
          >
            <p className='inter text-[#FCFCFD] font-bold text-center'>
              Save your configuration
            </p>
          </button>
        </Link>
      </footer>
    </>
  );
}
