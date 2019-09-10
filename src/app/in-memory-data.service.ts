import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasklist = [
      {title: 'Cook', description: 'Cook yourself dinner you degenerate', urgency: 2, id: 0},
      {title: 'Clean', description: 'Chicks don\'t dig a dirty room', urgency: 1, id: 1},
      {title: 'Car Wash', description: '', urgency: 3, id: 2},
      {title: 'Finish this app', description: 'Time\'s a wastin\'', urgency: 0, id: 3}
    ];
    return {tasklist};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(tasklist: Task[]): number {
  //   return tasklist.length > 0 ? Math.max(...tasklist.map(task => task.id)) + 1 : 11;
  // }
}