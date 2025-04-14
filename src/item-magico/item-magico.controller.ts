import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';

@Controller('item-magico')
export class ItemMagicoController {
  constructor(private readonly itemMagicoService: ItemMagicoService) {}

  @Post()
  async criar(@Body() itemMagicoDto: any, @Body('personagemId') personagemId: string) {
    return this.itemMagicoService.criarItemMagico(itemMagicoDto, personagemId);
  }

  @Get()
  async listar() {
    return this.itemMagicoService.listarItensMagicos();
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string) {
    return this.itemMagicoService.buscarItemMagicoPorId(id);
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    return this.itemMagicoService.removerItemMagico(id);
  }
}
