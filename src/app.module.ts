import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person.module'; // Assure-toi du bon chemin
import { Person } from './entities/person.entity';
import { Animal } from './entities/animal.entity';
import { AnimalModule } from './animal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // ton nom d'utilisateur MySQL
      password: 'root', // ton mot de passe MySQL
      database: 'Data_management', // le nom de ta base de données
      entities: [Person, Animal],
      synchronize: true, // ne pas utiliser en production
    }),
    PersonModule,
    AnimalModule,
  ],
})
export class AppModule {}
