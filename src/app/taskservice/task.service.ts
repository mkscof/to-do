import { Injectable } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../test-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskCount: number;

  constructor() { }

  ngOnInit() {
    this.taskCount = 0;
  }

  getTasks(): Task[] {
    return TASKS;
  }

  addTask(title: String, description: String, urgency: number): Task {
    this.taskCount += 1;
    return new Task(title, description, urgency);
  }

  deleteTask() {
    this.taskCount -= 1;
  }

  editTask() {

  }
}
