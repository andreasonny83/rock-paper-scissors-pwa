import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

interface IGameOutcome {
  result: number;
  ai: IPlayerChose;
  message: string;
}

@Component({
  selector: 'app-dialog',
  template: `
    <h2 md-dialog-title>
      {{ data.message }}
    </h2>

    <md-dialog-content>
      The opponent replied with: {{ data.ai }}
    </md-dialog-content>

    <md-dialog-actions align="end">
      <button md-raised-button
              color="accent"
              (click)="dismiss()">
        Close
      </button>
    </md-dialog-actions>
  `,
})
export class DialogComponent {
  constructor(
    public dialogRef: MdDialogRef<DialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: IGameOutcome,
  ) { }

  public dismiss() {
    this.dialogRef.close();
  }
}
