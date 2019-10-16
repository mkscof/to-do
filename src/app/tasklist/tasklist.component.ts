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
  editForm: FormGroup;
  taskIndex: number;

  constructor(private taskService: TaskService) {
    this.addForm = this.initAddForm();
    this.editForm = this.initEditForm();
  }

  ngOnInit() {
    this.tasklist = TASKS;
    this.taskIndex = this.tasklist.length;
    // this.initForm();
    console.log('Is it worth it to use this over Trello? Hmm...');
  }

  private initAddForm() {
    return new FormGroup({
      'title': new FormControl(),
      'desc': new FormControl(),
      'urgency': new FormControl(Validators.required)
    });
  }

  private initEditForm() {
    return new FormGroup({
      'desc': new FormControl(),
      'urgency': new FormControl()
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
      this.taskIndex
    );
    this.taskIndex += 1;
    this.tasklist.push(newTask);
    this.getTasks();
    // this.addForm.reset();
  }

  deleteTask(data): void {
    let item = data.target.parentElement;
    let itemId = Number(item.children[5].textContent);
    this.tasklist = this.tasklist.filter(task => {
      return task.id != itemId
    });
    this.getTasks();
  }

  editTask(data): void {
    let item = data.target.parentElement;
    let newDesc = this.editForm.value.desc;
    let itemId = Number(item.parentElement.parentElement.children[5].textContent);
    for(let i = 0; i < this.tasklist.length; i++) {
      if(this.tasklist[i].id == itemId) {
        this.tasklist[i].description = newDesc;
        this.tasklist[i].urgency = (this.editForm.value.urgency) ? this.editForm.value.urgency : this.tasklist[i].urgency;
        break;
      }
    }
    this.getTasks();
  }
}
