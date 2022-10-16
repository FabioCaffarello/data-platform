window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"9e0dcc39e6383bfac52e81286267a88bd73f548bc861eebb0ec727e41f88fd83","projects":[{"name":"api-data-access-article","type":"lib","data":{"tags":[],"root":"libs/api/api/data-access-article","files":[{"file":"libs/api/api/data-access-article/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/api/api/data-access-article/.eslintrc.json","hash":"632e9b0e22253922989d1153e06f7ba996c72d38"},{"file":"libs/api/api/data-access-article/jest.config.js","hash":"bab5839ca9c4ffed86b2d2b3e14b280cec3a69e0"},{"file":"libs/api/api/data-access-article/README.md","hash":"752df7032587a6fa8a702a0bbacd0c39c2c6a60a"},{"file":"libs/api/api/data-access-article/src/index.ts","hash":"cb8ddac20c95a00f98f31649f436479c5bf0067c"},{"file":"libs/api/api/data-access-article/src/lib/api-data-access-article.module.ts","hash":"9ac2261b2516cf2257627b7dbfd1f3183ae4a434","deps":["npm:@nestjs/common","npm:@nestjs/mongoose"]},{"file":"libs/api/api/data-access-article/src/lib/article.model.ts","hash":"275047c3c2d3d293f8f73f863f42ae10da6915aa","deps":["npm:@nestjs/mongoose","npm:@nestjs/swagger","npm:mongoose"]},{"file":"libs/api/api/data-access-article/src/lib/article.service.ts","hash":"d339985b645bc65b31c6fd9eee21d29abdc18f99","deps":["npm:@nestjs/common","npm:@nestjs/mongoose","npm:mongoose","api-data-access-dtos"]},{"file":"libs/api/api/data-access-article/tsconfig.json","hash":"26b7b4afd192ea6de9e231782d05a8f03f80627b"},{"file":"libs/api/api/data-access-article/tsconfig.lib.json","hash":"e3364d0c42e6bf33fcf3d4376e13f1bf48545b0d"},{"file":"libs/api/api/data-access-article/tsconfig.spec.json","hash":"8119baebcd43425a4864ee524518032d2f4af20a"}]}},{"name":"article-data-access-api","type":"lib","data":{"tags":[],"root":"libs/api/article/data-access-api","files":[{"file":"libs/api/article/data-access-api/.eslintrc.json","hash":"3f93a0fe00483d48200a00ff04e3a3e3a5988e47"},{"file":"libs/api/article/data-access-api/jest.config.js","hash":"cb9631757ec619f15a8d6b24220a34d716052140"},{"file":"libs/api/article/data-access-api/README.md","hash":"50c4e89853f1c7fc2bbe840a50c016d5b3acb196"},{"file":"libs/api/article/data-access-api/src/index.ts","hash":"47945b57c4295a4dfa14b32178ee6ae22cf60dec"},{"file":"libs/api/article/data-access-api/src/lib/.gitignore","hash":"149b57654723c14590f35c6c0db8460f19173078"},{"file":"libs/api/article/data-access-api/src/lib/.openapi-generator-ignore","hash":"7484ee590a3894506cf063799b885428f95a71be"},{"file":"libs/api/article/data-access-api/src/lib/.openapi-generator/FILES","hash":"5b810d1da1c739d986418e26e3364de65f35fb22"},{"file":"libs/api/article/data-access-api/src/lib/.openapi-generator/VERSION","hash":"7cbea073bea1bea74c3cae546d6b685725d8afb5"},{"file":"libs/api/article/data-access-api/src/lib/api.module.ts","hash":"5d2e1c07ca4252d03dd998c0af7dad4828f5fa61","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"libs/api/article/data-access-api/src/lib/api/api.ts","hash":"e43c954edb5ad73a5475d8cff9ca2bf38004a7ec"},{"file":"libs/api/article/data-access-api/src/lib/api/articles.service.ts","hash":"b76e630302ea834d4ba7d7f3abc1075f8bc097a3","deps":["npm:@angular/core","npm:@angular/common","npm:rxjs"]},{"file":"libs/api/article/data-access-api/src/lib/configuration.ts","hash":"4ca3546927fa5cb8d4957daf597783b89239caeb","deps":["npm:@angular/common"]},{"file":"libs/api/article/data-access-api/src/lib/encoder.ts","hash":"138c4d5cf2c1e6f2517d7c38c0295dfd5425214c","deps":["npm:@angular/common"]},{"file":"libs/api/article/data-access-api/src/lib/git_push.sh","hash":"ced3be2b0c7b2349ff06d18da19d4b31435c9fa6"},{"file":"libs/api/article/data-access-api/src/lib/index.ts","hash":"c312b70fa3efccdb08c52608b493887052a18d30"},{"file":"libs/api/article/data-access-api/src/lib/model/article.ts","hash":"6c66730c38796d0ec4f3f72b99c2c4928caf7402"},{"file":"libs/api/article/data-access-api/src/lib/model/createArticleDto.ts","hash":"d4064877e0b410ae43396c966a659219d59992ed"},{"file":"libs/api/article/data-access-api/src/lib/model/models.ts","hash":"af5707085699de04d44ecfc68ec0c4cb66d60a8a"},{"file":"libs/api/article/data-access-api/src/lib/README.md","hash":"f16604dcfff1a161cc41ecea7c996856870199ab"},{"file":"libs/api/article/data-access-api/src/lib/variables.ts","hash":"6fe58549f395fc15d66a3b68f261d48c1af375ef","deps":["npm:@angular/core"]},{"file":"libs/api/article/data-access-api/src/test-setup.ts","hash":"1100b3e8a6ed08f4b5c27a96471846d57023c320","deps":["npm:jest-preset-angular"]},{"file":"libs/api/article/data-access-api/tsconfig.json","hash":"a35d17bb5ce406e2836bfffcf8faa207be41e0b4"},{"file":"libs/api/article/data-access-api/tsconfig.lib.json","hash":"35d48751e6bd9f81d5a9a64d6599e642ff0ae7cc"},{"file":"libs/api/article/data-access-api/tsconfig.spec.json","hash":"aed68bc6bf86609a7a4f0fdf5a562265cd90e452"}]}},{"name":"api-data-access-dtos","type":"lib","data":{"tags":[],"root":"libs/api/api/data-access-dtos","files":[{"file":"libs/api/api/data-access-dtos/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/api/api/data-access-dtos/.eslintrc.json","hash":"632e9b0e22253922989d1153e06f7ba996c72d38"},{"file":"libs/api/api/data-access-dtos/jest.config.js","hash":"620eea90b344400c8713d8d017ffb3680af6241c"},{"file":"libs/api/api/data-access-dtos/README.md","hash":"3fe7e0319d237695a6c1e3493edbb5380fcbb89b"},{"file":"libs/api/api/data-access-dtos/src/index.ts","hash":"8c478252559a7e4e79c5f64baf79b4382116ef69"},{"file":"libs/api/api/data-access-dtos/src/lib/article/create-article.dto.ts","hash":"d16fd99e6d6c04a4a5bfd6cd7005e9f5140d652a","deps":["npm:@nestjs/swagger"]},{"file":"libs/api/api/data-access-dtos/tsconfig.json","hash":"26b7b4afd192ea6de9e231782d05a8f03f80627b"},{"file":"libs/api/api/data-access-dtos/tsconfig.lib.json","hash":"e3364d0c42e6bf33fcf3d4376e13f1bf48545b0d"},{"file":"libs/api/api/data-access-dtos/tsconfig.spec.json","hash":"8119baebcd43425a4864ee524518032d2f4af20a"}]}},{"name":"api-feature-article","type":"lib","data":{"tags":[],"root":"libs/api/api/feature-article","files":[{"file":"libs/api/api/feature-article/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/api/api/feature-article/.eslintrc.json","hash":"632e9b0e22253922989d1153e06f7ba996c72d38"},{"file":"libs/api/api/feature-article/jest.config.js","hash":"2440f00f0bf279486299cb309394c7b837c568e5"},{"file":"libs/api/api/feature-article/README.md","hash":"3790a8882050f800c3c9087bf9a664999e865890"},{"file":"libs/api/api/feature-article/src/index.ts","hash":"cfbd89bd2b00f65cd9a9740c35c923249863ac97"},{"file":"libs/api/api/feature-article/src/lib/api-feature-article.module.ts","hash":"ec7470f60a8dd2b92d00047e705d993c2f5a3378","deps":["npm:@nestjs/common","api-data-access-article"]},{"file":"libs/api/api/feature-article/src/lib/article.controller.ts","hash":"bccdfe7c3189422d376bd94eea8c15b9feb7b117","deps":["npm:@nestjs/common","npm:@nestjs/swagger","api-data-access-article","api-data-access-dtos"]},{"file":"libs/api/api/feature-article/tsconfig.json","hash":"26b7b4afd192ea6de9e231782d05a8f03f80627b"},{"file":"libs/api/api/feature-article/tsconfig.lib.json","hash":"e3364d0c42e6bf33fcf3d4376e13f1bf48545b0d"},{"file":"libs/api/api/feature-article/tsconfig.spec.json","hash":"8119baebcd43425a4864ee524518032d2f4af20a"}]}},{"name":"api-feature-config","type":"lib","data":{"tags":[],"root":"libs/api/api/feature-config","files":[{"file":"libs/api/api/feature-config/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/api/api/feature-config/.eslintrc.json","hash":"632e9b0e22253922989d1153e06f7ba996c72d38"},{"file":"libs/api/api/feature-config/jest.config.js","hash":"243d2bd1f8a2aee2e65b5ee8ea6d5f452a069964"},{"file":"libs/api/api/feature-config/README.md","hash":"d6c72e383d695c114e5b7d4c5d75b27ca88ed7ac"},{"file":"libs/api/api/feature-config/src/index.ts","hash":"62d9258aa50cf88cf6cb420d5b7b7536262e5173"},{"file":"libs/api/api/feature-config/src/lib/api-feature-config.module.ts","hash":"79a05a7239686c05cfc3a078bc8d6b147a018ac8","deps":["npm:@nestjs/common","npm:@nestjs/config","api-utils-config"]},{"file":"libs/api/api/feature-config/tsconfig.json","hash":"26b7b4afd192ea6de9e231782d05a8f03f80627b"},{"file":"libs/api/api/feature-config/tsconfig.lib.json","hash":"e3364d0c42e6bf33fcf3d4376e13f1bf48545b0d"},{"file":"libs/api/api/feature-config/tsconfig.spec.json","hash":"8119baebcd43425a4864ee524518032d2f4af20a"}]}},{"name":"post-e2e","type":"e2e","data":{"tags":[],"root":"apps/services/api/post-e2e","files":[{"file":"apps/services/api/post-e2e/.eslintrc.json","hash":"ab750f9f0c8ce9c09e86ed2d59c9c8a6e9c5f40f"},{"file":"apps/services/api/post-e2e/cypress.json","hash":"3a09dc2d289a5215481fa84c74015bd3193c7091"},{"file":"apps/services/api/post-e2e/package.json","hash":"37b8fd21817a0032a2d09bfbf3e70b5d545452e0"},{"file":"apps/services/api/post-e2e/src/fixtures/example.json","hash":"294cbed6ce9e0b948b787452e8676aee486cb3be"},{"file":"apps/services/api/post-e2e/src/integration/app.spec.ts","hash":"f7220928df4853bd3211bf5a1ff8aa5500b17810"},{"file":"apps/services/api/post-e2e/src/support/app.po.ts","hash":"32934246969c2ecb827ac05677785933a707a54d"},{"file":"apps/services/api/post-e2e/src/support/commands.ts","hash":"310f1fa0e043ffebbbcf575c5a4d17f13a6b14d6"},{"file":"apps/services/api/post-e2e/src/support/index.ts","hash":"3d469a6b6cf31eb66117d73e278bcf74f398f1db"},{"file":"apps/services/api/post-e2e/tsconfig.json","hash":"59fca6901046f87fdf3083ba982b78a14b09d230"}]}},{"name":"api-utils-config","type":"lib","data":{"tags":[],"root":"libs/api/api/utils-config","files":[{"file":"libs/api/api/utils-config/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/api/api/utils-config/.eslintrc.json","hash":"632e9b0e22253922989d1153e06f7ba996c72d38"},{"file":"libs/api/api/utils-config/jest.config.js","hash":"24dce6b288ac3df806706c3cd7e402e0e6f08676"},{"file":"libs/api/api/utils-config/README.md","hash":"53e275b65af0e0abd4692f6682cc884cb564bbfa"},{"file":"libs/api/api/utils-config/src/index.ts","hash":"8f479bf984cca7cc0b827d257f5d392971a6ef1d"},{"file":"libs/api/api/utils-config/src/lib/app.configuration.ts","hash":"780c63465767d1ee33ca8b825fe13720d5bb90e6","deps":["npm:@nestjs/common","npm:@nestjs/config"]},{"file":"libs/api/api/utils-config/src/lib/mongo.configuration.ts","hash":"2a6f000c64a91002484030a7a72d76391735c0a9","deps":["npm:@nestjs/common","npm:@nestjs/config"]},{"file":"libs/api/api/utils-config/tsconfig.json","hash":"26b7b4afd192ea6de9e231782d05a8f03f80627b"},{"file":"libs/api/api/utils-config/tsconfig.lib.json","hash":"e3364d0c42e6bf33fcf3d4376e13f1bf48545b0d"},{"file":"libs/api/api/utils-config/tsconfig.spec.json","hash":"8119baebcd43425a4864ee524518032d2f4af20a"}]}},{"name":"post","type":"app","data":{"tags":[],"root":"apps/services/api/post","files":[{"file":"apps/services/api/post/.browserslistrc","hash":"427441dc9308514d0e294ed878a168972f3a4c46"},{"file":"apps/services/api/post/.eslintrc.json","hash":"3f93a0fe00483d48200a00ff04e3a3e3a5988e47"},{"file":"apps/services/api/post/jest.config.js","hash":"6857e77bd099356164d98f7affce5e5ab69db114"},{"file":"apps/services/api/post/proxy.conf.json","hash":"62a1e7b762cec5ece007e8e21daaf5eb141e0e7b"},{"file":"apps/services/api/post/src/app/app.component.css","hash":"cf89c35ba7be8e98e2a44dcb41e5e9c72171dd29"},{"file":"apps/services/api/post/src/app/app.component.html","hash":"b3a2c5efcc02c0e1a9560ee45117fe6a77257a44"},{"file":"apps/services/api/post/src/app/app.component.spec.ts","hash":"5729e412c613d8a8ccb0e9166e83d06f8387b73d","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"apps/services/api/post/src/app/app.component.ts","hash":"7fc5d7719c4f4f298096d5a5fd29489dbd94d0bf","deps":["npm:@angular/core","npm:@angular/common","article-data-access-api"]},{"file":"apps/services/api/post/src/app/app.module.ts","hash":"22671a93a1c765c8a553082719ca02c840bcf61d","deps":["npm:@angular/core","npm:@angular/platform-browser","npm:@angular/common"]},{"file":"apps/services/api/post/src/assets/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/services/api/post/src/environments/environment.prod.ts","hash":"c9669790be176ac85a5d8c11278875c2f52dc507"},{"file":"apps/services/api/post/src/environments/environment.ts","hash":"66998ae9a7c27359bc473c6d2aa0029dd1f4b700"},{"file":"apps/services/api/post/src/favicon.ico","hash":"317ebcb2336e0833a22dddf0ab287849f26fda57"},{"file":"apps/services/api/post/src/index.html","hash":"64e03cb2da83e9bd890a73bab083799e744b0fee"},{"file":"apps/services/api/post/src/main.ts","hash":"d9a2e7e4a582e265db779363bd8b2492c43c141b","deps":["npm:@angular/core","npm:@angular/platform-browser-dynamic"]},{"file":"apps/services/api/post/src/polyfills.ts","hash":"8a120c374d71744b0f7aff25423d42f4d687509b","deps":["npm:zone.js"]},{"file":"apps/services/api/post/src/styles.css","hash":"90d4ee0072ce3fc41812f8af910219f9eea3c3de"},{"file":"apps/services/api/post/src/test-setup.ts","hash":"1100b3e8a6ed08f4b5c27a96471846d57023c320","deps":["npm:jest-preset-angular"]},{"file":"apps/services/api/post/tsconfig.app.json","hash":"23b19355c4012f34e0be14f0173fdc7a36164830"},{"file":"apps/services/api/post/tsconfig.editor.json","hash":"20c4afdbf437457984afcb236d4b5e588aec858a"},{"file":"apps/services/api/post/tsconfig.json","hash":"e7e26df226b3261a5817aad0cbc417fb24446cb5"},{"file":"apps/services/api/post/tsconfig.spec.json","hash":"aed68bc6bf86609a7a4f0fdf5a562265cd90e452"}]}},{"name":"api","type":"app","data":{"tags":[],"root":"apps/services/api/api","files":[{"file":"apps/services/api/api/.eslintrc.json","hash":"632e9b0e22253922989d1153e06f7ba996c72d38"},{"file":"apps/services/api/api/jest.config.js","hash":"9b000b1978653dffbb151aa0144ef2b7b7d5008f"},{"file":"apps/services/api/api/src/app/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/services/api/api/src/app/app.controller.spec.ts","hash":"b991ea7f5b756d6dfb0cac8bbe18eaa966877ec0","deps":["npm:@nestjs/testing"]},{"file":"apps/services/api/api/src/app/app.module.ts","hash":"bea2d6a58b1ece206d70276762c3b764f0590ba7","deps":["npm:@nestjs/common","npm:@nestjs/mongoose","api-feature-config","api-feature-article","api-utils-config"]},{"file":"apps/services/api/api/src/assets/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/services/api/api/src/environments/environment.prod.ts","hash":"c9669790be176ac85a5d8c11278875c2f52dc507"},{"file":"apps/services/api/api/src/environments/environment.ts","hash":"a20cfe55731540eac839ab33f9ce1eaa6da50b16"},{"file":"apps/services/api/api/src/main.ts","hash":"69a1500c6e27d527a1ac3b46971972c1723e3085","deps":["npm:@nestjs/common","npm:@nestjs/core","npm:@nestjs/swagger","api-utils-config"]},{"file":"apps/services/api/api/tsconfig.app.json","hash":"982f9898fbdc961bcee4e7e73e9396498f067ea1"},{"file":"apps/services/api/api/tsconfig.json","hash":"e7463639c11df4c81e917cac4259b9322443d91c"},{"file":"apps/services/api/api/tsconfig.spec.json","hash":"26b4610ae13ca5b9ad99048adc8b701d402e731b"}]}}],"dependencies":{"api-data-access-article":[{"source":"api-data-access-article","target":"api-data-access-dtos","type":"static"}],"article-data-access-api":[],"api-data-access-dtos":[],"api-feature-article":[{"source":"api-feature-article","target":"api-data-access-article","type":"static"},{"source":"api-feature-article","target":"api-data-access-dtos","type":"static"}],"api-feature-config":[{"source":"api-feature-config","target":"api-utils-config","type":"static"}],"post-e2e":[],"api-utils-config":[],"post":[{"source":"post","target":"article-data-access-api","type":"static"}],"api":[{"source":"api","target":"api-feature-config","type":"static"},{"source":"api","target":"api-feature-article","type":"static"},{"source":"api","target":"api-utils-config","type":"static"}]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};