import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

/**
 * Service for managing person entities.
 *
 * This service provides methods to perform CRUD operations on person data
 * using TypeORM's repository pattern.
 */
@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>, // Injects the repository for Person entity
  ) {}

  /**
   * Retrieves all person entities from the database.
   *
   * @returns {Promise<Person[]>} A promise that resolves to an array of Person entities.
   */
  async findAll(): Promise<Person[]> {
    const people = await this.personRepository.find(); // Fetches all people from the database
    console.log('Retrieved people:', people);
    return people; // Returns the array of people
  }

  /**
   * Retrieves a person entity by its ID.
   *
   * @param {number} id - The ID of the person to retrieve.
   * @returns {Promise<Person>} A promise that resolves to the found Person entity.
   */
  async findOne(id: number): Promise<Person> {
    return this.personRepository.findOneBy({ id }); // Finds a person by ID
  }

  /**
   * Creates a new person entity in the database.
   *
   * @param {Person} person - The person data to create.
   * @returns {Promise<Person>} A promise that resolves to the created Person entity.
   */
  async create(person: Person): Promise<Person> {
    const newPerson = this.personRepository.create(person); // Creates a new person instance
    return this.personRepository.save(newPerson); // Saves the new person to the database
  }

  /**
   * Updates an existing person entity by its ID.
   *
   * @param {number} id - The ID of the person to update.
   * @param {Partial<Person>} person - The person data to update.
   * @returns {Promise<Person>} A promise that resolves to the updated Person entity.
   */
  async update(id: number, person: Partial<Person>): Promise<Person> {
    await this.personRepository.update(id, person); // Updates the person in the database
    return this.findOne(id); // Retrieves the updated person
  }

  /**
   * Removes a person entity from the database by its ID.
   *
   * @param {number} id - The ID of the person to remove.
   * @returns {Promise<void>} A promise that resolves when the person is deleted.
   */
  async remove(id: number): Promise<void> {
    await this.personRepository.delete(id); // Deletes the person from the database
  }
}
