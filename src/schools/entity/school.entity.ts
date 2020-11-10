import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 't_schools' })
export class SchoolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  description: string;
}
