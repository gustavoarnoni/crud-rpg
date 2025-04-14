import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemMagico } from './item-magico.schema';

@Injectable()
export class ItemMagicoService {
  constructor(
    @InjectModel('ItemMagico') private readonly itemMagicoModel: Model<ItemMagico>,
  ) {}

  async criarItemMagico(itemMagicoDto: any, personagemId: string): Promise<ItemMagico> {
    const { tipo, força, defesa } = itemMagicoDto;
  
    if (tipo === 'Arma' && defesa !== 0) {
      throw new Error('Armas devem ter defesa igual a 0');
    }
  
    if (tipo === 'Armadura' && força !== 0) {
      throw new Error('Armaduras devem ter força igual a 0');
    }
  
    if (tipo === 'Amuleto' && (força > 10 || defesa > 10)) {
      throw new Error('Amuletos não podem ter mais que 10 de força ou defesa');
    }
  
    if (tipo === 'Amuleto') {
      const amuletoExistente = await this.itemMagicoModel.findOne({ tipo: 'Amuleto', personagem: personagemId }).exec();
      if (amuletoExistente) {
        throw new Error('O personagem já possui um item mágico do tipo Amuleto');
      }
    }
  
    const itemMagico = new this.itemMagicoModel(itemMagicoDto);
    return itemMagico.save();
  }
  

  async listarItensMagicos(): Promise<ItemMagico[]> {
    return this.itemMagicoModel.find().exec();
  }

  async buscarItemMagicoPorId(id: string): Promise<ItemMagico | null> {
    return this.itemMagicoModel.findById(id).exec();
  }  

  async removerItemMagico(id: string): Promise<ItemMagico | null> {
    return this.itemMagicoModel.findByIdAndDelete(id).exec();
  }  
}
