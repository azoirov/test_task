import { Controller, Get } from '@nestjs/common';

@Controller('locus')
export class LocusController {
  @Get()
  public async getLocus() {
    return 'ok';
  }
}
