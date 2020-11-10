import { ApiProperty } from '@nestjs/swagger';

export class SchoolDto {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '地址' })
  address: string;

  @ApiProperty({ description: '描述' })
  description: string;
}
