import { UsuarioFactory } from '../models/UsuarioFactory.js';
import { GerenciadorOS } from '../models/GerenciadorOS.js';

export class OrdemServicoController {
    constructor() {
        this.gerenciador = new GerenciadorOS();
    }

    criarNovoChamado(tipoUsuario, dadosUsuario, dadosOS) {
        console.log("[CONTROLLER] Evento submit capturado com sucesso.");
        
        // Aciona a UsuarioFactory para instanciar o cliente ou técnico
        const usuario = UsuarioFactory.criarUsuario(tipoUsuario, dadosUsuario);
        console.log(`[FACTORY] Criando '${tipoUsuario}' via formulário UI -> ID: ${usuario.id}.`);

        // Cria o objeto da Ordem de Serviço
        const novaOS = {
            id: dadosOS.id,
            responsavel: usuario.nome,
            tipo: usuario.tipo,
            status: 'ABERTA',
            descricao: dadosOS.descricao
        };

        // Salva no GerenciadorOS (Singleton)
        this.gerenciador.adicionarOS(novaOS);
        
        console.log("[VIEW] Tabela de OS atualizada dinamicamente com Flexbox/Grid.");
        return novaOS;
    }
}