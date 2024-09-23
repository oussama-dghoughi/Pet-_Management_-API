import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';

@Controller('people')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Person> {
    return this.personService.findOne(id);
  }

  @Post()
  async create(@Body() person: Person): Promise<Person> {
    return this.personService.create(person);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() person: Partial<Person>): Promise<Person> {
    return this.personService.update(id, person);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.personService.remove(id);
  }
}
