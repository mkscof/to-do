import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from '../task';
import { TASKS } from '../test-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksUrl = 'api/tasks';  // URL to web api

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.tasksUrl);
  // }

  getTasks() {
    return TASKS;
  }

  newTask(title: String, description: String, urgency: number, id: number): Task {
    return new Task(title, description, urgency, id);
  }

  editTask() {

  }
}
