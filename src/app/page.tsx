'use client';

// loading FlipClock component only on client because
// the @pqina/flip package is not compatible with SSR yet
const FlipClock = dynamic(() => import('@/components/FlipClock'), {
  ssr: false,
});
import dynamic from 'next/dynamic';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-grow flex-col items-stretch justify-start xl:container">
      <main className="flex flex-grow flex-col items-center justify-start gap-24 pt-24">
        <h1 className="font-redhattext text-xl font-bold uppercase tracking-[0.45em]">
          We&apos;re launching soon
        </h1>
        <div className="font-redhattext [&_*]:!text-softRed [&_.tick-flip-panel]:bg-darkDesaturatedBlue text-[5rem] [&_*]:font-bold [&_.tick-flip-panel-back]:!top-[51%] [&_.tick-flip-panel-text-wrapper]:flex [&_.tick-flip-panel-text-wrapper]:!h-[200%] [&_.tick-flip-panel-text-wrapper]:items-center [&_.tick-flip-panel-text-wrapper]:justify-center [&_.tick-flip-shadow]:shadow-none [&_.tick-flip]:mx-4 [&_.tick-flip]:rounded-md [&_.tick-flip]:indent-0 [&_.tick-flip]:tracking-normal [&_.tick-flip]:shadow-[0px_10px_0px_0px_hsl(234,17%,12%)]">
          <FlipClock
            value={'2024-09-10T00:00:00'}
            flipClass="!py-1em mx-10 !min-h-[140px] !min-w-[150px]"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
