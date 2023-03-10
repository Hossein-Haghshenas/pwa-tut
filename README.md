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

## **Service Worker life cycle**

A service worker is a type of web worker that runs in the background of a web page, allowing it to intercept network requests and cache resources for offline use. The life cycle of a service worker can be broken down into four stages: registration, installation, activation, and update.

- **Registration**:
  When a web page requests to register a service worker, the browser checks if it has already been registered. If not, it downloads the service worker file and runs it. The service worker file must be hosted on the same domain as the web page or on a subdomain.

- **Installation**:
  After the service worker file is downloaded, the browser installs it. During the installation process, the service worker can pre-cache resources that it will need for offline use. If the service worker is installed successfully, it moves on to the activation stage.

- **Activation**:
  Once the service worker is installed, it is activated. During the activation process, the service worker can clean up any resources from previous versions, update the cache, and start intercepting network requests. If the service worker fails to activate, it remains in a "waiting" state until the next time the web page is loaded.

- **Update**:
  If the browser detects that the service worker file has changed, it will download and install the new version in the background. Once the new version is installed, the browser will wait for the web page to be reloaded before activating it.

Overall, the service worker life cycle allows for efficient and reliable caching of resources, enabling web pages to work offline and load more quickly on subsequent visits.

## **fetch event**

In a Progressive Web App (PWA), the fetch event is a type of event that is fired by the service worker whenever the web page makes a network request. This event provides an opportunity for the service worker to intercept the network request, and to either respond with a cached resource or forward the request to the network.

Here is a more detailed description of the fetch event in PWAs:

- **Intercepting network requests**: When a network request is made by the web page, the service worker intercepts the request before it is sent to the network.

- **Checking the cache**: The service worker first checks its cache to see if it has a cached version of the requested resource. If it does, the service worker can respond with the cached resource immediately, without making a network request.

- **Forwarding the request**: If the requested resource is not found in the cache, the service worker can forward the request to the network. This can be done using the "fetch" API, which returns a Promise that resolves with the network response.

- **Caching the response**: When the network response is received, the service worker can cache the response in its cache. This allows future requests for the same resource to be served from the cache, improving the performance of the web app.

- **Returning the response**: Finally, the service worker responds to the original fetch event with either the cached resource or the network response.

The fetch event is an essential part of PWAs because it allows for efficient caching and network optimization. By intercepting network requests and serving cached resources, PWAs can work offline and provide a better user experience, even in areas with poor network connectivity.

## **offline mode**

Offline mode in PWAs is achieved through a combination of techniques, including Service Workers and caching.

1. Service Workers :
   Service Workers are a JavaScript file that runs in the background of a PWA and intercepts network requests from the app. The Service Worker is installed when the PWA is first loaded and continues to run in the background, even when the app is not open in the browser.

2. Caching :
   When a PWA is first loaded, its Service Worker downloads and caches essential files, such as HTML, CSS, JavaScript, and images. This is known as the app shell. The app shell is the minimal set of files required to provide a basic user interface and functionality to the user.

3. Network Requests :
   When the user interacts with the PWA, such as by clicking on a link or submitting a form, the Service Worker intercepts the network request and checks whether there is an internet connection available.

4. Offline Caching :
   If there is no internet connection available, the Service Worker serves the cached files to the user, allowing them to continue using the app even when offline. This means that the user can still access the app shell and any content that has been previously cached by the Service Worker.

5. Syncing :
   When the user interacts with the app offline, any data they generate, such as form submissions, can be stored locally using technologies like IndexedDB or Web Storage. When an internet connection becomes available, the Service Worker can sync this data with the server, ensuring that the user's data is always up to date.

Overall, offline mode in PWAs allows users to continue using the app, even when there is no internet connection available. By leveraging Service Workers and caching, PWAs can provide a seamless and uninterrupted user experience, reducing frustration and improving engagement.
