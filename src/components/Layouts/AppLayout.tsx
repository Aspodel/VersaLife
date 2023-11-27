import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import hexaLogo from 'src/assets/hexa.svg';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className='flex flex-col w-full h-screen min-h-screen'>
      <Navbar>
        <NavbarBrand className='gap-4'>
          <a href='/'>
            <img src={hexaLogo} className='h-10' alt='Vite logo' />
          </a>
          <p className='font-bold text-inherit'>VersaLife</p>
        </NavbarBrand>
        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Button as={Link} color='primary' variant='light' href='#'>
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color='primary' href='#'>
              Sign In
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className='flex flex-col flex-grow w-full h-full'>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
