import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Chip,
} from '@nextui-org/react';
import { IVocabulary } from 'src/interfaces/Edify/vocabulary';
import verticalDotsIcon from 'src/assets/icons/vertical-dots.svg';

function VocabularyCard(vocab: IVocabulary) {
  const bgColors = (wordType: string) => {
    switch (wordType) {
      case 'Noun':
        return 'from-[#ed6f9e] to-[#fbc375]';
      case 'Verb':
        return 'from-[#5770eb] to-[#3ed8fe9f]';
      case 'Adjective':
        return 'from-[#92c5fc] to-[#dbc4fc]';
      case 'Adverb':
        return 'from-[#76cbc9] to-[#28cdfd]';
      case 'Phrase':
        return 'from-[#76cbc9] to-[#28cdfd]';
      default:
        return 'from-[#c758f7] to-[#fbc2eb]';
    }
  };
  return (
    <Card className='border-none w-full p-1' shadow='sm'>
      <CardHeader className='justify-between pb-0'>
        <p className='font-bold text-xl text-inherit'>{vocab.word} </p>

        <div>
          {/* <span className='font-bold text-base align-center text-transparent bg-clip-text bg-gradient-to-r from-[#ed6f9e] to-[#fbc375]'>
            {vocab.wordType}
          </span> */}
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant='light'>
                <img src={verticalDotsIcon} alt='vertical dots' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Static Actions'>
              <DropdownItem key='edit'>Edit</DropdownItem>
              <DropdownItem key='delete' className='text-danger' color='danger'>
                Delete
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardHeader>

      <CardBody className='pt-0'>
        <p className='text-gray-500'>{vocab.phonetic}</p>
        <p className='text-inherit text-sm mb-2'>{vocab.meaning}</p>
        <Chip
          radius='sm'
          className={
            'bg-gradient-to-r mt-auto ' + bgColors(vocab.wordType)
          }
        >
          <span className='text-white font-bold'>{vocab.wordType}</span>
        </Chip>
      </CardBody>
    </Card>
  );
}

export default VocabularyCard;
