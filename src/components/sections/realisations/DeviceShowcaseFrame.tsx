export type DeviceFrame = 'mobile' | 'laptop' | 'none';

type DeviceShowcaseFrameProps = {
  frame: DeviceFrame;
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Capture mobile → cadre téléphone ; capture web/dashboard → MacBook ; déjà en mockup → image seule */
export function DeviceShowcaseFrame({
  frame,
  src,
  alt,
  className = '',
  priority = false,
}: DeviceShowcaseFrameProps) {
  if (frame === 'none') {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)] ${className}`}
      />
    );
  }

  if (frame === 'mobile') {
    return (
      <div className={`relative mx-auto w-full max-w-[min(100%,300px)] ${className}`}>
        <div className="rounded-[2.35rem] border-[11px] border-[#1c2129] bg-[#1c2129] shadow-[0_32px_70px_rgba(0,0,0,0.55)]">
          <div className="relative overflow-hidden rounded-[1.65rem] bg-black">
            <div
              className="pointer-events-none absolute left-1/2 top-0 z-10 h-[22px] w-[34%] min-w-[88px] max-w-[120px] -translate-x-1/2 rounded-b-2xl bg-[#1c2129]"
              aria-hidden
            />
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              className="aspect-[9/19.5] w-full object-cover object-top"
            />
          </div>
        </div>
        <div
          className="mx-auto mt-2.5 h-1 w-[28%] min-w-[72px] rounded-full bg-white/25"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-full max-w-[min(100%,680px)] ${className}`}>
      <div className="rounded-t-xl border border-b-0 border-white/15 bg-gradient-to-b from-[#2a2f3a] to-[#1a1e26] p-2 pb-1.5 shadow-[0_28px_70px_rgba(0,0,0,0.5)] sm:p-2.5 sm:pb-2">
        <div className="mb-2 flex items-center gap-1.5 px-1" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="overflow-hidden rounded-lg border border-black/40 bg-[#0a0c10]">
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </div>
      </div>
      <div className="h-3 rounded-b-lg bg-gradient-to-b from-[#3d4452] to-[#252a33]" aria-hidden />
      <div
        className="mx-auto -mt-px h-2 w-[42%] rounded-b-md bg-gradient-to-b from-[#4a5160] to-[#2a2f38]"
        aria-hidden
      />
    </div>
  );
};
