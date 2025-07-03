self.addEventListener('push', event => {
  let notificationData = {};

  try {
    if (JSON.parse(event.data?.text?.())) {
      let { title, ...options } = event.data.json();

      notificationData = {
        title,
        options
      };
    }
  }
  catch(e) {
    notificationData = {
      title: event.data?.text?.() || '',
      options: {},
    };
  }

  event
    .waitUntil(
      self
        .registration
        .showNotification(
          notificationData.title || 'Notification',
          notificationData.options || {}
        )
    );
})

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(openUrl(event.notification.data?.navigate || self.location.origin));
})

/**
 * openUrl
 *
 * @param {string} url
 **/
async function openUrl(url) {
  if (self.clients.openWindow) {
    return self.clients.openWindow(url);
  }

  return null;
}
