import { PersonagemService } from './personagem.service';
import { Controller, Get, Post, Body} from '@nestjs/common';

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
}
