'use client'

import ReactDOM from 'react-dom/client';
import WithoutRouterProvider from "@abenevaut/tailwindui/src/js/Providers/WithoutRouterProvider.jsx";
import Privacy from "@abenevaut/tailwindui/src/js/Pages/Privacy.jsx";
import { AppNavbar, AppSidebar } from "./AppNavigation.jsx";
import './bootstrap.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WithoutRouterProvider>
    <Privacy
      navbar={AppNavbar()}
      sidebar={AppSidebar()}
    />
  </WithoutRouterProvider>,
);
