# TaskManagerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.


A user interface built with Angular and typescript encapsulates basic CRUD operations of task manager application. It also uses
Tailwind and scss classes for styling across the platform. 

## Description

This module is designed to handle CRUD opertaions related to Tasks.

-   *User*: The standard user role, user can view, edit, delete and create new Tasks.

## Modules

The Task Manager application is modular, with each module dedicated to a specific functionality within the application. Here's an overview of the modular structure:

-   *Create Task*: Redirects user to a page where user can create a task using an Angular Reactive form.
-   *Edit Task*: Redirects user to a page where the existing task is editible, user can save changes and view the edited task on the task list page.
-   *Task list:* Displays all the existing tasks in a grid like format with task titles, details and their accepting criteria.
-   *Delete Confirmation*: This is a basic MatDialog module which takes confirmation from the user to delete the task. 

Each module comprises a tyepscript file, html, scss file (if required), and spec.ts (test cases file).

## Services

This folder contains:

1. A indexedDb services file which handled the indexed database APIs and a NOSQL database to add, edit and delete the tasks. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
