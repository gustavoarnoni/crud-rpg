import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Personagem } from './personagem.schema';
import { CreatePersonagemDto } from './create-personagem.dto';

@Injectable()
export class PersonagemService {
  constructor(
    @InjectModel('Personagem') private readonly personagemModel: Model<Personagem>,
  ) {}

  async criarPersonagem(createPersonagemDto: CreatePersonagemDto): Promise<Personagem> {
    const personagem = new this.personagemModel(createPersonagemDto);
    return personagem.save();
  }

  async listarPersonagens(): Promise<Personagem[]> {
    return this.personagemModel.find().exec();
  }

  async buscarPersonagemPorId(id: string): Promise<Personagem | null> {
    return this.personagemModel.findById(id).exec();
  }

  async atualizarNomeAventureiro(id: string, nomeAventureiro: string): Promise<Personagem | null> {
    return this.personagemModel.findByIdAndUpdate(id, { nomeAventureiro }, { new: true }).exec();
  }

  async removerPersonagem(id: string): Promise<Personagem | null> {
    return this.personagemModel.findByIdAndDelete(id).exec();
  }
}
