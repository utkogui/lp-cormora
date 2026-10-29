import { MarkerPin01 } from '@untitledui/icons';
import { cx } from '@/utils/cx';

/** Same pin as destination cards and the destination form in the product. */
export const LANDING_PIN_GRADIENT =
  'linear-gradient(135deg, rgb(226, 176, 255) 0%, rgb(159, 68, 211) 100%)';

export function LandingPin({
  size = 'md',
  className,
}: {
  size?: 'sm' | 'md';
  className?: string;
}) {
  const box = size === 'sm' ? 'size-8' : 'size-10';
  const icon = size === 'sm' ? 'size-4' : 'size-5';

  return (
    <span
      className={cx('flex shrink-0 items-center justify-center rounded-full', box, className)}
      style={{ backgroundImage: LANDING_PIN_GRADIENT }}
      aria-hidden
    >
      <MarkerPin01 className={cx(icon, 'text-white')} />
    </span>
  );
}
