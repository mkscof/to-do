import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from '../task';
import { TASKS } from '../test-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskCount: number;
  idInc: number;
  private tasksUrl = 'api/tasks';  // URL to web api

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.taskCount = 0;
    this.idInc = 3;
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  newTask(title: String, description: String, urgency: number): Task {
    this.taskCount += 1;
    this.idInc += 1;
    console.log(title, description, urgency);
    return new Task(title, description, urgency, this.idInc);
  }

  editTask() {

  }
}
