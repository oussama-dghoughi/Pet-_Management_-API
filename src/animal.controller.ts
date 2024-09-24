import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';

/**
 * Controller for handling HTTP requests related to animals.
 *
 * This controller provides endpoints to create, retrieve, update, and delete animal entities.
 */
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  /**
   * Create a new animal.
   *
   * @param {Animal} animal - The animal entity to be created.
   * @returns {Promise<Animal>} The created animal.
   */
  @Post()
  create(@Body() animal: Animal) {
    return this.animalService.create(animal);
  }

  /**
   * Retrieve all animals.
   *
   * @returns {Promise<Animal[]>} A list of all animals.
   */
  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  /**
   * Retrieve a specific animal by ID.
   *
   * @param {number} id - The ID of the animal to retrieve.

