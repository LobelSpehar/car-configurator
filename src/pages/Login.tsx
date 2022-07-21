import React, { useState } from 'react';

import {
  Navbar,
  RegisterForm,
  LoginForm,
  ForgotPassword,
  GoogleLoginBtn,
} from 'modules/components/index';

export function Login() {
  const [loginType, setLoginType] = useState('login');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className='w-full h-full'>
      <Navbar homeState={false} hideMenuBtn={true} />

      {loginType === 'signup' ? (
        <RegisterForm
          onSetLoginType={setLoginType}
          rememberMe={rememberMe}
          onSetRememberMe={setRememberMe}
        />
      ) : loginType === 'login' ? (
        <LoginForm
          onSetLoginType={setLoginType}
          rememberMe={rememberMe}
          onSetRememberMe={setRememberMe}
        />
      ) : (
        <ForgotPassword onSetLoginType={setLoginType} />
      )}
      {loginType === 'reset' ? null : (
        <GoogleLoginBtn rememberMe={rememberMe} />
      )}
    </div>
  );
}
