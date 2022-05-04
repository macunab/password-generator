import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styles: [
  ]
})
export class GeneratorComponent implements OnInit {

  password: string = 'Aca va el  password generado';
  caracteres: number = 10;
  selectedOptions: string[] = [];
  randomSelected: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  onCheckboxSelect() {
    console.log( this.selectedOptions );
    this.randomize();
  }

  onSlideChange(e: any) {
      this.caracteres = e.value;
      this.randomize();
  }

  randomize() {

    let chara: string = '';
    this.password = '';

    if( this.selectedOptions.length ){
      chara = this.selectedOptions.toString().replace(/,/g,'');
     
    } else {
      console.log('NO TIENE CONTENIDO');
      this.password = '';
    }

    for( let i = 0; i < this.caracteres; i++) {
      this.password += chara.charAt(Math.floor( Math.random() * chara.length));
    }
  }
}
