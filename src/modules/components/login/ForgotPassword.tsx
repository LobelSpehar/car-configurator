import React, { useState } from 'react';

import { useLogin } from '../../hooks/Index';

interface ForgotPasswordProps {
  onSetLoginType: Function;
}

export function ForgotPassword(props: ForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const { passwordResetLink } = useLogin();
  return (
    <div className=' w-[600px] mx-auto mt-10'>
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
        PASSWORD RESET
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          passwordResetLink(email);
          props.onSetLoginType('login');
        }}
        className='flex flex-col bg-[#F1F1F4] w-full mx-auto pb-8 '
      >
        <p className='text-center inter p-1 mt-1'>
          You will recieve an email with instructions on how to reset password
        </p>
        <input
          className='drop-shadow w-full px-3 my-4 py-2 inter border border-gray-300 placeholder-gray-500 text-[#2E2E38] rounded-md focus:outline-none  focus:border-[#2E2E38]'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        ></input>
        <button
          type='submit'
          className=' drop-shadow w-full text-white text-xl mt-2 optician tracking-[1px] bg-[#2c2cd1] hover:bg-[#1E1ED2] mx-auto h-10 hover:border border-solid border-1 border-[#2E2E38]'
        >
          Reset password
        </button>
      </form>

      <button
        type='button'
        onClick={(e) => props.onSetLoginType('login')}
        className=' float-right text-[#2E2E38] hover:text-black inter mt-2 text-lg hover:underline'
      >
        Already have an account?
      </button>
      <button
        type='button'
        onClick={(e) => props.onSetLoginType('signup')}
        className='float-left text-[#2E2E38] hover:text-black inter mt-2 text-lg hover:underline'
      >
        Don't have an account?
      </button>
    </div>
  );
}
