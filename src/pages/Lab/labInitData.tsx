export const labInitData = {
  // 기존 포트폴리오
  graph_original_portfolio: [
    {
      date: '2013-01-24',
      data: 245429.31483937812,
    },
  ],
  // 새로 만든 포트폴리오
  graph_test_portfolio: [
    {
      date: '2013-01-24',
      data: 245429.31483937812,
    },
  ],

  annual_profit_original: 1,
  annual_profit_test: 1,
  final_val_test: 1,
  invest_val_sum: 1,
  original_portfolio_max_fall: 1,
  original_portfolio_max_loss: 1,
  original_portfolio_profit: 1,
  present_val_sum: 1,
  test_portfolio_max_fall: 1,
  test_portfolio_max_loss: 1,
  test_portfolio_profit: 1,
} as ILabData;

export interface ILabData {
  graph_original_portfolio: { date: string; data: number }[];
  graph_test_portfolio: { date: string; data: number }[];
  annual_profit_original: number;
  annual_profit_test: number;
  final_val_test: number;
  invest_val_sum: number;
  original_portfolio_max_fall: number;
  original_portfolio_max_loss: number;
  original_portfolio_profit: number;
  present_val_sum: number;
  test_portfolio_max_fall: number;
  test_portfolio_max_loss: number;
  test_portfolio_profit: number;
}
