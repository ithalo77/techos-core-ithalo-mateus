import { Cliente } from './Cliente.js';
import { Tecnico } from './Tecnico.js';

export class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        if (tipo === 'CLIENTE') {
            return new Cliente(dados.id, dados.nome, dados.email, dados.telefone);
        } else if (tipo === 'TECNICO') {
            return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
        }
        throw new Error('Tipo de utilizador inválido.');
    }
}