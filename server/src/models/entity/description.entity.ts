import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  OneToOne
} from 'typeorm';

@Entity()
export class Description {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  cupSize: number;

  @Column()
  hairColor: number;

  @Column()
  typeFigure: number;
}