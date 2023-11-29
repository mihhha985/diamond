import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn, 
} from 'typeorm';
import { Description } from './description.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;
  
  @Column()
  firstName: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  about: string;

  @Column({type: 'float'})
  rating: number;

  @Column({ default: 1})
  isActive: number;

  @OneToOne(() => Description)
  @JoinColumn()
  description: Description;
}