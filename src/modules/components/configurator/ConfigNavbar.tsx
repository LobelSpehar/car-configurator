import React from 'react';
import { Link } from 'react-router-dom';

interface ConfigNavbarProps {
  stepCount: number;
  onSetStep: Function;
  data: { year: string; name: string };
}

export function ConfigNavbar(props: ConfigNavbarProps) {
  return (
    <div className='absolute top-20 pt-5 pl-10 flex left-0 w-full h-20 bg-[#fcfcfd] border border-[#C7C7D1] border-solid border-b-1'>
      {props.stepCount === 0 ? (
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
      ) : (
        <svg
          onClick={(e) => props.onSetStep(props.stepCount - 1)}
          className='w-[34px] h-[34px] pr-6 pt-2 hover:cursor-pointer'
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
      )}
      <p className='tracking-[-2px]  text-[28px] text-[#9D9DAF] optician '>
        {props.data.year}
      </p>
      <p className=' pl-6 tracking-[-2px] text-[28px] text-[#2E2E38] optician '>
        {props.data.name}
      </p>
      <p
        className={
          props.stepCount === 0
            ? 'ml-auto font-bold mt-2 mr-14 inter  text-[#9D9DAF]'
            : 'ml-auto mt-2 mr-14 inter  text-[#9D9DAF]'
        }
      >
        01 <span className='text-[#2E2E38]'>Exterior</span>
      </p>
      <p
        className={
          props.stepCount === 1
            ? 'font-bold mt-2 mr-14 inter  text-[#9D9DAF]'
            : 'mt-2 mr-14 inter  text-[#9D9DAF]'
        }
      >
        02 <span className='text-[#2E2E38]'>Interior</span>
      </p>
      <p
        className={
          props.stepCount === 2
            ? 'font-bold mt-2 mr-14 inter  text-[#9D9DAF]'
            : 'mt-2 mr-14 inter  text-[#9D9DAF]'
        }
      >
        03 <span className='text-[#2E2E38]'>Summary</span>
      </p>
    </div>
  );
}
