import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdSnackBar } from '@angular/material';
import { DialogComponent } from './dialog.component';
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
    public dialog: MdDialog,
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
    const playerMove = this.gameForm.controls['chose'].value;

    // Display an useful message if the user tries to submit the form without chosing a move first
    if (!this.gameForm.valid) {
      return this.snackBar.open('You must chose your move first', null, {
        duration: 5000,
      });
    }

    this.gameForm.controls['chose'].disable();
    this.thinking = true;

    this.ai
      .play(playerMove)
      .subscribe(res => {
        this.thinking = false;
        this.gameForm.controls['chose'].enable();
        this.displayResult(res);
      });

    return false;
  }

  private displayResult(response: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: response,
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      return !!res && this.snackBar.open(
        'Email reset correctly sent.',
        null,
        { duration: 6000 }
      );
    });
  }

  private createForm() {
    this.gameForm = this.fb.group({
      chose: ['', Validators.required ],
    });
  }
}
