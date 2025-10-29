import { Bounded } from '../Bounded';
import { ButtonLink } from '../ButtonLink';
import { Heading } from '../Heading';
import { InteractiveSkateboard } from './interactiveSkateboard';
import { TallLogo } from './TallLogo';
import { WideLogo } from './WideLogo';

const Hero = () => {
  const deckTextureURL = '/media/red-white-complete.png';
  const truckColorURL = '#6F6E6A';
  const wheelTextureURL = '/media/wheel-red.png';
  const boltColorURL = '#6F6E6A';
  return (
    <Bounded className='bg-brand-pink bg-texture relative h-dvh overflow-hidden text-zinc-800'>
      <div className='absolute inset-0 flex items-center pt-20'>
        <WideLogo className='w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block' />
        <TallLogo className='w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden' />
      </div>
      <div className='grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr, auto] place-items-end px-6 ~py-10/16'>
        <Heading size='lg' className='relative max-w-2xl place-self-start'>
          Escape the Cul-de-sac
        </Heading>
        <div className='flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row'>
          <div className='max-w-[45ch] font-semibold ~text-lg/xl'>
            <p>
              Not just a board, your board. Design a board that&apos;s as real
              as the places you take it.
            </p>
          </div>
          <ButtonLink
            icon='skateboard'
            size='lg'
            className='z-20 mt-2 block button-cutout'
          >
            Build your board
          </ButtonLink>
        </div>
      </div>
      <InteractiveSkateboard
        deckTextureURL={deckTextureURL}
        truckColorURL={truckColorURL}
        wheelTextureURL={wheelTextureURL}
        boltColorURL={boltColorURL}
      />
    </Bounded>
  );
};

export default Hero;
