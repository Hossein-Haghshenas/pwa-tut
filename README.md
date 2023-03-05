# **PWA Documentation**

## **What's PWA ?**

PWA stands for "Progressive Web App." A PWA is a type of web application that is designed to provide a mobile app-like experience on a website. PWAs use modern web technologies such as service workers, web app manifests, and responsive design to enable features like offline access, push notifications, and home screen installation.

PWAs are designed to be reliable, fast, and engaging, providing a seamless experience for users across different devices and network conditions. They are also easily discoverable through search engines and can be shared through URLs, eliminating the need for users to download and install a separate app from an app store.

Overall, PWAs offer a compelling alternative to native mobile apps, with the added benefits of easier development, lower maintenance costs, and wider reach across platforms and devices.

## **What's differences between PWAs and native apps ?**

There are several differences between PWAs and native apps:

- Installation: Native apps are downloaded and installed from app stores such as the Apple App Store or Google Play Store, while PWAs are accessed through a web browser and can be installed to the home screen of a device.

- Access: Native apps have access to device-specific features and hardware, such as cameras, microphones, and sensors, while PWAs have limited access to these features.

- Development: Native apps are built using specific programming languages and development tools for each platform (such as Swift for iOS and Java for Android), while PWAs use web technologies such as HTML, CSS, and JavaScript.

- Distribution: Native apps are distributed through app stores, which can require a review and approval process, while PWAs are easily discoverable through search engines and can be shared through URLs.

- Updates: Native apps require updates to be downloaded and installed by the user, while PWAs can be updated automatically through the web browser.

- Availability: Native apps may not be available on all platforms or devices, while PWAs are accessible through any web browser on any device.

Overall, PWAs offer a more accessible, discoverable, and cost-effective solution for businesses and developers looking to provide a mobile app-like experience without the need for a separate native app. However, native apps still offer some advantages in terms of functionality and access to device-specific features.

## **What's Service Worker ?**

A Service Worker is a JavaScript file that runs in the background of a Progressive Web App (PWA) and provides a variety of functionalities, such as offline caching, push notifications, and background sync.

When a user loads a PWA, the Service Worker is registered and installed in the browser, and it is responsible for intercepting network requests from the PWA. This means that the Service Worker can intercept requests for resources such as HTML, CSS, JavaScript, and images, and then decide how to handle them.

One of the main benefits of Service Workers is the ability to provide offline capabilities to PWAs. By caching resources, such as HTML, CSS, JavaScript, and images, the Service Worker can allow users to continue using the PWA even when they are not connected to the internet.

Another important feature of Service Workers is the ability to receive push notifications. When a push notification is sent to the PWA, the Service Worker receives it and can display a notification to the user, even if the PWA is not currently open in the browser.

Overall, Service Workers are a powerful tool that can help PWAs deliver a faster, more reliable, and more engaging user experience, both online and offline.
