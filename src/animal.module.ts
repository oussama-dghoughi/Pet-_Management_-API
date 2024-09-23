import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  providers: [AnimalService],
  controllers: [AnimalController],
})
export class AnimalModule {}
