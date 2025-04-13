import { PersonagemService } from './personagem.service';
import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { CreatePersonagemDto } from './create-personagem.dto';

@Controller('personagem')
export class PersonagemController {
    constructor(private readonly personagemService: PersonagemService) {}

    @Post()
    async criar(@Body() createPersonagemDto: any){
        return this.personagemService.criarPersonagem(createPersonagemDto);
    }

    @Get()
    async listar() {
        return this.personagemService.listarPersonagens();
    }

    @Get(':id')
    async buscarPorId(@Param('id') id: string) {
        return this.personagemService.buscarPersonagemPorId(id);
    }

    @Put(':id')
    async atualizarNomeAventureiro(
      @Param('id') id: string,
      @Body() nomeAventureiro: { nomeAventureiro: string },
    ) {
      return this.personagemService.atualizarNomeAventureiro(id, nomeAventureiro.nomeAventureiro);
    }
    
  
    @Delete(':id')
    async removerPersonagem(@Param('id') id: string) {
      return this.personagemService.removerPersonagem(id);
    }
  }
