import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './controllers/news.controller'; // יבוא NewsController
import { UsersController } from './controllers/users.controller'; // יבוא UsersController
import { UsersService } from './users/users.service'; // יבוא UsersService

@Module({
    imports: [],
    controllers: [AppController, NewsController, UsersController], // הוסף את UsersController
    providers: [AppService, UsersService], // הוסף את UsersService
})
export class AppModule {}
