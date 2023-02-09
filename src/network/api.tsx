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
  setData: any,
  setTotalGain: any,
  setTotalRate: any
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
export const getPortfolioAnalysis = async (token: string, setData: any) => {
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

export const getTestPortfolio = async (token: any) => {
  const res = await fetch(`${SERVER}/test-portfolio/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

  return res;
};

export const deleteTestPortfolio = async (token: any, id: number) => {
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

export const postTestPortfolio = async (token: any, symbol: string) => {
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
  token: any,
  id: number,
  ratio: any
) => {
  let data = JSON.stringify({
    id: id,
    ratio: ratio === '' || 0 ? null : ratio,
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

export const getTestAnalysis = async (token: any) => {
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

export const postEmail = async (token: any, email: string) => {
  await fetch(`${SERVER}/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ contact: email }),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log('유저 이메일 저장 : ', res);
    })
    .catch((err) => console.log(err));
};
