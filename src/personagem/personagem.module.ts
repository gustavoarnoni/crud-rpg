import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';

@Module({
  providers: [PersonagemService],
  controllers: [PersonagemController]
})
export class PersonagemModule {}
