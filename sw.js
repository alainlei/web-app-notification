self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'You have a new message!',
        icon: 'icon.png', // Path to a small logo
        badge: 'badge.png', // Path to a monochrome icon for the status bar
        vibrate: [100, 50, 100],
        data: { url: 'https://yourwebsite.com' }
    };

    event.waitUntil(
        self.registration.showNotification('Hello from Gemini!', options)
    );
});

// Open the web app when the notification is clicked
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
