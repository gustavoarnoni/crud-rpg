import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoSchema } from './item-magico.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ItemMagico', schema: ItemMagicoSchema }]),
  ],
  controllers: [ItemMagicoController],
  providers: [ItemMagicoService],
})
export class ItemMagicoModule {}
