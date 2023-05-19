import { ISearchStock } from '../interface/interface';
import { IInitData } from '../pages/Mystock/components/initData';
import { SERVER } from './config';

// Login api (finble access token 발급)
export const Login = async (googleToken: string) => {
  const res = await fetch(`${SERVER}/login/`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: googleToken }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
  return res;
};

// refresh token 연결 (access token 재발급)
export const getRefresh = async (refreshToken: string) => {
  const res = await fetch(`${SERVER}/login/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh: refreshToken }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));

  return res;
};

// 내 포트폴리오 조회
export const getPortfolio = async (
  token: string,
  setData: React.Dispatch<React.SetStateAction<ISearchStock[]>>,
  setTotalGain: React.Dispatch<React.SetStateAction<number>>,
  setTotalRate: React.Dispatch<React.SetStateAction<number>>
) => {
  await fetch(`${SERVER}/portfolio/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setData(res.data);
      setTotalGain(res.total_gain);
      setTotalRate(res.total_profit_rate);
    })
    .catch((err) => console.log(err));
};

// 내 포트폴리오 진단결과 조회
export const getPortfolioAnalysis = async (
  token: string,
  setData: React.Dispatch<React.SetStateAction<IInitData>>
) => {
  await fetch(`${SERVER}/portfolio/analysis/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
};

export const getTestPortfolio = async (token: string) => {
  const res = await fetch(`${SERVER}/test-portfolio/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

  return res;
};

export const deleteTestPortfolio = async (token: string, id: number) => {
  await fetch(`${SERVER}/test-portfolio/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id: id,
    }),
  }).catch((err) => console.log(err));
};

export const postTestPortfolio = async (token: string, symbol: string) => {
  const res = await fetch(`${SERVER}/test-portfolio/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ symbol: symbol }),
  }).then((res) => {
    return res.json();
  });
  return res;
};

export const patchTestPortfolio = async (
  token: string,
  id: number,
  ratio: number
) => {
  let data = JSON.stringify({
    id: id,
    ratio: ratio === 0 ? null : ratio,
  });

  const res = await fetch(`${SERVER}/test-portfolio/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data,
  }).then((response) => {
    return response.json();
  });

  return res;
};

export const getTestAnalysis = async (token: string) => {
  const res = await fetch(`${SERVER}/test-portfolio/analysis/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));

  return res;
};

export const postEmail = async (token: string, email: string) => {
  await fetch(`${SERVER}/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ contact: email }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
