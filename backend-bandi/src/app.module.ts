import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // o il tuo utente
      password: 'password',
      database: 'inembryo_db',
      autoLoadEntities: true,
      synchronize: true, // Crea automaticamente le tabelle nel DB
    }),
    OrganizationsModule,
  ],
})
export class AppModule {}