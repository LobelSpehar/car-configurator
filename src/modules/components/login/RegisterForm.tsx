import React, { useState } from 'react';

import { useLogin } from 'modules/hooks/Index';
import { ShowPassword } from 'modules/components/index';

interface RegisterFormProps {
  rememberMe: boolean;
  onSetLoginType: Function;
  onSetRememberMe: Function;
}

export function RegisterForm(props: RegisterFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { signUp, error } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    signUp(email, password, props.rememberMe);
  }

  return (
    <main className=' w-4/5 sm:w-[600px] mx-auto mt-10'>
      <header>
        <div className='mt-24 mx-auto w-20 h-20 '>
          <svg
            className='translate-y-4 translate-x-4'
            width='45'
            height='50'
            viewBox='0 0 18 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M10.3132 9.25442C12.1637 9.25442 13.5379 8.28371 13.5379 6.51308C13.5379 4.62859 12.3881 3.82866 10.3132 3.82866H4.53665V9.25442H10.3132ZM0.25 0H10.569C14.7186 0 17.831 2.4839 17.831 6.53834C17.831 10.651 14.8308 13.078 10.569 13.078H4.53971V19.9876H0.25V0Z'
              fill='#1E1ED2'
            />
          </svg>
        </div>
        <h1 className='optician font-bold text-4xl text-black text-center my-8'>
          CREATE NEW ACCOUNT
        </h1>
      </header>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='flex flex-col w-4/5 mx-auto pb-8'
      >
        <input
          className='drop-shadow w-full px-3 py-2 inter border border-gray-300 placeholder-gray-500 text-[#2E2E38] rounded-t-md focus:outline-none  focus:border-[#2E2E38]'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        ></input>
        <input
          className='drop-shadow w-full px-3 py-2 inter border border-gray-300 placeholder-gray-500 text-[#2E2E38]  focus:outline-none  focus:border-[#2E2E38]'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
        ></input>
        <input
          className='drop-shadow w-full px-3 py-2 inter border border-gray-300 placeholder-gray-500 text-[#2E2E38] rounded-b-md focus:outline-none  focus:border-[#2E2E38]'
          placeholder='password'
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type={showPassword ? 'text' : 'password'}
        ></input>
        <ShowPassword
          showPassword={showPassword}
          onSetShowPassword={setShowPassword}
        />

        <div className='float-left  mb-4 '>
          <input
            checked={props.rememberMe}
            onChange={(e) => props.onSetRememberMe(!props.rememberMe)}
            type='checkbox'
          ></input>
          <p className='inline-block ml-2 inter text-[#2E2E38]'>Remember me</p>
        </div>

        <button
          className='drop-shadow w-full text-white text-xl mt-2 optician tracking-[1px] bg-[#2c2cd1] hover:bg-[#1E1ED2] mx-auto h-10 hover:border border-solid border-1 border-[#2E2E38]'
          type='submit'
        >
          Submit
        </button>

        <p className='text-[#FF0000] text-center inter mt-2 w-4/5 mx-auto'>
          {password !== passwordConfirm && passwordConfirm
            ? 'Passwords do not match!'
            : error}
        </p>
        <button
          type='button'
          onClick={(e) => props.onSetLoginType('login')}
          className='text-[#2E2E38] hover:text-black inter mt-2 text-lg hover:underline'
        >
          Already have an account?
        </button>
      </form>
    </main>
  );
}
