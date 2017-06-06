import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { AIService } from '../AI-service/ai.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public playerChoses: IPlayerChose[];
  public playerChose: IPlayerChose;
  public gameForm: FormGroup;
  public thinking: boolean;

  constructor(
    public snackBar: MdSnackBar,
    private fb: FormBuilder,
    private ai: AIService,
  ) {
    this.playerChoses = [
      'Rock',
      'Paper',
      'Scissors',
    ];

    this.createForm();
  }

  ngOnInit() { }

  public play() {
    // Display an useful message if the user tries to submit the form without chosing a move first
    if (!this.gameForm.valid) {
      return this.snackBar.open('You must chose your move first', null, {
        duration: 5000,
      });
    }

    this.gameForm.controls['chose'].disable();
    this.thinking = true;

    this.ai.play(this.gameForm.controls['chose'].value)
      .subscribe(res => {
        this.thinking = false;
        this.gameForm.controls['chose'].enable();
        console.log(res);
      });

    return false;
  }

  private createForm() {
    this.gameForm = this.fb.group({
      chose: ['', Validators.required ],
    });
  }
}
