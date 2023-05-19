export interface ETF {
  name: string;
  intro: string;
  detail: Array<string>;
  hashTag: string;
  img: string;
}

export interface Modal {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISearchStock {
  symbol: string;
  market: string;
  name: string;
  sector: string;
}

export interface IUserStock {
  portfolio: {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    average_price: number;
    quantity: number;
    symbol: string;
    user: number;
  };
  stock_detail: {
    symbol: string;
    market: string;
    name: string;
    sector: string;
  };
  present_val: number;
  gain: number;
  profit_rate: number;
}
