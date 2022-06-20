import React from 'react';

interface ShowPasswordProps {
  onSetShowPassword: Function;
  showPassword: boolean;
}

export function ShowPassword(props: ShowPasswordProps) {
  return (
    <button
      type='button'
      onClick={(e) => props.onSetShowPassword(!props.showPassword)}
      className='translate-x-[490px] -translate-y-8'
    >
      {props.showPassword ? (
        <svg
          width='28'
          height='21'
          viewBox='0 0 16 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.99988 12C12.7069 12 15.7439 6.716 15.8709 6.492C16.0419 6.188 16.0429 5.816 15.8719 5.512C15.7459 5.287 12.7309 0 7.99988 0C3.24488 0 0.250883 5.289 0.125883 5.514C-0.0431167 5.817 -0.0421166 6.186 0.127883 6.489C0.253883 6.713 3.26888 12 7.99988 12ZM7.99988 2C10.8389 2 13.0359 4.835 13.8179 6C13.0339 7.166 10.8369 10 7.99988 10C5.15888 10 2.96188 7.162 2.18088 5.999C2.95788 4.835 5.14588 2 7.99988 2Z'
            fill='#2E2E38'
          />
          <path
            d='M7.99988 8C9.10445 8 9.99988 7.10457 9.99988 6C9.99988 4.89543 9.10445 4 7.99988 4C6.89531 4 5.99988 4.89543 5.99988 6C5.99988 7.10457 6.89531 8 7.99988 8Z'
            fill='#2E2E38'
          />
        </svg>
      ) : (
        <>
          <p className='text-4xl absolute -translate-y-[12.5px] translate-x-2'>
            /
          </p>
          <svg
            width='28'
            height='21'
            viewBox='0 0 16 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.99988 12C12.7069 12 15.7439 6.716 15.8709 6.492C16.0419 6.188 16.0429 5.816 15.8719 5.512C15.7459 5.287 12.7309 0 7.99988 0C3.24488 0 0.250883 5.289 0.125883 5.514C-0.0431167 5.817 -0.0421166 6.186 0.127883 6.489C0.253883 6.713 3.26888 12 7.99988 12ZM7.99988 2C10.8389 2 13.0359 4.835 13.8179 6C13.0339 7.166 10.8369 10 7.99988 10C5.15888 10 2.96188 7.162 2.18088 5.999C2.95788 4.835 5.14588 2 7.99988 2Z'
              fill='#2E2E38'
            />
            <path
              d='M7.99988 8C9.10445 8 9.99988 7.10457 9.99988 6C9.99988 4.89543 9.10445 4 7.99988 4C6.89531 4 5.99988 4.89543 5.99988 6C5.99988 7.10457 6.89531 8 7.99988 8Z'
              fill='#2E2E38'
            />
          </svg>
        </>
      )}
    </button>
  );
}
