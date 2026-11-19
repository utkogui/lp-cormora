import { cx } from '@/utils/cx';

/** Ghost white da página (`--color-bg-secondary`). O fade acaba nesta cor. */
export const LANDING_WASH = 'rgb(247 248 255)';

interface LandingFadeProps {
  src: string;
  className?: string;
  imageClassName?: string;
  /** Onde a foto ainda aparece, antes de sumir na cor da página. */
  mask?: string;
  wash?: string;
}

export function LandingFade({
  src,
  className,
  imageClassName,
  mask = 'linear-gradient(to bottom, #000 0%, #000 30%, transparent 72%)',
  wash = `linear-gradient(to bottom, rgba(247,248,255,0.12) 0%, rgba(247,248,255,0.55) 42%, ${LANDING_WASH} 74%)`,
}: LandingFadeProps) {
  return (
    <div aria-hidden className={cx('pointer-events-none absolute inset-x-0 top-0', className)}>
      <img
        src={src}
        alt=""
        className={cx('size-full object-cover', imageClassName)}
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      />
      <div className="absolute inset-0" style={{ background: wash }} />
    </div>
  );
}
