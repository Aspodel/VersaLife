import { Card, CardBody, Link } from '@nextui-org/react';

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
      default:
        return 'from-[#c758f7] to-[#fbc2eb]';
    }
  };
  return (
    <div className='relative'>
      <Card
        as={Link}
        href={path}
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
