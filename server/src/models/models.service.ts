import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entity/contact.entity';
import { resolve } from 'path';
import { existsSync, readdirSync } from 'fs';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async findAll(offset:number): Promise<Contact[]> {
		try{
			return await this.contactRepository.find({
				where: { isActive: 1 },
				order: {
					rating:"DESC"
				},
				take: 9,
				skip: offset,
				relations: ['description'],
			});
		}catch(err) {
			console.log(err);
		}
  }

  async findFavorites(ids:number[]): Promise<Contact[]> {
		try{
			
			return await this.contactRepository
			.createQueryBuilder("contact")
			.leftJoinAndSelect("contact.description", "description")
			//.where("contact.id = :id", { id: 1 })
			.whereInIds(ids)
			.getMany();
			//console.log(data);
    }catch(err) {
      console.log(err);
    }
  }

  async totalCount(): Promise<number> {
		try{
			const result =  await this.contactRepository.findAndCount({
				where: { isActive: 1 }
			});

			return result[1];
		}catch(err) {	
			console.log(err);
		}
  }

  async findOne(uuid:string): Promise<Contact> {
		try{
			return await this.contactRepository.findOne({
				where: { uuid: uuid },
				relations: ['description']
			});
		}catch(err) {
			console.log(err);
		}
  }

  async findGallery(id:number): Promise<any> {
		try{
			const foto:string[] = [];
			const th:string[] = [];
			const pathFoto = resolve(__dirname, '..', '..', '..', 'upload', `${id}`, 'foto');
			const pathTh = resolve(pathFoto, 'th'); 

			if (existsSync(pathFoto)) {
				const files = readdirSync(pathFoto);
				files.forEach(element => {
					if(element !== 'th') {
						foto.push(element);
					}
				});
			}

			if(existsSync(pathTh)) {
				const files = readdirSync(pathTh);
				files.forEach(element => {
					th.push(element);
				});
			}

			return { foto, th };
		}catch(err) {
			console.log(err);
		}
  }
}
