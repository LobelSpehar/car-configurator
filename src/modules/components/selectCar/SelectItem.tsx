import React from 'react';
import { Link } from 'react-router-dom';

interface SelectItemProps {
  data: {
    id: string;
    model: string;
    color: { type: string };
    wheel: { type: string };
    year: string;
    name: string;
  };
}

export function SelectItem(props: SelectItemProps) {
  return (
    <div
      key={props.data.id}
      className='inline-block mr-6 bg-[#fcfcfd] h-auto w-fit pr-20 overflow-hidden pl-8 pb-8 mb-8'
    >
      <img
        src={require(`assets/images/${props.data.model}/View=Front, Color=${props.data.color.type}, Wheel Style=${props.data.wheel.type}.png`)}
        alt='Car exterior'
        className='h-80 w-80 object-cover -translate-x-28 mr-10'
      ></img>
      <p className='optician text-2xl mt-8 text-[#73738C] translate-y-2'>
        {props.data.year}
      </p>
      <p className='optician text-5xl text-[#2E2E38] '>{props.data.name}</p>
      <Link to={{ pathname: `/view/${props.data.id}` }}>
        <p className='w-[180px] h-11 mt-4 inter bg-[#1E1ED2] text-[#F1F1F4] text-sm text-center pt-3 '>
          Configure Now
        </p>
      </Link>
    </div>
  );
}
