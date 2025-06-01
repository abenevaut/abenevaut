import PiwikPro from '@piwikpro/react-piwik-pro';
import * as Sentry from "@sentry/react";

const appEnv = import.meta.env.VITE_APP_ENV || false;
const isProductionEnvironment = 'production' === appEnv;

if (isProductionEnvironment) {
  PiwikPro.initialize('2c54d796-5f59-434c-85e2-1381de1d0d07', 'https://abenevaut.piwik.pro');
}

Sentry.init({
  dsn: 'https://bf032283abab4fdb9fbcd7328ed39b28@o229053.ingest.us.sentry.io/1385819',
  environment: appEnv,
});
