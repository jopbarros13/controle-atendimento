import { Injectable } from '@angular/core';
import { TipoSenha } from './tipo.senhas';
@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public senhas: Map<number, TipoSenha>[] = []
  
  constructor() { }
    somaGeral() {this.senhasGeral++; this.senhasTotal++;
      const mapaGeral: Map<number, TipoSenha>= new Map();
      mapaGeral.set(this.senhasGeral, TipoSenha.GERAL);
      this.senhas.push(mapaGeral);
     }
    somaPrior() {this.senhasPrior++; this.senhasTotal++;
      const mapaPrior: Map<number, TipoSenha>= new Map();
      mapaPrior.set(this.senhasPrior, TipoSenha.PRIORITARIO);
      this.senhas.push(mapaPrior);
    }
    somaExame() {this.senhasExame++; this.senhasTotal++;
      const mapaExame: Map<number, TipoSenha>= new Map();
      mapaExame.set(this.senhasExame, TipoSenha.EXAME);
      this.senhas.push(mapaExame)
    }
    proximoCliente() {
      const ultimaSenhaChamada = this.senhas[this.senhas.length -1];
      var retorno = "0";
      if(!ultimaSenhaChamada) return retorno;
      ultimaSenhaChamada.forEach((tipoSenha, numeroSenha) => { 
        switch(tipoSenha) {
          case TipoSenha.GERAL:
            retorno = `G${numeroSenha}`;
            break;
          case TipoSenha.PRIORITARIO:
            retorno = `P${numeroSenha}`;
            break;
          case TipoSenha.EXAME:
            retorno = `E${numeroSenha}`;
            break;
        }
        //console.log(`Número da senha: ${numeroSenha}, Tipo de Senha: ${tipoSenha}`);
      });
      return retorno;
     }

}
