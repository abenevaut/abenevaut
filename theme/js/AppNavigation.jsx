'use client'

import { ArrowTopRightOnSquareIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { Avatar } from '@abenevaut/tailwindui/src/js/Catalyst/avatar';
import { Dropdown, DropdownButton, DropdownDescription, DropdownItem, DropdownLabel, DropdownMenu } from '@abenevaut/tailwindui/src/js/Catalyst/dropdown';
import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarDivider, NavbarSpacer } from '@abenevaut/tailwindui/src/js/Catalyst/navbar';
import { Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection, SidebarSpacer } from '@abenevaut/tailwindui/src/js/Catalyst/sidebar';
import logoUrl from '@abenevaut/maskot-2013/dist/app-icon.webp';
import './bootstrap.js';
import ThemeSwitchNavbarItem from "@abenevaut/tailwindui/src/js/Components/theme-switch-navbar-item.jsx";

function MainDropdownMenu() {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">

      <DropdownItem href="https://laravel-one.abenevaut.dev/">
        <ArrowTopRightOnSquareIcon/>
        <DropdownLabel>laravel-one</DropdownLabel>
        <DropdownDescription>is a tool to generate static webpages based on Blade Templates</DropdownDescription>
      </DropdownItem>

      <DropdownItem href="https://github.com/abenevaut/phpunit-slicer">
        <ArrowTopRightOnSquareIcon/>
        <DropdownLabel>phpunit-slicer</DropdownLabel>
        <DropdownDescription>is a tool to slice PHPUnit tests files to tests suites</DropdownDescription>
      </DropdownItem>

    </DropdownMenu>
  );
}

function AccountDropdownMenu({ anchor }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>

      <DropdownItem href="terms.html">
        <DropdownLabel>
          Termes d'utilisation
        </DropdownLabel>
      </DropdownItem>

      <DropdownItem href="privacy.html">
        <DropdownLabel>
          Politique de confidentialité
        </DropdownLabel>
      </DropdownItem>

    </DropdownMenu>
  )
}

export function AppNavbar() {

  let pathname = '/'; //useLocation().pathname;
  const navItems = [
    { label: 'Portfolio', url: '/', urlAlt: ['/index.html'] },
  ];

  return (
    <Navbar>

      <Dropdown>

        <DropdownButton as={ NavbarItem } className="max-lg:hidden">
          <Avatar src={ logoUrl }/>
          <NavbarLabel>Antoine Benevaut</NavbarLabel>
          <ChevronDownIcon/>
        </DropdownButton>

        <MainDropdownMenu/>

      </Dropdown>

      <NavbarDivider className="max-lg:hidden"/>

      <NavbarSection className="max-lg:hidden">

        { navItems.map(({ label, url }) => (
          <NavbarItem key={ label } href={ url } current={pathname === url}>
            { label }
          </NavbarItem>
        )) }

      </NavbarSection>

      <NavbarSpacer/>

      <NavbarSection>

        <ThemeSwitchNavbarItem className="max-lg:hidden" />

        <Dropdown>
          <DropdownButton as={ NavbarItem }>
            <Avatar src={ logoUrl } square/>
          </DropdownButton>

          <AccountDropdownMenu className="min-w-64" anchor="bottom start" />

        </Dropdown>
      </NavbarSection>
    </Navbar>
  );
}

export function AppSidebar() {

  let pathname = '/'; //useLocation().pathname;
  const navItems = [
    { label: 'Portfolio', url: 'index.html' },
  ];

  return (
    <Sidebar>

      <SidebarHeader>
        <Dropdown>

          <DropdownButton as={ SidebarItem } className="lg:mb-2.5">
            <Avatar src={ logoUrl }/>
            <SidebarLabel>Antoine Benevaut</SidebarLabel>
            <ChevronDownIcon/>
          </DropdownButton>

          <MainDropdownMenu/>

        </Dropdown>
      </SidebarHeader>

      <SidebarBody>
        <SidebarSection>
          { navItems.map(({ label, url }) => (
            <SidebarItem key={ label } href={ url } current={pathname === url}>
              { label }
            </SidebarItem>
          )) }
        </SidebarSection>

        <SidebarSpacer />

        <SidebarSection>

          <ThemeSwitchNavbarItem menu="sidebar" />

        </SidebarSection>

      </SidebarBody>

      <SidebarFooter className="max-lg:hidden">
        <Dropdown>
          <DropdownButton as={SidebarItem}>
                    <span className="flex min-w-0 items-center gap-3">
                      <Avatar src={ logoUrl } className="size-10" square alt="" />
                      <span className="min-w-0">
                        <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                          Votre session
                        </span>
                        {/*<span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">*/}
                        {/*  erica@example.com*/}
                        {/*</span>*/}
                      </span>
                    </span>
            <ChevronUpIcon />
          </DropdownButton>
          <AccountDropdownMenu anchor="top start" />
        </Dropdown>
      </SidebarFooter>

    </Sidebar>
  );
}
