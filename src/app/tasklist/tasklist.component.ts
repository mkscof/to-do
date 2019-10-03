import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../taskservice/task.service'; 
import { TASKS } from '../test-tasks';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  tasklist: Task[];
  urgencies = [0, 1, 2, 3];
  addForm: FormGroup;
  taskCount: number;

  constructor(private taskService: TaskService) {
    this.addForm = this.initForm();
  }

  ngOnInit() {
    this.taskCount = 0;
    this.tasklist = TASKS;
    // this.initForm();
    console.log('Is it worth it to use this over Trello? Hmm...');
  }

  private initForm() {
    return new FormGroup({
      'title': new FormControl(),
      'desc': new FormControl(),
      'urgency': new FormControl(Validators.required)
    });
  }

  // getTasks(): void {
  //   this.taskService.getTasks()
  //     .subscribe(tasklist => this.tasklist = tasklist);
  // }

  getTasks(): Task[] {
    // return this.taskService.getTasks();
    return this.tasklist;
  }

  trackBy(index: number, t: Task) {
    if(t) {
      return t.id;
    }
    return null;
  }

  addTask(): void {
    let taskObj = Object.assign({}, this.addForm.value);
    let newTask: Task = this.taskService.newTask(
      taskObj.title,
      taskObj.desc,
      taskObj.urgency,
      this.taskCount
    );
    this.taskCount += 1;
    this.tasklist.push(newTask);
    this.getTasks();
    // this.addForm.reset();
  }

  deleteTask(data, tPos): void {
    let item = data.target.parentElement;
    let itemId = Number(item.children[5].textContent);
    this.tasklist = this.tasklist.filter(task => {
      return task.id != itemId
    });
    this.getTasks();
  }
}
