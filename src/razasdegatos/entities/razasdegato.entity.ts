import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity('razasdegatos')
export class Razasdegato {
    @PrimaryGeneratedColumn()
      id: number;
    
      @Column()
      name: string;

      @DeleteDateColumn()
      deleteAt: Date;
    
}
