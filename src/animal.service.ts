import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';

/**
 * Service for managing animal entities.
 *
 * This service provides methods to perform CRUD operations on animal data,
 * including creating, retrieving, updating, and deleting animal entities.
 */
@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  /**
   * Create a new animal.
   *
   * @param {Animal} animal - The animal data to create.
   * @returns {Promise<Animal>} A promise that resolves to the created Animal entity.
   */
  create(animal: Animal): Promise<Animal> {
    return this.animalRepository.save(animal);
  }

  /**
   * Retrieve all animals.
   *
   * @returns {Promise<Animal[]>} A promise that resolves to an array of Animal entities.
   */
  findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  /**
   * Retrieve an animal by ID.
   *
   * @param {number} id - The ID of the animal to retrieve.
   * @returns {Promise<Animal>} A promise that resolves to the Animal entity.
   */
  findOne(id: number): Promise<Animal> {
    return this.animalRepository.findOne({ where: { id } });
  }

  /**
   * Update an existing animal by ID.
   *
   * @param {number} id - The ID of the animal to update.
   *
