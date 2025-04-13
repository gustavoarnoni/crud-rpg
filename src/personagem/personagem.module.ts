import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonagemSchema } from './personagem.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Personagem', schema: PersonagemSchema }]),
  ],
  providers: [PersonagemService],
  controllers: [PersonagemController],
})
export class PersonagemModule {}
