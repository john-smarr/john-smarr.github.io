'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "96b8935e9daff8fb0bf3d21aedebb1ae",
"assets/assets/images/CloudwatchLogo.png": "26ebb090bd74c06f757cd0b54995d953",
"assets/assets/images/Coding_Rocket.png": "71156188f0039b6263450ab29d2b59dd",
"assets/assets/images/Contact_Rocket.png": "297f716f8cbf6032538f4a89af37c6fb",
"assets/assets/images/CPlusLogo.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/images/CSharpLogo.png": "5a53e71a6eec78daeeea5077faba3a23",
"assets/assets/images/DartLogo.png": "bee2948ed9e9c7121c900ffc340d0c21",
"assets/assets/images/EarthPic.png": "fd353fa35c73404980fbfbffd392d675",
"assets/assets/images/Ec2Logo.png": "c753ea4135f49f1c7e838e84cd8d5318",
"assets/assets/images/EksLogo.png": "6d63a39b20be1dfe3a9600f864d602e9",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/images/GitHub_Logo_White.png": "064ace4777ac86d7627f455f36975452",
"assets/assets/images/IamLogo.png": "318a0036e164fce55067b6b674c2ebfc",
"assets/assets/images/JavaLogo.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"assets/assets/images/JupiterPic.png": "b821d5ba3529c17f592070760d59c00b",
"assets/assets/images/LI-Logo.png": "c24cde2827448f08d40afd6909011e16",
"assets/assets/images/LinuxPic.png": "5f292c0d1f11deaf778259a60193952e",
"assets/assets/images/MarsPic.png": "5427a5ddd17eabdcf8972e35ac5bf2f6",
"assets/assets/images/MoonPic1.png": "2d0ac4ef590603f50fd68979e5fa3c70",
"assets/assets/images/MoonPic2.png": "f72a8f36e269224fc29b797956a1c346",
"assets/assets/images/MoonPic3.png": "50af8bd73661f127e84efce1d4e6d5a4",
"assets/assets/images/PlutoPic.png": "46e14b9adba6ffd6776d431a7ab0bc1d",
"assets/assets/images/PythonAddTwo.JPG": "5454ed1db65dcb4860c1402094a94bc2",
"assets/assets/images/PythonBinaryTreeTraversal.JPG": "a63f545524ef5f7580fb3b0b29910bd3",
"assets/assets/images/PythonClimbingStairs.JPG": "fefa8bc93dcbff8047d04513fa6617a4",
"assets/assets/images/PythonLogo.png": "d3c746b2baa87534de255e2da8d49620",
"assets/assets/images/PythonMergeTwoSortedLists.JPG": "905d4753ad72a700b043e1c3e2a8cd50",
"assets/assets/images/PythonTwoSum.JPG": "bf7738b8975522fb721e591a6f7e7757",
"assets/assets/images/PythonValidateBinaryTree.JPG": "8cc6e6615e945feb8e9cffc80c9129ad",
"assets/assets/images/PythonZigzagConversion.JPG": "463df91b394dcd64ee09b635a30d6068",
"assets/assets/images/RdsLogo.png": "6b489b88262921f8e39991e1c08d52ed",
"assets/assets/images/Resume.JPG": "86329c2a6b61b8527783f83f2832cbcb",
"assets/assets/images/Resume_Rocket.png": "fe5a75d66899e40971b6de6e9904b03a",
"assets/assets/images/star.png": "291a071e45f85e14152ec9d013a6b2c0",
"assets/FontManifest.json": "8409e28328c3767f78ffdd7251f7af35",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/RobotoCondensed-Bold.ttf": "e38804ae070b58fbf4fdd88fd6853929",
"assets/fonts/RobotoCondensed-Italic.ttf": "94a4ea4f157a6ee51a0191b5ac515bac",
"assets/fonts/RobotoCondensed-Regular.ttf": "0134dd8fe6fe708de73909a71d842780",
"assets/fonts/StickNoBills-VariableFont_wght.ttf": "37e23ddc4f502911499542515309a8ff",
"assets/fonts/TiltPrism-Regular-VariableFont_XROT,YROT.ttf": "8d4a1032129ecf391bebe38b0fa43783",
"assets/NOTICES": "6d151322f0806a220ef23c55473c11cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "582b5bd22e09352b6d5e14f5666f6487",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5011c64c3e184abfe5f5e3e01e23effe",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "501123899df6f695a2832cdf4cfc8d7b",
"/": "501123899df6f695a2832cdf4cfc8d7b",
"main.dart.js": "d0dd02f12656c738f5efa97a95bb6679",
"manifest.json": "92ef1753ea47fda5111e9f96d76801b4",
"version.json": "8453b4e092c7338f00621f7279ec58c4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
