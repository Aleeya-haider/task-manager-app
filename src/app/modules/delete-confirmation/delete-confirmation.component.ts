import { Component, Inject, ViewEncapsulation, inject } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndexedDbService } from 'src/app/services/indexed-db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class DeleteConfirmationComponent {

  taskId!: number;

  constructor(
    private dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA)  public data : any,
    private dbService: IndexedDbService,
    private router: Router,
  ) {

    this.taskId = data.taskId;
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  yes(): void {
      this.dbService
        .deleteTask(this.taskId)
        .then(() => {
          console.log('task deleted succesfully');
          this.dialogRef.close(true);
          this.router.navigate(['tasks']);
        })
        .catch((error) => {
          console.log(error);
        });
    }
}
