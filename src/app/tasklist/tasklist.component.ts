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

  tasklist: Task[] = TASKS;
  urgencies = [0, 1, 2, 3];
  addForm: FormGroup;

  constructor(private taskService: TaskService) {
    this.addForm = this.initForm();
  }

  ngOnInit() {
    this.getTasks();
    // this.initForm();
    console.log('Is it worth it to use this over Trello? Hmm...');
  }

  private initForm() {
    return new FormGroup({
      'title': new FormControl(Validators.required),
      'desc': new FormControl(),
      'urgency': new FormControl()
    });
  }

  // getTasks(): void {
  //   this.taskService.getTasks()
  //     .subscribe(tasklist => this.tasklist = tasklist);
  // }

  getTasks() {
    return this.taskService.getTasks();
  }

  addTask(): void {
    console.log(this.addForm);
    let taskObj = Object.assign({}, this.addForm.value);
    let newTask: Task = this.taskService.newTask(
      taskObj.title,
      taskObj.desc,
      taskObj.urgency
    );
    console.log(newTask);
    this.tasklist.push(newTask);
    console.log(this.tasklist);
    // this.addForm.reset();
    this.getTasks();
  }

  deleteTask(data): void {
    this.tasklist.filter(task => task != data);
  }
}
