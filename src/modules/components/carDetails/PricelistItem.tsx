import React from 'react';

interface PricelistItemProps {
  data: { type: string; name?: string; price: number };
  model?: string;
  type: string;
}

export function PricelistItem(props: PricelistItemProps) {
  return (
    <div className='w-full h-auto mb-6 flex'>
      {props.type === 'wheel' ? (
        <img
          src={require(`assets/images/${props.type}/Car=${props.model}, Style=${props.data.type}.png`)}
          alt='Color'
          className='w-[60px] h-[60px] rounded-full mt-5'
        ></img>
      ) : (
        <img
          src={require(`assets/images/${props.type}/Color=${props.data.type}.png`)}
          alt='Color'
          className='w-[60px] h-[60px] rounded-full mt-5'
        ></img>
      )}

      <p className='mt-9 text-xl ml-5 inter text-[#2E2E38]'>
        {props.type === 'wheel' ? props.data.name : props.data.type}
      </p>
      <p className='mt-9 text-xl ml-auto inter text-[#73738C] '>
        {new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(props.data.price)}
      </p>
    </div>
  );
}
