import React, { useState } from 'react';

interface CarouselInteriorProps {
  data: { model: string; interior: { type: string } };
}

export function CarouselInterior(props: CarouselInteriorProps) {
  const [view, setView] = useState(0);
  const viewList = ['Seats', 'Dash'];
  return (
    <>
      <img
        src={require(`assets/images/${props.data.model}/Car=${props.data.model}, Color=${props.data.interior.type}, View=${viewList[view]}.png`)}
        alt='Car exterior'
        className='w-4/5 mx-auto mt-32 mb-8'
      ></img>
      <div className='mx-auto w-auto text-center'>
        <button
          className='pr-2 mx-2 -translate-y-0.5'
          type='button'
          disabled={view < 1}
          onClick={(e) => setView(view - 1)}
        >
          <svg
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
        </button>
        <p className='inline-block inter text-xl mr-1 text-[#2E2E38] align-text-bottom'>
          {view + 1}
        </p>
        <p className='inline-block mr-1 inter text-xl text-[#C7C7D1] align-text-bottom'>
          /
        </p>
        <p className='inline-block inter text-xl text-[#C7C7D1] align-text-bottom'>
          {viewList.length}
        </p>
        <button
          className='pl-2 mx-2 -translate-y-0.5'
          type='button'
          disabled={view >= viewList.length - 1}
          onClick={(e) => setView(view + 1)}
        >
          <svg
            width='9'
            height='16'
            viewBox='0 0 9 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.646447 0.146447C0.451184 0.341709 0.451184 0.658291 0.646447 0.853553L7.79289 8L0.646447 15.1464C0.451184 15.3417 0.451184 15.6583 0.646447 15.8536C0.841709 16.0488 1.15829 16.0488 1.35355 15.8536L8.85355 8.35355C9.04882 8.15829 9.04882 7.84171 8.85355 7.64645L1.35355 0.146447C1.15829 -0.0488155 0.841709 -0.0488155 0.646447 0.146447Z'
              fill='#2E2E38'
            />
          </svg>
        </button>
      </div>
    </>
  );
}
