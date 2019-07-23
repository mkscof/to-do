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

  createTask() {
    this.taskCount += 1;
  }
}
