import './index.css';
import FuncItem from 'src/components/Edify/FuncItem';
import flameLogo from 'src/assets/flame.svg';
import starLogo from 'src/assets/star.svg';
import bookMarkLogo from 'src/assets/bookmark.svg';
import playLogo from 'src/assets/play.svg';
import lockLogo from 'src/assets/book.svg';

const edifyItem = [
  {
    name: 'Vocabulary',
    path: 'vocabulary',
    icon: flameLogo,
  },
  {
    name: 'Quiz',
    path: 'quiz',
    icon: starLogo,
  },
  {
    name: 'Idioms',
    path: 'idioms',
    icon: bookMarkLogo,
  },
  {
    name: 'Listening',
    path: 'listening',
    icon: playLogo,
  },
  {
    name: 'Writing',
    path: 'writing',
    icon: lockLogo,
  },
];
function Edify() {
  return (
    <div className='edify flex flex-col gap-unit-32 h-full w-full max-w-[1024px] mx-auto py-unit-32'>
      <p className='font-bold text-5xl text-inherit'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700'>
          Let's learn
        </span>{' '}
        something new!
      </p>

      <div>
        <div className='flex flex-wrap justify-center gap-20'>
          {edifyItem.map((item) => (
            <FuncItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Edify;
