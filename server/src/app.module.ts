import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsModule } from './models/models.module';
import { dataSourceOptions } from '../db/orm.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MailerModule } from '@nestjs-modules/mailer';
import { resolve } from 'path';

@Module({
  imports: [
		MailerModule.forRoot({
			transport: {
				host: 'smtp.yandex.ru',
				port: 465,
				secure: true,
				auth: {
					user: 'mihhha985',
					pass: 'pzqhrqrnrlozuwpc',
				},
			},
		}),
    ServeStaticModule.forRoot({
			rootPath: resolve(__dirname, '..', '..', 'upload') 
		}),
    TypeOrmModule.forRoot(dataSourceOptions),
    ModelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
