import React from 'react';

import { SelectedTick } from '../index';

interface OptionsItemProps {
  onSetOptions: Function;
  type: string;
  model: string;
  data: string;
  dataType: string;
}

export function OptionsItem(props: OptionsItemProps) {
  return (
    <div
      onClick={(e) => props.onSetOptions(props.type)}
      className='w-full h-auto pl-10 pb-3 mt-3 flex hover:bg-[#f1f1f4] hover:border-[#c7c7d1] border-y hover:cursor-pointer border-solid border-transparent'
    >
      {props.type === 'wheel' ? (
        <img
          src={require(`assets/images/${props.type}/Car=${props.model}, Style=${props.data}.png`)}
          alt='Color'
          className='w-16 h-16 rounded-full mt-4'
        ></img>
      ) : (
        <img
          src={require(`assets/images/${props.type}Color/Color=${props.data}.png`)}
          alt='Color'
          className='w-16 h-16 rounded-full mt-4'
        ></img>
      )}
      <SelectedTick />
      <div className='-translate-y-2'>
        <p className='mt-8 ml-8  inter text-lg text-[#2E2E38]'>{props.data}</p>
        <p className='ml-8 inter text-xs text-[#73738C] tracking-widest'>
          {props.dataType}
        </p>
      </div>
    </div>
  );
}
