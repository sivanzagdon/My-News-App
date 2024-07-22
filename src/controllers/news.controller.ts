import { Controller, Get } from '@nestjs/common';

@Controller('news')
export class NewsController {
    @Get()
    findAll(): string {
        return 'Here are the latest news!';
    }
}
