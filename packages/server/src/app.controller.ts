import { Controller, Get, Logger, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getAppName(): string {
    return 'dwapi Globe build v02MAR201238';
  }
  @Get('globe')
  getLib(@Res() res): string {
    Logger.log(__dirname + '/wwwroot/globe.js');
    return res.sendFile(__dirname + '/wwwroot/globe.js');
  }
}
