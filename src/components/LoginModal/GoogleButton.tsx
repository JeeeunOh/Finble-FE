import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TypoGraphy from '../Typography';
import google from '../../assets/icons/google.svg';
import { Img } from '../../assets/styles/styles';
import { useGoogleLogin } from '@react-oauth/google';

import {
  setName,
  setFirstName,
  setExpiration,
} from '../../store/slice/userSlice';
import { setToken, tokenState } from '../../store/slice/tokenSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getRefresh, Login } from '../../network/api';

const client_id: string = process.env.REACT_APP_CLIENT_ID as string;
const client_secret: string = process.env.REACT_APP_CLIENT_SECRET as string;
const redirect_uri: string = process.env.REACT_APP_REDIRECT_URL as string;
const expireTime = 1740000; // 29분

const GoogleButton = ({ setModalOpen }: any) => {
  const [code, setCode] = useState(''); // 1회용 auth code
  const [googleToken, setGoogleToken] = useState('' as string); // 구글에서 받은 access token
  const dispatch = useDispatch();

  const googleSocialLogin = useGoogleLogin({
    onSuccess: (response) => setCode(response.code), // 1회용 auth code 발급
    onError: (err) => console.log(err),
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    flow: 'auth-code',
  });

  // 1회용 auth code 발급받고 google access token 발급 받음
  useEffect(() => {
    const data = JSON.stringify({
      code: code,
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code',
    });

    fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        setGoogleToken(res.access_token);
      })
      .catch((err) => console.log(err));
  }, [code]);

  // google access token을 발급 받으면 finble server에 login 성공 요청을 보냄.
  useEffect(() => {
    async function extendTime(refreshToken: string) {
      const res = (await getRefresh(refreshToken)) as any;
      dispatch(setToken({ token: res.access as string }));
      setTimeout(extendTime, expireTime, refreshToken);
    }

    async function login() {
      const res = (await Login(googleToken)) as any;
      const refreshToken = await res.token.refresh;

      dispatch(setName({ name: res.user.name as string }));
      dispatch(setFirstName({ firstName: res.user.first_name as string }));
      dispatch(setToken({ token: res.token.access as string }));
      setModalOpen(false);
      dispatch(
        setExpiration({
          expiration: Date.parse(res.token.expiration_time) as number,
        })
      );
      setTimeout(extendTime, expireTime, refreshToken);
    }

    if (googleToken != undefined || googleToken != '') {
      login();
    }
  }, [googleToken]);

  return (
    <GoogleCustomButton onClick={googleSocialLogin}>
      <Img src={google} width="29px" height="29px" />
      <TypoGraphy text="Google 계정으로 로그인" color="#515151" size="input" />
    </GoogleCustomButton>
  );
};

export { GoogleButton };

const GoogleCustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 56px;
  gap: 20px;
  cursor: pointer;

  width: 377px;
  height: 60px;

  background: #ffffff;
  box-shadow: 0px 0px 18.0573px rgba(0, 0, 0, 0.15);
  border-radius: 60px;
  border: none;
`;
