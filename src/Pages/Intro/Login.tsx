import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isToggleAtom } from '../../Atoms';

// const Login: React.FC = () => {
const Login = (): JSX.Element => {
  const isToggle = useRecoilValue(isToggleAtom);
  return (
    <>
      <div>Login</div>
      Toggle state: {isToggle}
    </>
  );
};

export default Login;
