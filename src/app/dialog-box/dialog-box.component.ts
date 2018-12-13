import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  data: string;
  constructor(private dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log(data);
    this.data = data;
  }

  ngOnInit() {
  }
  save() {
    this.dialogRef.close('string');
  }

  close() {
    this.dialogRef.close();
  }

}
