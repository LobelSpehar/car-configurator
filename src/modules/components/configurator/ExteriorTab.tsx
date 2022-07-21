import React, { useState } from 'react';

import {
  Total,
  WheelOptions,
  PartListItem,
  ExteriorOptions,
  Carousel,
} from 'modules/components/index';

interface ExteriorTabProps {
  data: {
    color: { type: string };
    model: string;
    wheel: { type: string; name: string };
    total: number;
  };
  onSetStep: Function;
}

export function ExteriorTab(props: ExteriorTabProps) {
  const [optionsState, setOptionsState] = useState('');

  return (
    <>
      <div className='md:w-3/4 md:mt-10 mb-4 md:float-left'>
        <Carousel data={props.data} />
      </div>

      {optionsState === 'exterior' ? (
        <ExteriorOptions optionType={optionsState} onClose={setOptionsState} />
      ) : optionsState === 'wheel' ? (
        <WheelOptions optionType={optionsState} onClose={setOptionsState} />
      ) : (
        <section className='w-full md:w-[356px] md:h-screen z-0 md:fixed right-0 top-0  bg-white border-l border-[#C7C7D1] '>
          <div className='md:h-40'></div>
          <PartListItem
            type={'exterior'}
            data={{ type: props.data.color.type }}
            dataType={'PAINT COLOR'}
            onSetOptions={setOptionsState}
          />
          <PartListItem
            type={'wheel'}
            model={props.data.model}
            data={{
              type: props.data.wheel.type,
              name: props.data.wheel.name,
            }}
            dataType={'WHEELS'}
            onSetOptions={setOptionsState}
          />

          <Total total={props.data.total} />
          <button
            type='button'
            className='w-full md:w-[356px] h-[68px] bg-[#1E1ED2] fixed bottom-0 right-0'
            onClick={(e) => props.onSetStep(1)}
          >
            <p className='inter text-[#FCFCFD] mx-auto w-auto '>
              Interior
              <svg
                className='inline-block ml-3 mb-1'
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
        </section>
      )}
    </>
  );
}
