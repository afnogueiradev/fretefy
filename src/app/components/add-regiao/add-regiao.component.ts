import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Regiao } from '../../../Regiao';

@Component({
  selector: 'app-add-regiao',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-regiao.component.html',
  styleUrl: './add-regiao.component.css'
})
export class AddRegiaoComponent {
  @Output() onAddRegiao = new EventEmitter<Regiao>();
  
  nome: string = '';
  cidade: string = '';
  ativa: boolean = false;
  showform: boolean = false;


  onSubmit(){
    console.log(this.nome, this.cidade);

    const newRegiao = {
      nome: this.nome,
      cidade: this.cidade,
      ativa: this.ativa
    }

    this.onAddRegiao.emit(newRegiao);

    this.nome = '';
    this.cidade = '';
    this.ativa = false;
  }

  showForm() {
    this.showform = !this.showform;
  }
}
