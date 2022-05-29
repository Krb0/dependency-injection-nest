import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  writeMemory() {
    this.powerService.supplyPower(200);
    return 'memory wrote';
  }
}
