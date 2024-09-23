import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async findOne(id: number): Promise<Person> {
    return this.personRepository.findOneBy({ id });
  }

  async create(person: Person): Promise<Person> {
    return this.personRepository.save(person);
  }

  async update(id: number, person: Partial<Person>): Promise<Person> {
    await this.personRepository.update(id, person);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.personRepository.delete(id);
  }
}
