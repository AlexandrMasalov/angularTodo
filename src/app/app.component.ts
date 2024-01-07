import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoGroupComponent } from './components/todo-group/todo-group.component';
import {
  TodoGroup,
  TodoItem,
  TodoStatus,
} from './components/todo-group/todo-group.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public todoGroups: TodoGroup[];

  constructor() {
    this.todoGroups = [
      {
        title: 'ToDo',
        items: [
          {
            title: 'Сделать ToDo',
            description: 'Делаем ToDo Angular стрим',
            status: TodoStatus.IN_PROGRESS,
          },
          {
            title: 'Сделать вторую часть',
            description: 'Делаем еще что-то',
            status: TodoStatus.NOT_STARTED,
          },
          {
            title: 'Смонтировать и выложить на канал',
            description: 'Делаем еще что-то и еще что-то',
            status: TodoStatus.DONE,
          },
        ],
      },
    ];
  }

  public addGroup(): void {
    let tempGroup: TodoGroup = {
      title: '',
      items: [],
    };
    this.todoGroups.push(tempGroup);
  }
  public handleChangeTitle(value: { value: string; index: number }): void {
    this.todoGroups[value.index].title = value.value;
  }

  public handleDeleteGroup(value: number) {
    this.todoGroups.splice(value, 1);
  }

  public handleNewItem(value: { item: TodoItem; index: number }) {
    this.todoGroups[value.index].items?.push(value.item);
  }
}
