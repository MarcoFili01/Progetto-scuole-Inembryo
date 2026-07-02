import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome_istituzione!: string;

  @Column()
  provincia!: string;

  @Column({ nullable: true })
  tipo?: string; // Mappa la colonna "tipo" del tuo Excel

  // Imposto le restanti come opzionali (nullable), 
  // perché non tutte le scuole avranno tutti questi dati
  @Column({ nullable: true })
  email_istituzionale?: string;

  @Column({ nullable: true })
  pec?: string;

  @Column({ nullable: true })
  sito_web?: string;

  @Column({ nullable: true })
  linkedin?: string;

  @Column({ nullable: true })
  social?: string;

  @Column({ nullable: true })
  numero_telefono?: string;
}