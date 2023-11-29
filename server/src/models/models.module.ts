import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { Contact } from './entity/contact.entity';
import { Description } from './entity/description.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, Description])],
  controllers: [ModelsController],
  providers: [ModelsService],
})
export class ModelsModule {}
