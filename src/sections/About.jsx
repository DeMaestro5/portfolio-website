import Globe from 'react-globe.gl';
import Button from '../component/Button';
import { useState } from 'react';
function About() {
  const [hasCopied, setHasCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText('osstephen70@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <section
      className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'
      id='about'
    >
      <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
          <img
            src='/assets/grid1.png'
            alt='grid1'
            className='w-full sm:w-[276px] h-fit object-cover'
          />
          <p className='grid-headtext'>Hi, i'm Stephen</p>
          <p className='grid-subtext'>
            With 4 years of experience, i have honed my skills in front-end and
            backend development, with a thing for animated websites.
          </p>
        </div>
      </div>
      <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
          <img
            src='/assets/grid2.png'
            alt='grid-2'
            className='w-full sm:w-[276px] h-fit object-cover'
          />
          <div>
            <p className='grid-headtext'>Tech Stack</p>
            <p className='grid-subtext'>
              I specialize in JavaScript/Typescript with a focus in React and
              NextJs eco-systems.
            </p>
          </div>
        </div>
      </div>
      <div className='col-span-1 xl:row-span-4'>
        <div className='grid-container'>
          <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
            <Globe
              height={362}
              width={326}
              backgroundColor='rgba(0,0,0,0)'
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
              bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
              labelsData={[
                {
                  lat: 40,
                  lng: -50,
                  text: "i'm here",
                  color: 'white',
                  size: 50,
                },
              ]}
            />
          </div>
          <div>
            <p className='grid-headtext'>
              I work remotely across most timezones
            </p>
            <p className='grid-subtext'>I am based in Nigeria</p>
            <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
          </div>
        </div>
      </div>
      <div className='col-span-2 xl:row-span-3'>
        <div className='grid-container'>
          <img
            src='/assets/grid3.png'
            alt='grid3'
            className='w-full sm:h-[266px] h-fit object-contain'
          />
          <div>
            <p className='grid-headtext'>My Passion for coding</p>
            <p className='grid-subtext'>
              I love solving problems and building things through code, coding
              isn't just my profession, it is my bitter sweet passion.
            </p>
          </div>
        </div>
      </div>
      <div className='xl:col-span-1 xl:row-span-2'>
        <div className='grid-container'>
          <img
            src='/assets/grid4.png'
            alt='grid4'
            className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
          />
          <div className='space-y-2'>
            <p className='grid-subtext text-center'> Contact Me</p>
            <div className='copy-container' onClick={handleCopy}>
              <img
                src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                alt='copy'
              />
              <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white italic'>
                osstephen70@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
