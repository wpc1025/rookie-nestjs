import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './schools/schools.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolEntity } from './schools/entity/school.entity';
import { WinstonModule } from 'nest-winston'
import config from './config/main.config'

@Module({
  imports: [
    WinstonModule.forRoot(config.winston),
    SchoolsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '7uji9olp-',
      database: 'gkb',
      entities: [SchoolEntity],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
