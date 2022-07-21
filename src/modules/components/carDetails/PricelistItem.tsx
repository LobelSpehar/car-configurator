import React from 'react';

interface PricelistItemProps {
  data: { type: string; name?: string; price: number };
  model?: string;
  type: string;
}

export function PricelistItem(props: PricelistItemProps) {
  return (
    <div className='w-full h-auto  md:mb-6 flex'>
      {props.type === 'wheel' ? (
        <img
          src={require(`assets/images/${props.type}/Car=${props.model}, Style=${props.data.type}.png`)}
          alt='Color'
          className='w-12 h-12 md:w-[60px] md:h-[60px] rounded-full mt-5'
        ></img>
      ) : (
        <img
          src={require(`assets/images/${props.type}/Color=${props.data.type}.png`)}
          alt='Color'
          className='w-12 h-12 md:w-[60px] md:h-[60px] rounded-full mt-5'
        ></img>
      )}

      <p className='mt-9 md:text-xl -translate-y-1 md:translate-y-0 ml-2 md:ml-5 inter text-[#2E2E38]'>
        {props.type === 'wheel' ? props.data.name : props.data.type}
      </p>

      <p className=' mt-8 md:mt-9 md:text-xl ml-auto inter text-[#73738C]'>
        {new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(props.data.price)}
      </p>
    </div>
  );
}
