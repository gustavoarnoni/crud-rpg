import { Schema, Document } from 'mongoose';

export const PersonagemSchema = new Schema({
  nome: { type: String, required: true },
  nomeAventureiro: { type: String, required: true },
  classe: { type: String, enum: ['Guerreiro', 'Mago', 'Arqueiro', 'Ladino', 'Bardo'], required: true },
  level: { type: Number, required: true },
  força: { type: Number, required: true },
  defesa: { type: Number, required: true },
  itensMagicos: [{ type: Schema.Types.ObjectId, ref: 'ItemMagico' }],
});

export interface Personagem extends Document {
  id: string;
  nome: string;
  nomeAventureiro: string;
  classe: string;
  level: number;
  força: number;
  defesa: number;
  itensMagicos: string[];
}