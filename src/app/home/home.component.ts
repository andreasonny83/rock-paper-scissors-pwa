import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

type IPlayerChose = 'Rock' | 'Paper' | 'Scissors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public playerChoses: IPlayerChose[];
  public playerChose: IPlayerChose;
  public gameForm: FormGroup;

  constructor() {
    this.playerChoses = [
      'Rock',
      'Paper',
      'Scissors',
    ];
  }

  ngOnInit() {
    this.gameForm = new FormGroup ({
      chose: new FormControl()
    });
  }

}
