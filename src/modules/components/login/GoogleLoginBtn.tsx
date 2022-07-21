import React from 'react';

import { useLogin } from 'modules/hooks/Index';

interface GoogleLoginBtndProps {
  rememberMe: boolean;
}

export function GoogleLoginBtn(props: GoogleLoginBtndProps) {
  const { signInWithGoogle } = useLogin();
  return (
    <button
      type='button'
      onClick={(e) => signInWithGoogle(props.rememberMe)}
      className='drop-shadow bg-slate-100 text=[#2E2E38] inter p-2 border border-slate-400 hover:border-slate-500 hover:bg-slate-200 mt-4 w-[200px] relative left-1/2 -translate-x-1/2'
    >
      Sign in with Google
    </button>
  );
}
