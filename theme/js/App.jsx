'use client'

import { useLocation } from "react-router-dom";
import PiwikPro from '@piwikpro/react-piwik-pro';
import * as Sentry from "@sentry/react";
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Avatar } from '@abenevaut/tailwindui/src/js/Catalyst/avatar'
import { Dropdown, DropdownButton, DropdownItem, DropdownLabel, DropdownMenu } from '@abenevaut/tailwindui/src/js/Catalyst/dropdown'
import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarDivider, NavbarSpacer } from '@abenevaut/tailwindui/src/js/Catalyst/navbar'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '@abenevaut/tailwindui/src/js/Catalyst/sidebar'
import logoUrl from '@abenevaut/maskot-2013/dist/app-icon.webp'
import { StackedLayout } from "@abenevaut/tailwindui/src/js/Catalyst/stacked-layout.jsx";
import { ThemeProvider } from "@abenevaut/tailwindui/src/js/Providers/ThemeProvider.jsx";

const appEnv = import.meta.env.VITE_APP_ENV || false;
const isProductionEnvironment = 'production' === appEnv;

if (isProductionEnvironment) {
  PiwikPro.initialize('2c54d796-5f59-434c-85e2-1381de1d0d07', 'https://abenevaut.piwik.pro');
}

Sentry.init({
  dsn: 'https://bf032283abab4fdb9fbcd7328ed39b28@o229053.ingest.us.sentry.io/1385819',
  environment: appEnv,
});

const navItems = [
  { label: 'Portfolio', url: 'index.html' },
  // { label: 'About me', url: 'profile.html' },
]

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
  )
}

export default function App({ logo, children }) {

  let pathname = useLocation().pathname;

  return (
    <ThemeProvider>
      <StackedLayout
        className="pb-10 pt-2"
        navbar={
          <Navbar>

            <Dropdown>

              <DropdownButton as={ NavbarItem } className="max-lg:hidden">
                <Avatar src={ logo ?? logoUrl }/>
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
        }
        sidebar={
          <Sidebar>
            <SidebarHeader>
              <Dropdown>
                <DropdownButton as={ SidebarItem } className="lg:mb-2.5">
                  <Avatar src={ logo ?? logoUrl }/>
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
        }
      >
        {children}
      </StackedLayout>
    </ThemeProvider>
  )
}
