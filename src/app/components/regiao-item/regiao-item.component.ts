import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Regiao } from '../../../Regiao';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regiao-item',
  imports: [CommonModule],
  templateUrl: './regiao-item.component.html',
  styleUrl: './regiao-item.component.css'
})
export class RegiaoItemComponent {
  @Input() regiao!: Regiao;
  @Output() onDeleteR = new EventEmitter<Regiao>();;


  onDelete(regiao: Regiao) {
    // this.onDeleteR.emit(regiao);
    console.log('fdsf');
    console.log(regiao);
  }
}
