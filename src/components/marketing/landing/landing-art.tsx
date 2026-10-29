import { DEFAULT_LOGIN_BACKGROUND } from '@/constants/login-backgrounds';
import { cx } from '@/utils/cx';

interface LandingArtProps {
  className?: string;
  alt?: string;
}

export function LandingArt({ className, alt = '' }: LandingArtProps) {
  return (
    <img
      src={DEFAULT_LOGIN_BACKGROUND}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={cx('pointer-events-none absolute inset-0 size-full object-cover object-center', className)}
    />
  );
}
