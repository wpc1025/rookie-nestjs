import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SchoolDto } from './dto/school.dto';
import { SchoolEntity } from './entity/school.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@ApiTags('schools 学校信息管理相关接口')
@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {

  }

  @Post()
  @ApiOperation({ summary: '添加学校信息' })
  addSchool(@Body()school: SchoolDto): Promise<SchoolEntity> {
    let schoolEntity: SchoolEntity = { ...school };
    return this.schoolsService.saveSchool(schoolEntity);
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id获取某个学校信息' })
  getSchoolById(@Param('id')id: number): Promise<SchoolEntity> {
    return this.schoolsService.getSchoolById(id);
  }

  @Get()
  @ApiOperation({ summary: '分页获取学校列表' })
  getSchoolList(@Query('pageNo')pageNo: number, @Query('pageSize')pageSize: number): Promise<SchoolEntity[]> {
    return this.schoolsService.pageGetSchoolList(pageNo, pageSize);
  }

  @Put(':id')
  @ApiOperation({ summary: '根据id更新某个学校信息' })
  updateSchoolById(@Param('id')id: number, @Body() school: SchoolDto): Promise<UpdateResult> {
    let schoolEntity: SchoolEntity = { ...school };
    return this.schoolsService.updateSchoolById(id, schoolEntity);
  }

  @Delete(':id')
  @ApiOperation({ summary: '根据id删除某个学校' })
  deleteSchoolById(@Param('id')id: number): Promise<DeleteResult> {
    return this.schoolsService.deleteById(id);
  }
}
