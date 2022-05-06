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
  caracteres: number = 20;
  selectedOptions: string[] = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  randomSelected: string = '';
  passwordStrong: number = 100;

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
      switch(true) {
        case this.caracteres < 20 && this.caracteres > 15:
          this.passwordStrong = 75;
          break;
        case this.caracteres < 16 && this.caracteres > 10:
          this.passwordStrong = 50;
          break;
        case this.caracteres < 11 && this.caracteres > 5 :
          this.passwordStrong = 25;
          break;
        case this.caracteres < 5:
          this.passwordStrong = 0;
          break;  
        case this.caracteres > 5 && this.caracteres < 11:
          this.passwordStrong = 25;
          break;
        case this.caracteres > 10 && this.caracteres < 16:
          this.passwordStrong = 50;
          break;
        case this.caracteres > 15 && this.caracteres < 20:
          this.passwordStrong = 75;
          break;
        case this.caracteres > 19:
          this.passwordStrong = 100;
          break;  
      }
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
