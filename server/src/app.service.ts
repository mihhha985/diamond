import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import {SendMailDto, SendAnketaDto} from './app.dto';

@Injectable()
export class AppService {

	constructor(
		private readonly mailerService: MailerService
	) {}
  

	async sendMail(dto:SendMailDto) {
		try{
			return await this.mailerService.sendMail({
        to: dto.email,
				from: 'mihhha985@yandex.ru', 
        subject: dto.name,
        text: dto.text, 
      })
		}catch(err) {
			console.log(err);
		}
	}

	async sendAnketa(dto:SendAnketaDto) {
		try{
			return await this.mailerService.sendMail({
        to: "biketoff.m@yandex.ru",
				from: 'mihhha985@yandex.ru', 
        subject: "Новая анкета",
        text: `Имя: ${dto.name},\n Телефон: ${dto.tell},\n Возраст: ${dto.age}`,
      });
		}catch(err) {
			console.log(err);
		}
	}
}
