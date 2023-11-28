import { Card, CardBody } from '@nextui-org/react';
import { Link } from 'react-router-dom';

type FuncItemProps = {
  name: string;
  icon: string;
  path: string;
};

function FuncItem({ name, icon, path }: FuncItemProps) {
  const bgColor = (name: string) => {
    switch (name) {
      case 'New Word':
        return 'from-[#ed6f9e] to-[#fbc375]';
      case 'Quiz':
        return 'from-[#5770eb] to-[#3ed8fe9f]';
      case 'Listening':
        return 'from-[#92c5fc] to-[#dbc4fc]';
      case 'Writing':
        return 'from-[#76cbc9] to-[#28cdfd]';
      default:
        return 'from-[#c758f7] to-[#fbc2eb]';
    }
  };
  return (
    <div className='func-item relative grid place-items-center'>
      <div
        className={
          'func-item__overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[280px] h-[110px]  bg-gradient-to-r  blur-[62px] ' +
          bgColor(name)
        }
      />
      <Card
        as={Link}
        to={path}
        className={
          'w-[280px] h-[110px] overflow-visible bg-gradient-to-r ' +
          bgColor(name)
        }
      >
        <img
          src={icon}
          alt='Vite logo'
          className='h-16 absolute -top-8 right-7'
        />
        <CardBody>
          <div className='flex flex-col justify-center items-top h-full w-full p-4'>
            <p className='text-xl font-semibold text-white'>{name}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default FuncItem;
