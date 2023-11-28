import { Link } from 'react-router-dom';
import viteLogo from '/vite.svg';
import noteLogo from 'src/assets/note.svg';
import whaleLogo from 'src/assets/whale.svg';

function HomePage() {
  return (
    <div className='flex  flex-col gap-unit-24 h-full w-full max-w-[1024px] mx-auto py-unit-32'>
      <p className='font-bold text-5xl text-inherit'>
        Welcome back,{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700'>
          Daniel
        </span>
      </p>
      
      <div className='flex flex-wrap justify-between gap-x-unit-32'>
        <Link to='edify'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
          <p className='font-bold text-xl text-inherit'>Edify</p>
        </Link>
        <Link to='edify'>
          <img src={whaleLogo} className='logo react' alt='React logo' />
          <p className='font-bold text-xl text-inherit'>Edify</p>
        </Link>
        <Link to='nostalgia'>
          <img src={noteLogo} className='logo' alt='Nostalgia' />
          <p className='font-bold text-xl text-inherit'>Nostalgia</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
