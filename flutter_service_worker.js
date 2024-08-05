'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "507a1ef4fa1e44a1ef5378b0b4401071",
".git/config": "6bfec49e1c67167f8cfb22c2d4b092e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bc3cdc40ce1b3851c420ce09a3b1b46a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "310958adfb1e6644d9e99591064115d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7800d9e65e790a501504b94ac876d1e9",
".git/logs/refs/heads/main": "1739a8b5305d461b65afd406729ca92f",
".git/logs/refs/remotes/origin/main": "6b1b0eac5072bd9256089942f1acbdce",
".git/objects/04/2595cc33962f1d0e171648c6bdf7b46c3b11ef": "8807213a012061426b1c99dac94cb8eb",
".git/objects/05/08e5d7f8409efbeb8e56c0a8ced8ea5aee6cef": "2459073b908ab97b532bde6bcd228ffc",
".git/objects/06/7d6069383c0db87ab866f5f3559360958f5e3b": "0d843f9c0a2013daaa29eacbff102e63",
".git/objects/06/8c3a1d198763b7a82f1704dbc3af0ea7bde8a1": "f95a1ccfbf3f90647d03ba301fe30b15",
".git/objects/0b/8f3cb42e6711e999fa3c72f1ebaf20b0730b00": "afecf0c360e8b1b790a1d27213fe6e4b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1e/e9b2ec721272bc63377fdf795091ed7de0ac0f": "a1f2765a421ec59182b79705b089f012",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/9a0fad89b40945b399cc7ea97a8008c4dd08f2": "22647ea8119fb338a0ef1b296c66c12c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/d7a313a1273efc4e2bcb2dfbc5ca1a3d7bd870": "71be54f206556a91ee919fa0b1954a3f",
".git/objects/24/a97a199f5af4889a260cfb4a3b859280a5b0d8": "fa82bc1b5f759eb1f93d12561401153e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/dccb29caef8fc9ced30ac12f617b60af844f22": "59077c8d079d330ae038b0e5da865257",
".git/objects/28/c15070437244d8224e22a5e8f4bf3d2e98017b": "7fd8167a4e7c88edb3836b06aa021b50",
".git/objects/2e/f73db880fc997f05b8b0622301a231429e129c": "2f148cc19a062976fc841214c6424b96",
".git/objects/35/ab79c0552e737ab05431c0cb4d2ea747aa6b73": "95b6d8107f84ba0c703cc3277eb00505",
".git/objects/39/35756603da5cfa1851bf5eaa1a12e362d3ad70": "6d40edaa85e4784c87d6f36441878634",
".git/objects/3c/306c751564502aab13f4d4ba394b7623f49438": "59d8701edeb6ed5e80111f8f2fe2a9e1",
".git/objects/46/03b1ee103a19e98c075502ecc9d4a7ef154721": "02abf22ba5b2d1721b3cdb85c91047fd",
".git/objects/46/08fc25b16a5d90bb33441e53b9927432566d65": "6127baca3e7f7d2b87f335eda56bb515",
".git/objects/46/4a927083e40e60da38611e8f201c283fe0bbc0": "d1178d6badfb38ace20452d55ddd3a2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/f9d9f7050e71900a4a395ab6f8f9cba9fd9987": "9ec5bc340a691eb52bed621140a73f30",
".git/objects/4f/95f056f1ef80eeeb2b5856ccdb3577cdb2c7d3": "43a002743e8d660d301a9d7ae56b647b",
".git/objects/56/04143218c096a26f1cd62afa536183d2bac84b": "486ea5008d84662c57e8b9b7cfa3d209",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/4c5eb87dedb2cfcb52f1781f8b5e165af5b2b3": "d06dbacdef749f6256857f3535ebcdc1",
".git/objects/5e/e02e67f70b4681cab19750b85d8160995f2580": "3b849059225d9f31f6367155f573ee46",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/15ed4d0bec345ce0cf379c749c35bfcd98a4d8": "394f80d59dfc42bce7d23238759e4afc",
".git/objects/66/7c49266f98cb235a45d853bbf4301cf6d2e6e9": "396573468b83b4aeadd32cd4c16b5087",
".git/objects/68/80924f96506c2006398846f7644b2b8f6fe566": "c2333e4d0fc9932eeb8768b27d9b23f5",
".git/objects/68/84faa40c6908885af327906c45a8f188169bd0": "2638b62c891911f7c12df469ab600034",
".git/objects/68/da809461f25d4c7f9893d321179102514b1388": "8e6861099564a3fe2697aeb35d052bbe",
".git/objects/6d/073c6d24f39857634badb3f85b07d2c0612df4": "3335f1eadca50788fa973cb7049251df",
".git/objects/6d/1b04c2fdbaa721c51473f422e425ed590c61a1": "1346f4b0ed390f9d7150019b82dbcf0f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/e5190efdb823c404da754d9f5288e5ec345da7": "86921f70141f463ff6862b305b819667",
".git/objects/75/e0d5ded9981624042aa1abc90765f4dabac250": "36f82d01520958bf10b11a3703a9d290",
".git/objects/77/85688f7cc7071b5dbd40893432c5db0097bf46": "a5e9a19e7ffb4ff569d754240ef80806",
".git/objects/7b/4de4cdb255583367fb7a905171be0614cf95ac": "575b4513345389f13ff5dce4be0b81bb",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/5ba1ea737cf9f5b95bff854874184b525cc602": "87e7ea56ef87b2f3c938047a18956f0e",
".git/objects/80/625846755d455597a3f0d7cd965bd0371dd797": "d4074a48aa74a014b905fafd3d4a6112",
".git/objects/81/b1a96329240d77598518ab402a1d86e9c8c172": "39e6323f534d08f61fab6dffb7e01930",
".git/objects/84/bd6d6439564ab9a36d9d3727df1f05010fe039": "7fdce8e7349f32546d71d4e65902f7cb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/37fc95195baf9fed2599bb5918e7deacd58a12": "45f4638792e4db62e0b42c42c2c09694",
".git/objects/8a/b76160e80536e5c017a8deb74e162dddfe3719": "cac4090cd2eb34a2203922ddffeb7ea0",
".git/objects/8a/d0334e7f31ae8df0c7e7511d4baad85fef4079": "4ee91fbdf7ca3c8d21a1e087a39ad083",
".git/objects/91/c938c8f981be59981b6ae72bae3e1ed3161862": "2a381af4ebd8f6c5355b280454a292af",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/16a31f9f55ded47819c97643dec5bbf447868a": "51a3ad832148a65d2f39e11681e8d31e",
".git/objects/96/429454c56acf1ae42f7cbf27b277bbeb7c34e4": "ac0c7730d51634b37d0dea42cdd0eb91",
".git/objects/97/77c74ca5663dc9f016ca99d0e530f8fad980e7": "73b27ea2eaf6976c1987473b4bef6f7d",
".git/objects/98/838d1af916f4fab8b64984bde73e8ffb95a92e": "930233601398edecf14e67d2b57d82d9",
".git/objects/aa/c289d9b452bc17ef8bff18cea8afe93ff0376e": "8557a0108f06f46e3c566bd1a316a9ec",
".git/objects/b1/f6f0ef3ebef6504af3dc78aefdb1d5cc163204": "ae6f37a6c3ac1db54e5ac64e979081fa",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/9fdf5a3acd79b3f511dfa04c3dc90abac42f4d": "2bf8a1623f66b9ed03e2546f6a3eedc8",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/8acd32985f8d9cb85fbe8c919441a78d52bd5e": "90326aeed61465125a9ea3666849aad0",
".git/objects/c5/7f7da3d13bdf164ad02a430391118f748ba71c": "0ff38f2f60e853ab3b8bfdb6169d3190",
".git/objects/c7/159433e8fdd5fcbc92bec998b7aa95dffd0514": "17a78075633d74c4a176bcf10c7846a4",
".git/objects/c8/bf794a5156cd904cae05369c2c5936ad900043": "e990edd45fe3d4d11fad5c0e922b44a6",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/38a1d9f6baf286f88c130928df974fc66f87c7": "7d4390b80496ece034d1bb6a77b4289a",
".git/objects/cc/a362318cd5b43b6ffaaa4319896980d94b4833": "c69bcb2339b3ac9a953f8525daa67e40",
".git/objects/cc/d4d338ceb5f8aed8666160138f3f34cc274de6": "fafb5695241fe55c53b8b96a7a23bb58",
".git/objects/ce/d9d958686e558b62c38ec7a0f6f8e7778b852a": "81ec8bc292f5131e616cfbf1fa957274",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/b6eab80364b1643ffaee02be11ad4b63d3fce0": "d1e72878e739c0dfa0afe2d6499bf3db",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/52267d6c25e5181719603792f8383da7b7738a": "c95d16805ebc76ba9fad565d2dec5eca",
".git/objects/d5/be467ba34a99fb52a527f4ed3bee8f61f7a5b6": "c9532aa7b81af164328c9be7f2565074",
".git/objects/dc/8fa71db33925d130db3270f373f3e442336ec2": "25ad38a0e5694ebd612df75e8b43a01a",
".git/objects/dd/51f0e3317bb1515832d90dff92ff49be9f2466": "84c764393076f033fe48142cba1c05e1",
".git/objects/de/fdef758bd4f54b6dc9cfd707f5cc0179d8a348": "a288ab236bf386b661a3821ac7b70e50",
".git/objects/e1/42e089e1b9d36132eb23d44d458e639a9a8106": "85905e29978eada5dce9ceaea9775e8d",
".git/objects/e3/1d81c5864303b9e18929ca21a5bc41e64f39b2": "bb23507a304b81176b85df2decb1d6ef",
".git/objects/e6/beef688c388953ca28d266fd9f09457776aa0e": "dbc2ae2d15fe34360788bc6cb9d09742",
".git/objects/ec/c000fea2a396bb937816c0410437d1eb8e0937": "b4057bff7c2fa21c4a5533dbaf04ae2e",
".git/objects/ec/dc0c6952929043c86777c2f7c2b4f3297df952": "23d1e50ff6528e586c9f940ab7917a62",
".git/objects/f0/a4c4172d7c85547daa7776bdb62f3bcf0464a9": "3633b360107d77f297081d2d9ea216e5",
".git/objects/f0/e067d71d84ff2955809314060b479c89ee5541": "ee00478ae67f61d93187d1d3ba8018f1",
".git/objects/f1/256fa2a82dfedf254903d0be4321811971b239": "c57efc548981e24dbd4a45bd53bcc2b5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f5/f69924285187ab74474c1c0f8e0517bcfb36de": "23685194c19ebb5e314ecf88eabada3e",
".git/objects/f6/58f2e61c829efa362630d6a5418036b8ecb624": "2aaefcf089b6ea2c1d42eed9cb9fc956",
".git/objects/fe/48ae7ed7576503f9e007401f45fb79b141973c": "0d81b000c278de03a7b2384c8e17a231",
".git/ORIG_HEAD": "9f39fd0440d2910ba5f0a28ee99274d4",
".git/refs/heads/main": "1f59b28523167b4d5da6e4d6393c7c6a",
".git/refs/remotes/origin/main": "1f59b28523167b4d5da6e4d6393c7c6a",
"assets/AssetManifest.bin": "e3c570a709726e016727ba897542bb3e",
"assets/AssetManifest.bin.json": "4bdc05a36b2fc7e8aa37963b223ceb1a",
"assets/AssetManifest.json": "7a42580c417096a4996613c407693c75",
"assets/assets/bg.jpg": "1c8fc56d1cd5b8d1f7045d9aff38f08d",
"assets/assets/c1.jpg": "f0316bb1e02e96085c773e0201709e12",
"assets/assets/c2.jpg": "10d39caf47823cd82e782b4bfd3dd8e7",
"assets/assets/c3.jpg": "e8374cdfeb80bfebb4df2ac858994229",
"assets/assets/certificate.png": "e856e464c9b21ce1f718ce943f240ef0",
"assets/assets/dart.png": "21b21b7f0395b1d10844e2681860ef92",
"assets/assets/folder.png": "89b6193aeeb96cfeb70bf75c749fda31",
"assets/assets/gmail.png": "e819b6a8860c9f813501e9dff82a471e",
"assets/assets/instagram.png": "063798ac1a7204f7af92d7be023feca5",
"assets/assets/linkedin.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/assets/md.png": "3bc33366b62386192bd693b93d2a2bf6",
"assets/assets/p1.png": "5eb3984e43bbfa5d74cdbf4deb690bb3",
"assets/assets/p2.png": "f8dfd0361ce177d03e769c67752f6d4b",
"assets/assets/p3.png": "294bba14805acf555b3d22458913afcf",
"assets/assets/p4.png": "ac796da336f0e4723506a6ecc02e185e",
"assets/assets/p5.png": "f3dca4cc2d2e49926072e6207d1ba97f",
"assets/assets/projects.png": "050ff3b9b29545049d52b546c82450cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "f4340a7231e1955780b0353f26d24187",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "f11b67f90438bafbf3745552419ffa5a",
"icon.png": "979936532184000c745b18f0fd32eba5",
"icons/Icon-maskable-192.png": "17cfde674b4dffc80cd96d0670b3ec6e",
"icons/Icon-maskable-512.png": "17cfde674b4dffc80cd96d0670b3ec6e",
"icons/icon1.png": "76e05759e5d33ff6e75f19ac36f3e1ac",
"icons/icon2.png": "8ef0583c16706da432f0237a0bdf5d1e",
"icons25129502": "8ef0583c16706da432f0237a0bdf5d1e",
"iconsad50a6f4": "17cfde674b4dffc80cd96d0670b3ec6e",
"index.html": "4eecbabceeba88f652b93b28b3ee4bd6",
"/": "4eecbabceeba88f652b93b28b3ee4bd6",
"main.dart.js": "fbd936e35caf47b4e6fe0c8dbd7632c0",
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
