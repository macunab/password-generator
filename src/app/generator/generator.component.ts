import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styles: [
  ]
})
export class GeneratorComponent implements OnInit {

  password: string = 'Aca va el  password generado';
  caracteres: number = 10;
  selectedOptions: string[] = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  randomSelected: string = '';

  constructor( private messages: MessageService ) { }

  ngOnInit(): void {
    this.randomize();
  }

  // seleccion componentes de password
  onCheckboxSelect() {
    this.randomize();
  }

  // seleccion de tamanio de password
  onSlideChange(e: any) {
      this.caracteres = e.value;
      this.randomize();
  }

  // genero el password
  randomize() {

    let chara: string = '';
    this.password = '';

    if( this.selectedOptions.length ){
      chara = this.selectedOptions.toString().replace(/,/g,'');
    }

    for( let i = 0; i < this.caracteres; i++) {
      this.password += chara.charAt(Math.floor( Math.random() * chara.length));
    }
  }

  // copiar el password al clipboard
  // Clipboard is not supported by IE
  copyPassword() {

    this.messages.add({ severity: 'info', summary: 'Copied!', detail: 'El password se ha copiado exitosamente', life: 1000});
    if( navigator && navigator.clipboard ) {
      navigator.clipboard.writeText(this.password);
    }
  }

}
