import React, { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { configCarAtom } from 'modules/atoms/Index';
import { Total, SelectedTick } from '../index';

interface WheelOptionsProps {
  onClose: Function;
  optionType: string;
}

export function WheelOptions(props: WheelOptionsProps) {
  const wheelOptions = [
    {
      model: 'RS5',
      wheel: [
        { type: 'One', price: 520, name: '22” Magnesium 5-spoke' },
        { type: 'Two', price: 500, name: '22” Alloy 10-spoke ' },
      ],
    },
    {
      model: 'RS6',
      wheel: [
        { type: 'One', price: 480, name: '22” Magnesium 5-spoke' },
        { type: 'Two', price: 510, name: '22” Alloy 10-spoke ' },
      ],
    },
    {
      model: 'e-tron',
      wheel: [
        { type: 'One', price: 475, name: '22” Magnesium 5-spoke' },
        { type: 'Two', price: 515, name: '22” Alloy 5-spoke ' },
      ],
    },
  ];
  const [configCar, setConfigCar] = useRecoilState(configCarAtom);
  const [currentWheel, setCurrentWheel] = useState({
    type: '',
    price: 0,
    name: '',
  });
  useEffect(() => {
    setCurrentWheel({
      type: configCar.wheel.type,
      price: configCar.wheel.price,
      name: configCar.wheel.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className='ml-auto h-full pb-20 -translate-y-20 w-[356px] bg-white border-l border-[#C7C7D1]'>
        <p className='float-left ml-10 mt-7 mb-16 text-2xl text-[#2E2E38] inter'>
          Paint Color
        </p>
        <button
          onClick={(e) => {
            setConfigCar((prevState) => ({
              ...prevState,
              wheel: {
                type: currentWheel.type,
                price: currentWheel.price,
                name: currentWheel.name,
              },
              total:
                configCar.base +
                configCar.color.price +
                currentWheel.price +
                configCar.interior.price,
            }));
            props.onClose('');
          }}
          className='float-right mt-7 mr-8'
        >
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.7 0.3C13.3 -0.1 12.7 -0.1 12.3 0.3L7 5.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.6 7L0.3 12.3C-0.1 12.7 -0.1 13.3 0.3 13.7C0.5 13.9 0.7 14 1 14C1.3 14 1.5 13.9 1.7 13.7L7 8.4L12.3 13.7C12.5 13.9 12.8 14 13 14C13.2 14 13.5 13.9 13.7 13.7C14.1 13.3 14.1 12.7 13.7 12.3L8.4 7L13.7 1.7C14.1 1.3 14.1 0.7 13.7 0.3Z'
              fill='#2E2E38'
            />
          </svg>
        </button>
        {wheelOptions
          .filter((item) => item.model === configCar.model)[0]
          .wheel.map((item) => (
            <div
              key={item.type}
              onClick={(e) => {
                setConfigCar((prevState) => ({
                  ...prevState,
                  wheel: {
                    type: item.type,
                    price: item.price,
                    name: item.name,
                  },
                  total:
                    configCar.base +
                    configCar.color.price +
                    item.price +
                    configCar.interior.price,
                }));
              }}
              className='w-full h-auto pl-10 pb-3 mt-3 flex hover:bg-[#f1f1f4] hover:border-[#c7c7d1] border-y hover:cursor-pointer border-solid border-transparent'
            >
              <img
                src={require(`assets/images/wheel/Car=${configCar.model}, Style=${item.type}.png`)}
                alt='Color'
                className='w-[60px] h-[60px] rounded-full mt-4'
              ></img>

              {item.type === configCar.wheel.type ? <SelectedTick /> : null}
              {item.type === configCar.wheel.type ? (
                <div>
                  <p className='inter text-[#2E2E38] ml-6 mt-6'>{item.name}</p>
                  <p className='inter text-[#73738C] ml-6 text-sm'>
                    {new Intl.NumberFormat('de-DE', {
                      style: 'currency',
                      currency: 'EUR',
                    }).format(item.price)}
                  </p>
                </div>
              ) : (
                <p className='inter text-[#2E2E38] ml-6 mt-8'>{item.name}</p>
              )}
            </div>
          ))}
      </div>
      <Total total={configCar.total} />
      <button
        type='button'
        className='w-[356px] h-[68px] bg-[#1E1ED2] absolute bottom-0 right-0'
        onClick={(e) => props.onClose('')}
      >
        <p className='inter text-[#FCFCFD] mx-auto w-22 '>
          Done
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
    </>
  );
}
