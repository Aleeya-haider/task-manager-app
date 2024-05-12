import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { Router } from '@angular/router';
import { IndexedDbService } from 'src/app/services/indexed-db.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private router: Router,
    private indexedDbService: IndexedDbService
  ) {}

  ngOnInit(): void {
    this.getAlltasks();
  }

  createTask() {
    this.router.navigate(['/tasks/create']);
  }

  getAlltasks(): void {
    this.indexedDbService
      .getAllTasks()
      .then((tasks) => {
        this.tasks = tasks;
        console.log(this.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  editTask(taskId: number): void {
    this.router.navigate(['tasks/edit', taskId]);
  }
}
