import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';


const homeRoutes: Route[] = [
    {
        path: '',
        component: TaskListComponent,
        children: [],
    },
];

@NgModule({
    declarations: [
        TaskListComponent],
    imports: [
        BrowserModule,
        SharedModule,
        RouterModule.forChild(homeRoutes),
    ],
    providers:[HttpClientModule, HttpClient],
    schemas: [NO_ERRORS_SCHEMA] 
})
export class TaskListModule {}
