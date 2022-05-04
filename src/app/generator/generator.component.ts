import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styles: [
  ]
})
export class GeneratorComponent implements OnInit {

  password: string = 'Aca va el  password generado';

  constructor() { }

  ngOnInit(): void {
  }

}
