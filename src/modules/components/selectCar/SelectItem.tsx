import React from 'react';
import { Link } from 'react-router-dom';

interface SelectItemProps {
  car: {
    id: string;
    data: {
      model: string;
      color: { type: string };
      wheel: { type: string };
      year: string;
      name: string;
    };
  };
}

export function SelectItem(props: SelectItemProps) {
  return (
    <li
      key={props.car.id}
      className='inline-block mr-6 bg-[#fcfcfd] h-auto w-fit pr-20 overflow-hidden pl-8 pb-8 mb-8'
    >
      <img
        src={require(`assets/images/${props.car.data.model}/View=Front, Color=${props.car.data.color.type}, Wheel Style=${props.car.data.wheel.type}.png`)}
        alt='Car exterior'
        className='h-40 w-40 md:h-80  md:w-80  object-cover -translate-x-14  md:-translate-x-28  mr-10'
      ></img>
      <section>
        <p className='optician  md:text-2xl mt-8 text-[#73738C] translate-y-2'>
          {props.car.data.year}
        </p>
        <h1 className='optician text-xl  md:text-5xl text-[#2E2E38] '>
          {props.car.data.name}
        </h1>
        <Link to={{ pathname: `/view/${props.car.id}` }}>
          <p className='w-[180px] h-11 mt-4 inter bg-[#1E1ED2] text-[#F1F1F4] text-sm text-center pt-3 '>
            Configure Now
          </p>
        </Link>
      </section>
    </li>
  );
}
