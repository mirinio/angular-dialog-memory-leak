import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {DialogExampleComponent} from "./dialog-example/dialog-example.component";
import {MatButton} from "@angular/material/button";
import {Dialog, DialogRef} from "@angular/cdk/dialog";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DialogExampleComponent, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = 'angular-dialog-memory-leak';

  private readonly dialog = inject(Dialog);
  private weakDialogRef:  WeakRef<DialogRef<unknown, DialogExampleComponent>> | undefined;
  private dialogRef: DialogRef<unknown, DialogExampleComponent> | undefined;

  openDialogWithWeakRef(): void {

    this.weakDialogRef = new WeakRef(this.dialog.open(DialogExampleComponent, {
      width: '250px',
    }));
    this.weakDialogRef.deref()?.closed.pipe(first()).subscribe();
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '250px',
    });
    this.dialogRef.closed.subscribe();
  }
}
