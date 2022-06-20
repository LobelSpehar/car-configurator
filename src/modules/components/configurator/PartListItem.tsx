import React from 'react';

import { SelectedTick } from '../index';

interface PartListItemProps {
  type: string;
  data: { type: string; name?: string };
  dataType: string;
  onSetOptions: Function;
  model?: string;
}

export function PartListItem(props: PartListItemProps) {
  return (
    <div
      onClick={(e) => props.onSetOptions(props.type)}
      className='w-full h-auto pl-10 pb-3 mt-4 flex hover:bg-[#f1f1f4] hover:border-[#c7c7d1] border-y hover:cursor-pointer border-solid border-transparent'
    >
      {props.type === 'wheel' ? (
        <img
          src={require(`assets/images/${props.type}/Car=${props.model}, Style=${props.data.type}.png`)}
          alt='Color'
          className='w-[60px] h-[60px] rounded-full mt-4'
        ></img>
      ) : (
        <img
          src={require(`assets/images/${props.type}/Color=${props.data.type}.png`)}
          alt='Color'
          className='w-[60px] h-[60px] rounded-full mt-4'
        ></img>
      )}
      <SelectedTick />
      <div className='-translate-y-2'>
        <p className='mt-8 ml-5  inter leading-[24px] text-base text-[#2E2E38]'>
          {props.type === 'wheel' ? props.data.name : props.data.type}
        </p>
        <p className='ml-5 inter text-[11px] text-[#73738C] tracking-[2px]'>
          {props.dataType}
        </p>
      </div>
    </div>
  );
}
