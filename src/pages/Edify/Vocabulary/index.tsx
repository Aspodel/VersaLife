import { Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import searchIcon from 'src/assets/icons/search.svg';
import { data } from './data';

function Vocabulary() {
  return (
    <div className='flex flex-col gap-10 lg:gap-24 h-full w-full max-w-[1280px] mx-auto py-24 px-4'>
      <p className='font-bold text-5xl text-inherit'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ed6f9e] to-[#fbc375]'>
          Word Power
        </span>
        , a vocabulary's worth.
      </p>

      <Input
        isClearable
        size='lg'
        className='w-full max-w-[700px] mx-auto'
        placeholder='Search by name...'
        startContent={<img className='h-8' src={searchIcon} />}
        // value={filterValue}
        // onClear={() => onClear()}
        // onValueChange={onSearchChange}
      />

      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 w-full'>
        {data.map((item, index) => (
          <Card key={index} className='border-none w-full p-2' shadow='sm'>
            <CardHeader className='pb-0'>
              <p className='font-bold text-xl text-inherit'>{item.word}</p>
            </CardHeader>

            <CardBody className='pt-0'>
              <p className='text-inherit'>{item.meaning}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Vocabulary;
