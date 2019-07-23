import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../taskservice/task.service'; 
import { TASKS } from '../test-tasks';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  tasklist: Task[] = TASKS;

  constructor(private taskService: TaskService) { 
    
  }

  ngOnInit() {
    this.getTasks();
    console.log('Is it worth it to use this over Trello? Hmm...');
  }

  getTasks(): void {
    this.tasklist = this.taskService.getTasks();
  }

}
