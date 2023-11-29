import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Textarea,
} from '@nextui-org/react';

function Listening() {
  return (
    <div className='flex flex-col gap-unit-24 h-full w-full max-w-[1024px] mx-auto py-unit-24 '>
      <p className='font-bold text-5xl text-inherit'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#92c5fc] to-[#dbc4fc]'>
          Listen
        </span>{' '}
        to understand, not to reply.
      </p>

      <Card isBlurred className='border-none py-6 px-8 mx-4' shadow='sm'>
        <CardHeader className='justify-center md:justify-between flex-wrap gap-4'>
          <p className='font-bold text-3xl text-inherit'>Listen and dictate</p>

          <div className='flex gap-4'>
            <Button>Add answer</Button>
            <Button color='primary'>Check</Button>
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
  );
}

export default Listening;
