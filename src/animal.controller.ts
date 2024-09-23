import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';


@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  create(@Body() animal: Animal) {
    return this.animalService.create(animal);
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.animalService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() animal: Animal) {
    return this.animalService.update(id, animal);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.animalService.remove(id);
  }
}
