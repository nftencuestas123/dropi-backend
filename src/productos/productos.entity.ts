import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  categoria: string;

  @Column({ default: 0 })
  cantidad: number;

  @Column({ nullable: true })
  imagen: string;

  @Column({ default: true })
  activo: boolean;
}
