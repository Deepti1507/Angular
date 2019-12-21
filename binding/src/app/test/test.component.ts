import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
    Welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " +name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{"Welcome" + greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>
    <input [id] = "myId" type="text" value="Deepti">
    <input id = "{{myId}}" type="text" value="Deepti">
    <h2 class = "text-success">Deepti Rosini </h2>

    <h2> Welcome {{name}} </h2>
    <button (click) = "onClick($event)"> Greet </button>

    <button (click) = "greeting = 'Welcome to Virtusa' "> Click </button>
    {{greeting}}

  `,
  styles: [`
    .text-success{
      color : green;
    }
    .text-danger{
      color : red;
    }
    .text-style{
      font-style : italic;
    }

  `]
})
export class TestComponent implements OnInit {

  public name = 'Deepti';
  public siteUrl = window.location.href;
  public myId = 'testId';

  public greeting = '';

  constructor() { }

  ngOnInit() {
  }

  public greetUser() {
    return this.name;
  }

   onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

}
