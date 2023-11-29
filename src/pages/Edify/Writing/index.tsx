import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Textarea,
} from '@nextui-org/react';

function Writing() {
  return (
    <div className='flex flex-col gap-unit-24 h-full w-full mx-auto py-24 px-8'>
      <p className='font-bold text-5xl text-inherit'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#54b5d2] to-[#c9f686]'>
          The Art of Painting
        </span>{' '}
        with Words.
      </p>

      <div className='grid lg:grid-cols-2 gap-4 w-full justify-items-center'>
        <Card
          isBlurred
          className='border-none py-6 md:px-8 mx-4 w-full max-w-[700px]'
          shadow='sm'
        >
          <CardHeader className='justify-center md:justify-between flex-wrap gap-4'>
            <p className='font-bold text-2xl text-inherit'>Original text</p>
          </CardHeader>

          <CardBody>
            <Textarea
              variant='bordered'
              className='border-none outline-none'
              //   placeholder='Type your script here...'
              defaultValue='The Art of Painting with Words. Not everyone can paint, but everyone can write. Writing is an art, and like any art, it can be learned and mastered with time. The art of writing is a skill that can be cultivated and developed with practice. It is a skill that can be learned and mastered with time. The art of writing is a skill that can be cultivated and developed with practice. It is a skill that can be learned and mastered with time. The art of writing is a skill that can be cultivated and developed with practice. It is a skill that can be learned and mastered with time. The art of writing is a skill that can be cultivated and developed with practice. It is a skill that can be learned and mastered with time. The art of writing is a skill that can be cultivated and developed with practice. It is a skill that can be learned and mastered with time.'
              size='lg'
              minRows={10}
              maxRows={18}
            />
          </CardBody>
        </Card>

        <Card
          isBlurred
          className='border-none py-6 md:px-8 mx-4 w-full max-w-[700px]'
          shadow='sm'
        >
          <CardHeader className='justify-center md:justify-between flex-wrap gap-4'>
            <p className='font-bold text-2xl text-inherit'>Translation</p>

            <div className='flex gap-4'>
              <Button color='primary'>Submit</Button>
            </div>
          </CardHeader>

          <CardBody>
            <Textarea
              variant='bordered'
              placeholder='Type your script here...'
              size='lg'
              minRows={10}
              maxRows={18}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Writing;
