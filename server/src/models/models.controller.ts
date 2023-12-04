import { Controller, 
  Get, 
  Param, 
  Query, 
  ParseUUIDPipe, 
  ParseIntPipe,
	HttpCode,
} from '@nestjs/common';
import { ModelsService } from './models.service';
import { Contact } from './entity/contact.entity';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @Get()
  findAll(@Query('limit') limit:string, @Query('offset') offset:string):Promise<Contact[]> {
    let limitNumber:number = 9;
    let offsetNumber:number = 0;
    
    if(limit !== undefined ) {
      limitNumber = parseInt(limit);
    }

    if(offset !== undefined) {
      offsetNumber = parseInt(offset);
    }

    return this.modelsService.findAll(limitNumber, offsetNumber);
  }

  @Get('count')
  count():Promise<number> {
    return this.modelsService.totalCount();
  }

  @Get('favorites')
	@HttpCode(200)
  findFavorites(@Query('ids')ids:string) {
    const arr = ids.split(',').map(item => parseInt(item));
    return this.modelsService.findFavorites(arr);
  }

  @Get(':uuid')
	@HttpCode(200)
  findOne(@Param('uuid', ParseUUIDPipe) uuid:string): Promise<Contact> {
    //console.log(uuid);
    return this.modelsService.findOne(uuid);
  }

  @Get('/gallery/:id')
  findGallery(@Param('id', ParseIntPipe) id:number) {
    //console.log(id);
    return this.modelsService.findGallery(id);
  }
}
