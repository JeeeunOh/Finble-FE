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
      date: '2022-01-26',
      data: 1,
    },
  ],
  graph_portfolio: [
    {
      date: '2022-01-26',
      data: 1,
    },
  ],
  kospi_profit: 1,
  kospi_max_fall: 1,
  kospi_max_loss: 1,
  portfolio_profit: 1,
  portfolio_max_fall: 1,
  portfolio_max_loss: 1,
} as any;
