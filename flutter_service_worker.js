'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e528cf95007395bcba9eaccb4e4f125",
".git/config": "5d53defa6957145987bf84e624946cd2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9567ff58c498cae606966f95795dd508",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80afe6c3d019f2696b8d5b43bae2458b",
".git/logs/refs/heads/master": "80afe6c3d019f2696b8d5b43bae2458b",
".git/logs/refs/remotes/origin/master": "9582a2ac52d97ff0b9a0e2c3009a10f3",
".git/objects/10/1e85ca88bd68841259fbb452b215e823cad89d": "e8622c19edabd184ae7ddff975259ed8",
".git/objects/17/70bfda2e14157b8ecbc4b82d4110b205be0ded": "d6170cfa047da4cf9128935b52e84bce",
".git/objects/1a/d80b5217c0476ac1ee8d43ec3810e56345fc1a": "f9241e7c202e8bee646afb0bd8622dd7",
".git/objects/1e/287064ebb57ea39eb44053958f108405b84681": "e0fdd782c01c9601ed93e19a186c1192",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/f53e7411b532148ac7d1cec2acc627ab61f167": "8ea3c0566685c74190b86b698e562810",
".git/objects/3b/6c1070db9cc595ad84a0bb975aec01d6a38403": "701df626d2bee40b98b0d03fe3a1a538",
".git/objects/3f/36aeae725b1e64f0e9ff3f8ea5ea03430d4570": "7c2c6b90629241a7e58703685709b932",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/53/dd57f58842eb116048c806c4eaaa274b8ba284": "68abe01ca3502c0667c50399cb5ab14d",
".git/objects/55/dc6f4dc8dc7fc3d5ea62d87f1aa0c213f57f87": "f99fce7963057592daa19ed9a60c7a8d",
".git/objects/59/e54c65ca9e7b0c1bdb8ada5fc21dac789f5a6a": "e7c27bb77b55934c970c79eaa54a6412",
".git/objects/5d/770b762fc3ea7cb0f194558b3529f3d15587f2": "f576b56752ae5803895dc8de56676e70",
".git/objects/64/b7b06412bc00587ee705b45b0f294cc995e57c": "9cb18d24298921cb6205f27722c58db4",
".git/objects/68/9fa9f2a525e2221dd974809fb70f9870711aea": "89c22dc4486b248c502bd9f39b757730",
".git/objects/6d/5597b0e4a1121f53e47c181b911e0e34cef623": "5b63ec7dba80a370914deb6705019618",
".git/objects/71/8d84eeedddf80401767843a8742d5f95a5550f": "23799a7ee99fbdee4066acae076661e2",
".git/objects/76/3beac3fb3592629beb671797d111112c33bdbb": "f2c98a7fac6292047ff6e4b9aa16b283",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/8e530cc9eb5a59d01c46766a730dbd5ec57d03": "d17af1fd27871417d285dac5d58182e0",
".git/objects/85/0c4670d73422d74e0a50faea2815af2d462d41": "96d23ea0bf153d3b391df0d2c9d41541",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/800b905143a2948b0ee4e7d95265091d710718": "c6b9553abe796e851dedb2f52012edb9",
".git/objects/8e/65741110f7621c18de8244af86f99a8e885e38": "5db139668f1f361cc3eae5f18aff096a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/0ada1311b0a0c0fcfaf15b91a1ec0df28147a1": "175324890f9022a162bcf29947c75a3b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/4379eb288e006db358940878faa988999377b1": "76af1e75c5a7481b45f979d85e067986",
".git/objects/bf/0b2957172c1f476bfa08c17ef4af7cee1b3eb6": "3df68b265b92713ec53f2784f7bf6512",
".git/objects/d4/28788884ba70184eaaec0992582fe66f4688f5": "0d63885d463abd453f6a1e4635c69d8a",
".git/objects/da/ddd521431eee2087e751478e61568e77a41a36": "97f56146c9dc271f296fbc85c4b23a79",
".git/objects/e2/2ff946dd6777f78e210316d74885580a37ddd8": "8b417f350daac520172a4e86a44048b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/45009c290cb52a34aa678d8568821bcacd7eb5": "4b5f88e1c1b24bc3b2b2d5e3a52dcb4f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/61f61ae4f6398cc0732be2f62bdbe169f83772": "b1fa2de993839aa1f12b50f39ded62b3",
".git/objects/fd/c5897c9b02b886f000ba57f0b0dfd3b07b660b": "3f6587059d1fd8d984b8371ffdfae5e3",
".git/refs/heads/master": "1048429eae92604f522b1fc70aa56eec",
".git/refs/remotes/origin/master": "1048429eae92604f522b1fc70aa56eec",
"assets/AssetManifest.json": "72f2eab168f37cbd0d8526e94402449b",
"assets/assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/assets/icons/add_to_cart.svg": "0eb1a5e481ee24dba9de843a9dacdde1",
"assets/assets/icons/back.svg": "1b13e0b59c27ec75d6f5051e5d66e8d9",
"assets/assets/icons/bag_1.svg": "63e5245b06f0a2341dba8d0d9f81014b",
"assets/assets/icons/cart.svg": "fd320d807686c8432b2e449a583296b1",
"assets/assets/icons/heart.svg": "1c996a5addb1570d53d2093a229b8ac8",
"assets/assets/icons/search.svg": "654e22ab2ad459d56cff69b1e077c53f",
"assets/assets/images/bag_1-.png": "e9506b6861af2660221107684bbebd97",
"assets/assets/images/bag_1.png": "283bea6a31b1ee78f11744e7364218b1",
"assets/assets/images/bag_2.png": "441f73d9f6babb8b03e1e5745dc98f26",
"assets/assets/images/bag_3.png": "3c574f7d344bcf71ae906031a8a27f0f",
"assets/assets/images/bag_4.png": "bc96109ae410aff1a9fd878fcbfc9b16",
"assets/assets/images/bag_5.png": "9a24709401f9d0b9755729402c4d6854",
"assets/assets/images/bag_6.png": "79aa3e545fbf38e1496780d1af291cdf",
"assets/assets/images/bosna_logo.png": "538e80c1f1b66e3c95ec1b90799c9f17",
"assets/assets/images/user_foto.png": "4c6ea85d81b88dae268d12857a1b74d9",
"assets/FontManifest.json": "bc6b6e615d238cefb6e2de0109adf86b",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "b3c08255cf1dcb339638a630eb796bf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b8b71637e10af4c2db1fb59b8ea74a2d",
"/": "b8b71637e10af4c2db1fb59b8ea74a2d",
"main.dart.js": "44ddd6b74ef1c21d83c1ba6c97f00f0c",
"manifest.json": "0e3531fa4cf4bf24007df99fda608d1f",
"version.json": "eeef3a2f574316e2289b6d212e1e182b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
