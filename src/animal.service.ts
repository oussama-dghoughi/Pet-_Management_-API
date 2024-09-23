import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  create(animal: Animal): Promise<Animal> {
    return this.animalRepository.save(animal);
  }

  findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  findOne(id: number): Promise<Animal> {
    return this.animalRepository.findOne({ where: { id } });
  }

  async update(id: number, animal: Animal): Promise<Animal> {
    await this.animalRepository.update(id, animal);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.animalRepository.delete(id);
  }
}
