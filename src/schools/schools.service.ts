import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolEntity } from './entity/school.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SchoolsService {
  constructor(@InjectRepository(SchoolEntity) private readonly schoolRepository: Repository<SchoolEntity>) {

  }

  async pageGetSchoolList(pageNo: number, pageSize: number): Promise<SchoolEntity[]> {
    return await this.schoolRepository.find({ skip: pageNo, take: pageSize });
  }

  async getSchoolById(id: number): Promise<SchoolEntity> {
    return await this.schoolRepository.findOne(id);
  }

  async saveSchool(school: SchoolEntity): Promise<SchoolEntity> {
    return await this.schoolRepository.save(school);
  }

  async updateSchoolById(id: number, school: SchoolEntity): Promise<UpdateResult> {
    return await this.schoolRepository.update(id, school);
  }

  async deleteById(id: number): Promise<DeleteResult> {
    return await this.schoolRepository.delete(id);
  }
}
