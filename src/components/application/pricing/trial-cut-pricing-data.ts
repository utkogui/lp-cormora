export type PricingCell =
  | { type: 'check' }
  | { type: 'dash' }
  | { type: 'text'; value: string };

export type PricingRow =
  | { type: 'group'; label: string }
  | { type: 'row'; label: string; cells: [PricingCell, PricingCell, PricingCell] };

export const TRIAL_CUT_COPY = {
  kicker: 'Opção 2',
  title: 'Trial de 14 dias e corta',
  days: '14 dias de uso sem custo',
  description:
    'Não existe plano grátis permanente. Por 14 dias a agência usa a coluna Completo, sem cartão. No dia 15 escolhe um plano ou para. O produto é complexo demais para convencer pela metade. O risco é o abandono seco de quem ainda não decidiu pagar.',
  follow: 'Seguir se o valor só aparece com o ciclo inteiro e o time aguenta o corte.',
  note: 'Os 14 dias sem custo mostram a coluna Completo. O Básico pago ainda fecha a venda, para ninguém ser empurrado ao plano caro só para emitir uma proposta.',
  moduleHeader: 'Depois do dia 15',
  plans: ['Básico', 'Médio', 'Completo'] as const,
  featuredPlanIndex: 2,
};

const check = { type: 'check' } as const;
const dash = { type: 'dash' } as const;
const text = (value: string): PricingCell => ({ type: 'text', value });

export const TRIAL_CUT_ROWS: PricingRow[] = [
  { type: 'group', label: 'Limites' },
  { type: 'row', label: 'Uso sem custo', cells: [text('—'), text('—'), text('14 dias')] },
  { type: 'row', label: 'Usuários', cells: [text('1'), text('15'), text('Ilimitado')] },
  { type: 'row', label: 'Propostas por mês', cells: [text('10'), text('100'), text('Ilimitado')] },
  {
    type: 'row',
    label: 'Marca d’água do Cormora',
    cells: [text('Presente'), text('Presente'), text('Removida')],
  },
  { type: 'group', label: 'Venda' },
  { type: 'row', label: 'Clientes no atendimento', cells: [check, check, check] },
  { type: 'row', label: 'Atendimentos', cells: [check, check, check] },
  { type: 'row', label: 'Orçamentos', cells: [check, check, check] },
  { type: 'row', label: 'Voo, hotel, transfer e seguro', cells: [check, check, check] },
  { type: 'row', label: 'Propostas', cells: [check, check, check] },
  { type: 'row', label: 'Link do orçamento', cells: [check, check, check] },
  { type: 'group', label: 'Operação' },
  { type: 'row', label: 'CRM', cells: [dash, check, check] },
  { type: 'row', label: 'Roteiros e link do roteiro', cells: [dash, check, check] },
  { type: 'row', label: 'Passageiros, vouchers e tarefas', cells: [dash, check, check] },
  {
    type: 'row',
    label: 'Central, favoritos, cruzeiro, veículo e kit',
    cells: [dash, check, check],
  },
  { type: 'row', label: 'Financeiro e vários orçamentos', cells: [dash, check, check] },
  { type: 'row', label: 'Papéis e permissões', cells: [dash, check, check] },
  { type: 'group', label: 'Agência' },
  { type: 'row', label: 'Contrato e D4Sign', cells: [dash, dash, check] },
  { type: 'row', label: 'Amadeus e OCR', cells: [dash, dash, check] },
  { type: 'row', label: 'Links customizados e subdomínio', cells: [dash, dash, check] },
  { type: 'row', label: 'Pós-venda e reembolso', cells: [dash, dash, check] },
];
