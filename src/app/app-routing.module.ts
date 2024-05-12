import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './modules/task-list/task-list.component';
import { CreateTaskComponent } from './modules/create-task/create-task.component';
import { EditTaskComponent } from './modules/edit-task/edit-task.component';

const routes: Routes = [
  //defining all routes
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/create', component: CreateTaskComponent },
  { path: 'tasks/edit/:id', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }