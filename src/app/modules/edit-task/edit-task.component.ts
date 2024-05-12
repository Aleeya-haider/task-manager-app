import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IndexedDbService } from 'src/app/services/indexed-db.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  taskId!: number;
  taskForm!: FormGroup;
  existingTask: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dbService: IndexedDbService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.route?.snapshot?.paramMap) {
      const id = this.route?.snapshot?.paramMap?.get('id');
      if (id !== null && id !== undefined) {
        this.taskId = +id;
      }
    }

    this.editTask();
    this.initForm();
  }

  editTask(): void {
    this.dbService
      .getTaskById(this.taskId)
      .then((task) => {
        this.existingTask = task;
        console.log(this.existingTask);
        this.populateForm();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  initForm() {
    this.taskForm = this.formBuilder.group({
      taskTitle: ['', [Validators.required, Validators.maxLength(50)]],
      taskDescription: ['', Validators.required],
      acceptanceCriteria: ['', Validators.required],
    });
  }

  populateForm(): void {
    console.log(this.existingTask);
    this.taskForm.patchValue({
      taskTitle: this.existingTask.taskTitle,
      taskDescription: this.existingTask.taskDescription,
      acceptanceCriteria: this.existingTask.acceptanceCriteria,
    });
  }

  saveTask() {
    const updatedTaskData = this.taskForm.value;
    this.dbService
      .updateTask(this.taskId, updatedTaskData)
      .then(() => {
        console.log('Task edited succesfully');
        this.router.navigate(['tasks']);
      })
      .catch((error) => {
        console.error('Error updating task:', error);
      });
  }

  deleteTask(): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      panelClass: 'confirmation-dialog-container',
      data: {
        taskId: this.taskId,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Task with ID', this.taskId, 'deleted');
      }
    });
  }

  back(): void {
    this.router.navigate(['tasks']);
  }
}
