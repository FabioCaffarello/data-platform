import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiFeatureConfigModule } from '@data-platform/api/feature-config';
import { ApiFeatureArticleModule } from '@data-platform/api/feature-article';
import {
  MongoConfiguration,
  mongoConfiguration,
} from '@data-platform/api/utils-config';

@Module({
  imports: [
    ApiFeatureConfigModule,
    ApiFeatureArticleModule,
    MongooseModule.forRootAsync({
      inject: [mongoConfiguration.KEY],
      useFactory: (config: MongoConfiguration) => {
        return {
          uri: config.uri,
          dbName: config.dbName,
        };
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}
