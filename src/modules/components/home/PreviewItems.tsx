import React from 'react';
import { Link } from 'react-router-dom';

import { PreviewItemMenu } from 'modules/components/index';

interface PreviewItemProps {
  car: {
    id: string;
    data: {
      model: string;
      color: { type: string };
      wheel: { type: string };
      year: string;
      name: string;
      date: string;
    };
  };
}

export function PreviewItems(props: PreviewItemProps) {
  return (
    <li className='min-h-[180px] w-full bg-[#fcfcfd] mb-7 '>
      <PreviewItemMenu id={props.car.id} />
      <Link to={{ pathname: `/view/${props.car.id}` }}>
        <div>
          <img
            src={require(`assets/images/${props.car.data.model}/View=Side, Color=${props.car.data.color.type}, Wheel Style=${props.car.data.wheel.type}.png`)}
            alt='text'
            className='h-[135px] object-scale-down float-left mt-5 lg:ml-10 mb-[25px] mr-10'
          ></img>
          <section className='float-left mt-6 pl-8 lg:border-l border-1 border-solid border-[#C7C7D1]'>
            <p className='text-[#73738C] leading-4 inter text-[11px] leading-[16px]  tracking-[2px]'>
              {props.car.data.year}
            </p>
            <p className='text-[#2c2cd5] leading-8  optician text-4xl tracking-[-2px]  '>
              {props.car.data.name}
            </p>
            <p className='text-[#505062] mt-2 leading-4  inter text-[11px] tracking-[2px] uppercase'>
              {props.car.data.color.type}
            </p>
            <p className='text-[#9D9DAF] mt-8 leading-4 inter text-xs mb-4'>
              Created {props.car.data.date}
            </p>
          </section>
        </div>
      </Link>
    </li>
  );
}
