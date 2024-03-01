import { ApiProperty } from '@nestjs/swagger';

export class LocusMemberDto {
  @ApiProperty()
  id: bigint;

  @ApiProperty()
  locusId: number;

  @ApiProperty()
  ursTaxId: string;

  @ApiProperty()
  regionId: number;

  @ApiProperty()
  membershipStatus: string;
}
