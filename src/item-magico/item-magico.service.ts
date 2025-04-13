import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemMagico } from './item-magico.schema';

@Injectable()
export class ItemMagicoService {
  constructor(
    @InjectModel('ItemMagico') private readonly itemMagicoModel: Model<ItemMagico>,
  ) {}

  async criarItemMagico(itemMagicoDto: any): Promise<ItemMagico> {
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
