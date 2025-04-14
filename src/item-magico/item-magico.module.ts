import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoSchema } from './item-magico.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ItemMagico', schema: ItemMagicoSchema }])],
  providers: [ItemMagicoService],
  controllers: [ItemMagicoController],
  exports: [ItemMagicoService],
})
export class ItemMagicoModule {}
