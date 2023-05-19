export const initData = {
  present_val_sum: 1,
  invested_val_sum: 1,
  portfolio_ratio: [
    {
      stock: {
        symbol: 'ADBE',
        market: 'US',
        name: '어도비',
        sector: 'IT',
      },
      ratio: 1,
    },
  ],
  sector_ratio: [
    {
      sector: 'IT',
      ratio: 1,
    },
  ],
  graph_kospi: [
    {
      date: '20220116',
      data: 1,
    },
  ],
  graph_portfolio: [
    {
      date: '20220116',
      data: 1,
    },
  ],
  kospi_profit: 1,
  kospi_max_fall: 1,
  kospi_max_loss: 1,
  portfolio_profit: 1,
  portfolio_max_fall: 1,
  portfolio_max_loss: 1,
} as IInitData;

export interface IInitData {
  present_val_sum: number;
  invested_val_sum: number;
  portfolio_ratio: {
    stock: { symbol: string; market: string; name: string; sector: string };
    ratio: number;
  }[];
  sector_ratio: { sector: string; ratio: number }[];
  graph_kospi: { date: string; data: number }[];
  graph_portfolio: { date: string; data: number }[];

  kospi_profit: number;
  kospi_max_fall: number;
  kospi_max_loss: number;
  portfolio_profit: number;
  portfolio_max_fall: number;
  portfolio_max_loss: number;
}
