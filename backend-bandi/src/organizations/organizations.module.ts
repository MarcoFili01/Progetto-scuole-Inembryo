import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { Organization } from './entities/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])], // <--- IMPORTANTE
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}