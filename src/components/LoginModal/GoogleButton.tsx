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
import { setToken } from '../../store/slice/tokenSlice';
import { useDispatch } from 'react-redux';
import { getRefresh, Login } from '../../network/api';
import { useCookies } from 'react-cookie';

const client_id: string = process.env.REACT_APP_CLIENT_ID as string;
const client_secret: string = process.env.REACT_APP_CLIENT_SECRET as string;
const redirect_uri: string = process.env.REACT_APP_REDIRECT_URL as string;

const GoogleButton = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [code, setCode] = useState(''); // 1회용 auth code
  const [googleToken, setGoogleToken] = useState('' as string); // 구글에서 받은 access token
  const dispatch = useDispatch();

  const [appCookies, setAppCookies] = useCookies(['LOGIN_EXPIRES']);
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

  // login cookie
  const getExpiredDate = (time: number) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + time);
    return date;
  };
  const LoginUntilExpires = (refreshToken: string) => {
    const expires = getExpiredDate(5);
    setAppCookies('LOGIN_EXPIRES', refreshToken, {
      path: '/',
      expires,
    });
  };
  useEffect(() => {
    if (appCookies['LOGIN_EXPIRES']) return;
  }, []);

  // google access token을 발급 받으면 finble server에 login 성공 요청을 보냄.
  useEffect(() => {
    async function login() {
      const res = (await Login(googleToken)) as any;
      const refreshToken = await res?.token?.refresh;

      if (refreshToken !== undefined) {
        LoginUntilExpires(refreshToken);
      }

      dispatch(setName({ name: res.user.name as string }));
      dispatch(setFirstName({ firstName: res.user.first_name as string }));
      dispatch(setToken({ token: res.token.access as string }));
      setModalOpen(false);
      dispatch(
        setExpiration({
          expiration: Date.parse(res.token.expiration_time) as number,
        })
      );
    }

    if (googleToken !== undefined || googleToken !== '') {
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
