import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private orgRepository: Repository<Organization>,
  ) {}

  findAll() {
    return this.orgRepository.find();
  }

  create(data: any) {
    const newOrg = this.orgRepository.create(data);
    return this.orgRepository.save(newOrg);
  }

  update(id: number, data: any) {
    return this.orgRepository.update(id, data);
  }

  remove(id: number) {
    return this.orgRepository.delete(id);
  }
}