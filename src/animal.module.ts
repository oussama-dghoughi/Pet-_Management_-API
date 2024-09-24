import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';

/**
 * Module for managing animals.
 *
 * This module encapsulates the functionality for handling animal entities,
 * including the service for business logic and the controller for handling
 * HTTP requests.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Animal])], // Import the TypeORM module for the Animal entity
  providers: [AnimalService], // Provide the AnimalService to be injected
  controllers: [AnimalController], // Register the AnimalController to handle requests
})
export class AnimalModule {}
