import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

/**
 * Module for managing person entities.
 *
 * This module encapsulates the person-related functionality, including
 * the service and controller for handling person data.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Person])], // Imports the TypeORM module for the Person entity
  providers: [PersonService], // Provides the PersonService
  controllers: [PersonController], // Registers the PersonController
})
export class PersonModule {}
