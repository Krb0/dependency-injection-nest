import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';
@Controller('computer')
export class ComputerController {
  constructor(private cpu: CpuService, private disk: DiskService) {}
  @Get()
  run() {
    return [this.cpu.compute(4, 4), this.disk.writeMemory()];
  }
}
