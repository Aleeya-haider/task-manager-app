import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  private db!: Dexie;
  
  constructor() {
    this.initDatabase();
   }


   private initDatabase() {
    this.db = new Dexie('taskDatabase');
    this.db.version(1).stores({
      tasks: '++id, name, description, criteria'
    });
   }


   //CRUD operations for tasks

   async addTask(task: any) {
    await this.db.table('tasks').add(task);;
  }

  async getAllTasks() {
    return await this.db.table('tasks').toArray();
  }

  async getTaskById(taskId: number) {
    return await this.db.table('tasks').get(taskId);
  }

  async updateTask(taskId: number, taskData: any) {
    await this.db.table('tasks').update(taskId, taskData);
  }

  async deleteTask(taskId: number) {
    await this.db.table('tasks').delete(taskId);
  } 

}
