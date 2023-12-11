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
        to: "diamond-dating@yandex.ru",
				from: 'mihhha985@yandex.ru', 
        subject: "Новое обращение",
        text: `Имя: ${dto.name},\n Email: ${dto.email},\n Возраст: ${dto.text}`, 
      })
		}catch(err) {
			console.log(err);
		}
	}

	async sendAnketa(dto:SendAnketaDto) {
		try{
			return await this.mailerService.sendMail({
        to: "diamond-dating@yandex.ru",
				from: 'mihhha985@yandex.ru', 
        subject: "Новая анкета",
        text: `Имя: ${dto.name},\n Телефон: ${dto.tell},\n Возраст: ${dto.age}`,
      });
		}catch(err) {
			console.log(err);
		}
	}
}
