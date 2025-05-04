import { Entity, Column, DeleteDateColumn } from 'typeorm';

@Entity('responsable')
export class Responsable {
      @Column({primary: true, generated: true})
      id: number;
    
      @Column()
      name: string;

      @DeleteDateColumn()
      deleteAt: Date;
    
}