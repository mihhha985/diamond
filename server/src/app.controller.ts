import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import {SendMailDto, SendAnketaDto} from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return "Hello World!";
	}

	@Post('/mailer')
	@HttpCode(200)
	async sendMail(@Body() dto: SendMailDto) {
		console.log(dto);
		return await this.appService.sendMail(dto);
	}

	@Post('/send/anketa')
	@HttpCode(200)
	async sendAnketa(@Body() dto: SendAnketaDto) {
		console.log(dto);
		return await this.appService.sendAnketa(dto);
	}
}
