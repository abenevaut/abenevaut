'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Avatar } from '@abenevaut/tailwindui/src/js/Catalyst/avatar';
import { Dropdown, DropdownButton, DropdownDivider, DropdownItem, DropdownLabel, DropdownMenu } from '@abenevaut/tailwindui/src/js/Catalyst/dropdown';
import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarDivider, NavbarSpacer } from '@abenevaut/tailwindui/src/js/Catalyst/navbar';
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '@abenevaut/tailwindui/src/js/Catalyst/sidebar';
import { ArrowRightStartOnRectangleIcon, Cog8ToothIcon, LightBulbIcon, PlusIcon, ShieldCheckIcon, UserIcon } from "@heroicons/react/16/solid/index.js";
import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid/index.js";
import logoUrl from '@abenevaut/maskot-2013/dist/app-icon.webp';
import './bootstrap.js';

function TeamDropdownMenu() {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">

      <DropdownItem href="terms.html">
        <DropdownLabel>Terms of services</DropdownLabel>
      </DropdownItem>

      <DropdownItem href="privacy.html">
        <DropdownLabel>Privacy policy</DropdownLabel>
      </DropdownItem>

    </DropdownMenu>
  );
}

export function AppNavbar() {

  let pathname = '/'; //useLocation().pathname;
  const navItems = [
    { label: 'Portfolio', url: 'index.html' },
  ];

  return (
    <Navbar>

      <Dropdown>

        <DropdownButton as={ NavbarItem } className="max-lg:hidden">
          <Avatar src={ logoUrl }/>
          <NavbarLabel>Antoine Benevaut</NavbarLabel>
          <ChevronDownIcon/>
        </DropdownButton>

        <TeamDropdownMenu/>

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
          <TeamDropdownMenu/>
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
      </SidebarBody>
    </Sidebar>
  );
}
