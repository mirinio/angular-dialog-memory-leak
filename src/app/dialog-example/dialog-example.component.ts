import {Component, inject} from '@angular/core';
import { MatButton } from "@angular/material/button";
import {AppComponent} from "../app.component";
import {MatDialogRef} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-dialog-example',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './dialog-example.component.html',
  styleUrl: './dialog-example.component.scss'
})
export class DialogExampleComponent {

  private readonly dialogRef = inject(DialogRef<DialogExampleComponent>)
}
