import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clientes_crm')
export class ClienteCrm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  empresa: string;

  @Column({ type: 'jsonb', nullable: true })
  datos_extra: any;
}
