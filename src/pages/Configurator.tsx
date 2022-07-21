import React, { useState } from 'react';

import { useRecoilValue } from 'recoil';
import { configCarAtom } from 'modules/atoms/Index';
import {
  ConfigNavbar,
  InteriorTab,
  Navbar,
  ExteriorTab,
  Summary,
} from 'modules/components/index';

export function Configurator() {
  const config = useRecoilValue(configCarAtom);
  const data = config.data;
  const [stepCount, setStep] = useState(0);

  return (
    <div className='w-full h-screen'>
      <Navbar homeState={false} />
      <ConfigNavbar stepCount={stepCount} onSetStep={setStep} data={data} />
      <div className='w-full'>
        {stepCount === 0 ? (
          <ExteriorTab
            data={{
              color: { type: data.color.type },
              model: data.model,
              wheel: { type: data.wheel.type, name: data.wheel.name },
              total: data.total,
            }}
            onSetStep={setStep}
          />
        ) : stepCount === 1 ? (
          <InteriorTab
            data={{
              interior: { type: data.interior.type, name: data.wheel.name },
              model: data.model,
              total: data.total,
            }}
            onSetStep={setStep}
          />
        ) : (
          <Summary car={{ id: config.id, data: data }} onSetStep={setStep} />
        )}
      </div>
    </div>
  );
}
