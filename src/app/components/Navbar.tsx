import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Button, Dropdown, Menu } from 'react-daisyui';
import { toggleTheme } from '../control/features/theme/themeSlice';
import { RootState } from '../store';
import Logo  from '../../assets/icon.svg';

const NavbarComponent: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
        <Navbar>
          <Navbar.Start>
            <Dropdown>
              <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
                <img src={Logo} />
              </Button>
              <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
                <Dropdown.Item>Item 1</Dropdown.Item>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <Dropdown.Item>Item 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </Navbar.Start>
          <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="px-1">
              <Menu.Item>
                <a>Item 1</a>
              </Menu.Item>
              <Menu.Item>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <Menu.Item>
                      <a>Submenu 1</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a>Submenu 2</a>
                    </Menu.Item>
                  </ul>
                </details>
              </Menu.Item>
              <Menu.Item>
                <a>Item 3</a>
              </Menu.Item>
            </Menu>
          </Navbar.Center>
          <Navbar.End>
            <Button tag="a" onClick={() => dispatch(toggleTheme())}>
                Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </Navbar.End>
        </Navbar>
    
  );
};

export default NavbarComponent;
