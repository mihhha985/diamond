import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entity/contact.entity';
import { In } from "typeorm";
import dataSource from 'db/orm.config';
import { resolve } from 'path';
import { existsSync, readdirSync } from 'fs';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>
  ) {}

  async findAll(limit:number, offset:number): Promise<Contact[]> {
    return await this.contactRepository.find({
      where: { isActive: 1 },
      take: limit,
      skip: offset,
      relations: ['description'],
    });
  }

  async findFavorites(ids:number[]): Promise<Contact[] | void> {
    try{
      return await this.contactRepository.findBy({
        id: In(ids),
      })
    }catch(err) {
      console.log(err);
    }
  }

  async totalCount(): Promise<number> {
    const result =  await this.contactRepository.findAndCount({
      where: { isActive: 1 }
    });

    return result[1];
  }

  async findOne(uuid:string): Promise<Contact> {
    return await this.contactRepository.findOne({
      where: { uuid: uuid },
      relations: ['description']
    });
  }

  async findGallery(id:number): Promise<any> {
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
  }
}
