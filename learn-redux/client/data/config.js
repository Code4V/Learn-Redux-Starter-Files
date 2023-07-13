import Raven from 'raven-js';

const sentry_key = '9a63041f2a7e42e989f64532f574a43a@o4505519905308672';
const sentry_app = '4505519972024320';
export const sentry_url = `https://${sentry_key}.ingest.sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
