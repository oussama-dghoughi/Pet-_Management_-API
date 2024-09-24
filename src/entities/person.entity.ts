import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Animal } from './animal.entity';

/**
 * Represents a person who can own animals.
 *
 * This entity contains the properties of a person along with a relationship
 * to the animals they own.
 */
@Entity()
export class Person {
  /**
   * Unique identifier for the person.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The last name of the person.
   */
  @Column()
  lastName: string;

  /**
   * The first name of the person.
   */
  @Column()
  firstName: string;

  /**
   * The email address of the person.
   */
  @Column()
  email: string;

  /**
   * The phone number of the person.
   */
  @Column()
  phoneNumber: string;

  /**
   * The list of animals owned by the person.
   *
   * This establishes a one-to-many relationship with the Animal entity.
   */
  @OneToMany(() => Animal, animal => animal.owner)
  animals: Animal[];
}
