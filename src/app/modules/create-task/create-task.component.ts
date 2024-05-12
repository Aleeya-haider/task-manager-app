import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IndexedDbService } from 'src/app/services/indexed-db.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent  implements OnInit{

    taskForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private indexedDbService: IndexedDbService,

  ) {

  }
  ngOnInit(): void {
    

    this.taskForm = this.formBuilder.group({ 
      taskTitle :['', [Validators.required, Validators.maxLength(50)]],
      taskDescription:['', Validators.required],
      acceptanceCriteria: ['', Validators.required]
    });

  }



  submitTask(): void {
        if (this.taskForm.valid) {
          const taskData = this.taskForm.value;
          this.indexedDbService.addTask(taskData)
            .then(() => {
              console.log('Task added successfully');
              console.log(taskData);
              this.taskForm.reset();
              this.router.navigate(['tasks']);
            })
            .catch(error => {
              console.error('Error adding task:', error);
            });
        }
      }

  back(): void {
    this.router.navigate(['tasks']);
  }
}
