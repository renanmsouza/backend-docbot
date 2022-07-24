import { Controller } from '@nestjs/common';
import { ContatoService } from './contato.service';

@Controller("contato")
export class ContatoController {
    constructor(
        private readonly contatoService: ContatoService
    ){}

    
 }
