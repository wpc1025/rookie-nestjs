import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './schools/schools.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolEntity } from './schools/entity/school.entity';

@Module({
  imports: [SchoolsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'gkb',
      entities: [SchoolEntity],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
