export type PricingCell =
  | { type: 'check' }
  | { type: 'dash' }
  | { type: 'text'; value: string };

export const PLAN = {
  name: 'Plus',
  sense: 'O plano do lançamento',
  price: 'R$ 149',
  annual: 'R$ 119,20 por usuário/mês no anual',
  users: 'Até 15 usuários por agência',
  cta: 'Começar os 14 dias',
} as const;
