import { Module } from '@nestjs/common';
import { LocusController } from './locus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locus } from './locus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Locus])],
  controllers: [LocusController],
})
export class LocusModule {}
