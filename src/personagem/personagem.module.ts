import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonagemController } from './personagem.controller';
import { PersonagemService } from './personagem.service';
import { PersonagemSchema } from './personagem.schema';
import { ItemMagicoModule } from '../item-magico/item-magico.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Personagem', schema: PersonagemSchema }]),
    ItemMagicoModule,
  ],
  controllers: [PersonagemController],
  providers: [PersonagemService],
})
export class PersonagemModule {}
