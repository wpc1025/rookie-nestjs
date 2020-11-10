import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolEntity } from './entity/school.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolEntity])],
  providers: [SchoolsService],
  controllers: [SchoolsController],
})
export class SchoolsModule {
}
