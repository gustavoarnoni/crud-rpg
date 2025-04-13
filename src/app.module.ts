import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonagemModule } from './personagem/personagem.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://gustavoarnoni4:batata123@crud-rpg.4wvab35.mongodb.net/crud-rpg?retryWrites=true&w=majority&ssl=true'),
    PersonagemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
