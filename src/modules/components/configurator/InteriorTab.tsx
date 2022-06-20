import React, { useState } from 'react';

import {
  Total,
  PartListItem,
  InteriorOptions,
  CarouselInterior,
} from '../index';

interface InteriorTabProps {
  data: {
    model: string;
    interior: { type: string; name: string };
    total: number;
  };
  onSetStep: Function;
}

export function InteriorTab(props: InteriorTabProps) {
  const [optionsState, setOptionsState] = useState('');
  return (
    <>
      <div className='w-3/4 mt-10'>
        <CarouselInterior data={props.data} />
      </div>
      {optionsState === 'interior' ? (
        <InteriorOptions optionType={optionsState} onClose={setOptionsState} />
      ) : (
        <div className='ml-auto w-[356px] bg-white border-l border-[#C7C7D1]'>
          <PartListItem
            type={'interior'}
            data={{
              type: props.data.interior.type,
              name: props.data.interior.name,
            }}
            dataType={'COLOR'}
            onSetOptions={setOptionsState}
          />
          <Total total={props.data.total} />
          <button
            type='button'
            className='w-[356px] h-[68px] bg-[#1E1ED2] absolute bottom-0 '
            onClick={(e) => props.onSetStep(2)}
          >
            <p className='inter text-[#FCFCFD] mx-auto w-22 '>
              Summary
              <svg
                className='inline-block ml-2 mb-1'
                width='9'
                height='16'
                viewBox='0 0 9 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.146447 0.146447C-0.0488156 0.341709 -0.0488156 0.658291 0.146447 0.853553L7.29289 8L0.146447 15.1464C-0.0488156 15.3417 -0.0488156 15.6583 0.146447 15.8536C0.341709 16.0488 0.658292 16.0488 0.853554 15.8536L8.35355 8.35355C8.54882 8.15829 8.54882 7.84171 8.35355 7.64645L0.853554 0.146447C0.658292 -0.0488155 0.341709 -0.0488155 0.146447 0.146447Z'
                  fill='#FCFCFD'
                />
              </svg>
            </p>
          </button>
        </div>
      )}
    </>
  );
}
