import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public subTitle: string;

  constructor() {
    this.title = 'Rock Paper Scissors';
    this.subTitle = 'Progressive WebApp';
  }
}
