import clsx from "clsx";
import React from "react";
import { NavbarItem } from "@abenevaut/tailwindui/src/js/Catalyst/navbar.jsx";
import { SidebarItem, SidebarLabel } from "@abenevaut/tailwindui/src/js/Catalyst/sidebar.jsx";
import { BellSnoozeIcon, BellAlertIcon } from '@heroicons/react/16/solid';
import { useNotifications } from "@abenevaut/tailwindui/src/js/Providers/NotificationsProvider.jsx";

export default function NotificationsSwitchNavbarItem({ className, menu = 'navbar', ...props }) {

  const { userSubscription, subscribe, unsubscribe } = useNotifications();

  return (
    menu === 'navbar'
    ? (
      userSubscription
        ? (
          <NavbarItem
            aria-label="Notifications unsubscribe switch"
            onClick={unsubscribe}
            {...props}
            className={clsx(className, '')}
          >
            <BellSnoozeIcon />
          </NavbarItem>
        )
        : (
          <NavbarItem
            aria-label="Notifications subscription switch"
            onClick={subscribe}
            {...props}
            className={clsx(className, '')}
          >
            <BellAlertIcon />
          </NavbarItem>
        )
    )
    : (
      userSubscription
      ? (
        <SidebarItem
          aria-label="Notifications unsubscription switch"
          onClick={unsubscribe}
          {...props}
          className={clsx(className, '')}
        >
          <SidebarLabel>
            <button id="disable-notifications" >
              Désactiver les notifications
            </button>
          </SidebarLabel>
        </SidebarItem>
      )
      : (
        <SidebarItem
          aria-label="Notifications subscription switch"
          onClick={subscribe}
          {...props}
          className={clsx(className, '')}
        >
          <SidebarLabel>
            <button id="enable-notifications" >
              Activer les notifications
            </button>
          </SidebarLabel>
        </SidebarItem>
      )
    )
  );
}
