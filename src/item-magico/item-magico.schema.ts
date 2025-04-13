import { Schema, Document } from 'mongoose';

export const ItemMagicoSchema = new Schema({
  nome: { type: String, required: true },
  tipo: { type: String, enum: ['Arma', 'Armadura', 'Amuleto'], required: true },
  força: { type: Number, required: true, min: 0, max: 10 },
  defesa: { type: Number, required: true, min: 0, max: 10 },
});

export interface ItemMagico extends Document {
  id: string;
  nome: string;
  tipo: string;
  força: number;
  defesa: number;
}
