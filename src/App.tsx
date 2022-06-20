import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { currentUser } from 'modules/atoms/Index';
import { DeleteMsg } from './modules/components/index';
import {
  Home,
  CarDetails,
  Configurator,
  SelectCar,
  Login,
} from './pages/Index';

function App() {
  const loggedIn = useRecoilValue(currentUser).state;

  return (
    <div className='h-auto w-full bg-[#F1F1F4] '>
      <DeleteMsg />
      <BrowserRouter>
        {loggedIn ? (
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/view/:id' element={<CarDetails />}></Route>
            <Route path='/configurator/:id' element={<Configurator />}></Route>
            <Route path='/selection' element={<SelectCar />}></Route>
          </Routes>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
