import { Check, Minus } from '@untitledui/icons';
import { cx } from '@/utils/cx';
import type { PricingCell } from './trial-cut-pricing-data';

export function PricingMark({ cell, featured }: { cell: PricingCell; featured: boolean }) {
  if (cell.type === 'check') {
    return (
      <span
        className={cx(
          'inline-flex size-6 items-center justify-center rounded-full',
          featured ? 'bg-success-100 text-success-700' : 'bg-success-50 text-success-600',
        )}
        aria-label="Incluído"
      >
        <Check className="size-3.5" strokeWidth={2.5} />
      </span>
    );
  }

  if (cell.type === 'dash') {
    return (
      <span
        className={cx(
          'inline-flex size-6 items-center justify-center rounded-full',
          featured ? 'bg-brand-100 text-brand-400' : 'bg-secondary text-quaternary',
        )}
        aria-label="Não incluído"
      >
        <Minus className="size-3.5" strokeWidth={2.5} />
      </span>
    );
  }

  return (
    <span className={cx('text-sm font-semibold tabular-nums', featured ? 'text-primary' : 'text-secondary')}>
      {cell.value}
    </span>
  );
}
