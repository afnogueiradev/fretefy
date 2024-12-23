import { Component, OnInit } from '@angular/core';
import { ListRegiaoService } from '../../services/list-regiao.service';
import { Regiao } from '../../../Regiao';
import { CommonModule } from '@angular/common';
import { RegiaoItemComponent } from "../regiao-item/regiao-item.component";
import { AddRegiaoComponent } from '../add-regiao/add-regiao.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-regioes',
  imports: [CommonModule, AddRegiaoComponent, FormsModule],
  templateUrl: './regioes.component.html',
  styleUrl: './regioes.component.css'
})
export class RegioesComponent implements OnInit{

  regioes: Regiao[] = [];

  nome: string = '';
  cidade: string = '';
  id?: number;

  constructor(private listService: ListRegiaoService){}

  ngOnInit(): void {
    this.listService.getRegioes().subscribe((dados) => {
      this.regioes = dados;
    })

  }

  AddRegiao(regiao: Regiao){
    this.listService.addRegiao(regiao).subscribe((regiao) => {
      this.regioes.push(regiao);
    })
  }

  onDelete(regiao: Regiao){
    this.listService.deleteRegiao(regiao).subscribe(() => (this.regioes = this.regioes.filter((r) => r.id !== regiao.id)));
  }

  onChange(regiao:Regiao){
    regiao.ativa = !regiao.ativa;
    this.listService.updateRegiao(regiao).subscribe();
  }

  selRegiao(regiao: Regiao) {

    console.log(regiao);
    this.nome = regiao.nome;
    this.cidade = regiao.cidade;
    this.id = regiao.id;

    console.log(this.nome);
  }

  onEdit(){
    
    console.log(this.id);
  }
}
