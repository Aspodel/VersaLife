import FuncItem from 'src/components/Edify/FuncItem';
import flameLogo from 'src/assets/flame.svg';
import starLogo from 'src/assets/star.svg';
import bookMarkLogo from 'src/assets/bookmark.svg';
// import crownLogo from 'src/assets/crown.svg';

const edifyItem = [
  {
    name: 'New Word',
    path: 'new-word',
    icon: flameLogo,
  },
  {
    name: 'Quiz',
    path: 'quiz',
    icon: starLogo,
  },
  {
    name: 'Idioms',
    path: 'Idioms',
    icon: bookMarkLogo,
  },
];
function Edify() {
  return (
    <div className='flex  flex-col gap-unit-24 h-full w-full max-w-[1024px] mx-auto py-unit-32'>
      <p className='font-bold text-5xl text-inherit'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700'>
          Let's learn
        </span>{' '}
        something new!
      </p>

      <div>
        <div className='flex flex-wrap justify-between gap-5'>
          {edifyItem.map((item) => (
            <FuncItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Edify;
