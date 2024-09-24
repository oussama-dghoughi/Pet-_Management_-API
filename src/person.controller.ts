import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';

/**
 * Controller for managing person entities.
 *
 * This controller defines the routes and methods for handling HTTP requests
 * related to person data, such as retrieving, creating, updating, and deleting
 * person entities.
 */
@Controller('people')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  /**
   * Retrieve all persons.
   *
   * @returns {Promise<Person[]>} A promise that resolves to an array of Person entities.
   */
  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  /**
   * Retrieve a person by ID.
   *
   * @param {number} id - The ID of the person to retrieve.
   * @returns {Promise<Person>} A promise that resolves to the Person entity.
   */
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Person> {
    return this.personService.findOne(id);
  }

  /**
   * Create a new person.
   *
   * @param {Person} person - The person data to create.
   * @returns {Promise<Person>} A promise that resolves to the created Person entity.
   */
  @Post()
  async create(@Body() person: Person): Promise<Person> {
    return this.personService.create(person);
  }

  /**
   * Update an existing person by ID.
   *
   * @param {number} id - The ID of the person to update.
   * @param {Partial<Person>} person - The updated person data.
   * @returns {Promise<Person>} A promise that resolves to the updated Person entity.
   */
  @Put(':id')
  async update(@Param('id') id: number, @Body() person: Partial<Person>): Promise<Person> {
    return this.personService.update(id, person);
  }

  /**
   * Remove a person by ID.
   *
   * @param {number} id - The ID of the person to remove.
   * @returns {Promise<void>} A promise that resolves when the person is removed.
   */
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.personService.remove(id);
  }
}
