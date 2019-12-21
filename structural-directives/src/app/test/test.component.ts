import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h2 *ngIf= "displayName; else elseBlock">
        Deepti Rosini
      </h2>

      <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
      </ng-template>

      <div *ngFor = "let color of colors; index as i">
      <h2> {{i}}  {{colors}} </h2>
      </div>
  `,

  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName = true;
  public colors = ['red', "green", "yellow", "blue"];
  constructor() { }

  ngOnInit() {
  }

}
