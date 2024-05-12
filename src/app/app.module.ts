import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './modules/task-list/task-list.component';
import { EditTaskComponent } from './modules/edit-task/edit-task.component';
import { CreateTaskComponent } from './modules/create-task/create-task.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskListModule } from './modules/task-list/task-list.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTaskModule } from './modules/create-task/create-task.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteConfirmationComponent } from './modules/delete-confirmation/delete-confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    EditTaskComponent,
    DeleteConfirmationComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    TaskListModule,
    NoopAnimationsModule,
    CreateTaskModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
