import Image from 'next/image';
import { cx } from '@/utils/cx';

interface LandingShotProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function LandingShot({ src, alt, priority = false, className }: LandingShotProps) {
  return (
    <div className={cx('overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-black/5', className)}>
      <div className="flex items-center gap-1.5 border-b border-secondary bg-secondary px-3 py-2">
        <span className="size-2 rounded-full bg-brand-solid" />
        <span className="size-2 rounded-full bg-[#864DF7]" />
        <span className="size-2 rounded-full bg-brand-400" />
      </div>
      <Image src={src} alt={alt} width={1440} height={860} className="h-auto w-full" priority={priority} />
    </div>
  );
}
