import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from './person.entity';

/**
 * Represents an animal owned by a person.
 *
 * This entity contains the properties of an animal along with a relationship
 * to the person who owns it.
 */
@Entity()
export class Animal {
  /**
   * Unique identifier for the animal.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the animal.
   */
  @Column()
  name: string;

  /**
   * The date of birth of the animal.
   *
   * This field is nullable, meaning it can be left empty.
   */
  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  /**
   * The species of the animal (e.g., dog, cat).
   */
  @Column()
  species: string;

  /**
   * The breed of the animal.
   */
  @Column()
  breed: string;

  /**
   * The color of the animal.
   */
  @Column()
  color: string;

  /**
   * The weight of the animal in grams.
   */
  @Column()
  weight: number;

  /**
   * The owner of the animal.
   *
   * This establishes a many-to-one relationship with the Person entity.
   */
  @ManyToOne(() => Person, person => person.animals)
  owner: Person;
}
