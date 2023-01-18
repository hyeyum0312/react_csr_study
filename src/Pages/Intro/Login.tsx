import React, { useState } from 'react';
import { RecoilRootProps, useRecoilValue, useRecoilState } from 'recoil';
import { IUser, User, LoginState } from '../../Atoms';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState<IUser>(User);
  const [inputData, setInputData] = useState<any>('');
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(LoginState);

  const onChange = (event: any) => {
    setInputData({ id: event.target.value });
  };

  const onClick = () => {
    if (api(user)) {
      //페이지 이동
      console.log('페이지 이동');
      navigate('/');
    } else {
      console.log('로그인실패');
    }
  };

  const api = (reqUser: IUser) => {
    //api
    if (reqUser.id === inputData.id && reqUser.pwd === 'pw') {
      console.log('맞다');
      return true;
    } else {
      console.log('아니다');
      return false;
    }
  };

  return (
    <>
      <div className="enter_wrap">
        <input className="enter_input" placeholder="아이디를 입력하세요" onChange={onChange} />
        <input className="enter_input" placeholder="비밀번호를 입력하세요" />
        <button className="enter_btn" onClick={onClick}>
          로그인
        </button>
      </div>
    </>
  );
};

export default Login;
