import React from 'react';
import { Link } from 'react-router-dom';

import { PreviewItemMenu } from '../index';

interface PreviewItemProps {
  data: {
    id: string;
    model: string;
    color: { type: string };
    wheel: { type: string };
    year: string;
    name: string;
    date: string;
  };
}

export function PreviewItems(props: PreviewItemProps) {
  return (
    <div className='h-[180px] w-full bg-[#fcfcfd] mb-7 '>
      <Link to={{ pathname: `/view/${props.data.id}` }}>
        <img
          src={require(`assets/images/${props.data.model}/View=Side, Color=${props.data.color.type}, Wheel Style=${props.data.wheel.type}.png`)}
          alt='text'
          className='h-[135px] float-left mt-5 ml-10 mb-[25px] mr-10'
        ></img>
        <div className=' float-left mt-6 pl-8 border-l border-1 border-solid border-[#C7C7D1]'>
          <p className='text-[#73738C] leading-4 inter text-[11px] leading-[16px]  tracking-[2px]'>
            {props.data.year}
          </p>
          <p className='text-[#2c2cd5] leading-8  optician text-4xl tracking-[-2px]  '>
            {props.data.name}
          </p>
          <p className='text-[#505062] mt-2 leading-4  inter text-[11px] tracking-[2px] uppercase'>
            {props.data.color.type}
          </p>
          <p className='text-[#9D9DAF] mt-8 leading-4 inter text-xs'>
            Created {props.data.date}
          </p>
        </div>
      </Link>
      <PreviewItemMenu id={props.data.id} />
    </div>
  );
}
