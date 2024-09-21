'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "06139389305c6b7fc14fb286c113c792",
"assets/AssetManifest.bin.json": "71208de6758188b62fd7b5124d5b5ac1",
"assets/AssetManifest.json": "2462553511e2af05bf019d2a2cb38c95",
"assets/assets/bg.jpg": "1c8fc56d1cd5b8d1f7045d9aff38f08d",
"assets/assets/c1.jpg": "f0316bb1e02e96085c773e0201709e12",
"assets/assets/c2.jpg": "10d39caf47823cd82e782b4bfd3dd8e7",
"assets/assets/c3.jpg": "e8374cdfeb80bfebb4df2ac858994229",
"assets/assets/c4.jpg": "cf99ccd8a66f571ea83b1284f945dd6f",
"assets/assets/certificate.png": "e856e464c9b21ce1f718ce943f240ef0",
"assets/assets/chat.png": "f65b46aed51cb2815e4f45605057a087",
"assets/assets/close.png": "0bfb17e7d0aba9ba3eb21d9c31ca54ab",
"assets/assets/coffee.png": "9d2056a7348f21d66b679519dccfddaa",
"assets/assets/dart.png": "21b21b7f0395b1d10844e2681860ef92",
"assets/assets/delete.png": "5ba429349ad0f3f6c3d02f1400fd282c",
"assets/assets/folder.png": "89b6193aeeb96cfeb70bf75c749fda31",
"assets/assets/github.png": "6e2ea0a8b1a8f2e13739dc5c3a306218",
"assets/assets/gmail.png": "e819b6a8860c9f813501e9dff82a471e",
"assets/assets/google.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/icon3.png": "580bba7a4d63b0017c1156a8d0ce5f20",
"assets/assets/instagram.png": "063798ac1a7204f7af92d7be023feca5",
"assets/assets/linkedin.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/assets/md.png": "3bc33366b62386192bd693b93d2a2bf6",
"assets/assets/p01.png": "ff8b6ffabdfeef242c605aa0b1a3736c",
"assets/assets/p1.png": "326a09ce678b6b4bf82a4946a1ce3fb0",
"assets/assets/p2.png": "42ccc1a4cc8298c047f85edfe58d4a33",
"assets/assets/p3.png": "c963fd8edb4694e871e9736de6b7a121",
"assets/assets/p4.png": "7ce9e810bb6423c4ec7fb7a86735247e",
"assets/assets/p5.png": "c1ba682af41a27ff7f4a156a26a24fa7",
"assets/assets/p6.png": "8b58865fd31502850296ce9e8a17dae0",
"assets/assets/p7.png": "7d872afc7328f3e3b40a1c785b3e7d73",
"assets/assets/p8.png": "3f58317c9623364ecadce9b020029495",
"assets/assets/profie.jpg": "a991a317d633231b0f86a0acda3c7437",
"assets/assets/projects.png": "050ff3b9b29545049d52b546c82450cc",
"assets/assets/send.png": "6b9b15c90f62c31169aad2b28ac38412",
"assets/assets/www.png": "442b7efa08d71b322e405f950347fb11",
"assets/assets/youtube.png": "85c197f1a4ad8c57edcddfff43e13b26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1cd986ba3de79aa3a1ce244739d3bbf7",
"assets/NOTICES": "a4d1f7182a9406e0bba6857fea39189d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"firebase-config.js": "68355b52d19bbf03ae626d6dda8076fb",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3facdc8c9b72f26853b4455c751f8661",
"icon.png": "979936532184000c745b18f0fd32eba5",
"icons/Icon-maskable-192.png": "17cfde674b4dffc80cd96d0670b3ec6e",
"icons/Icon-maskable-512.png": "17cfde674b4dffc80cd96d0670b3ec6e",
"icons/icon1.png": "76e05759e5d33ff6e75f19ac36f3e1ac",
"icons/icon2.png": "8ef0583c16706da432f0237a0bdf5d1e",
"index.html": "c5e8bb113c8ce70b0528e683034be08b",
"/": "c5e8bb113c8ce70b0528e683034be08b",
"main.dart.js": "f48804d2dbd0f4fca0c980c952d852c5",
"manifest.json": "041b359b207f0e3415a679c40c5c71b6",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
