import { Component } from '@angular/core';
import { TodoItemBaseComponent } from '../todo-item-base/todo-item.base.component';

@Component({
  selector: 'app-item-done',
  standalone: true,
  imports: [],
  templateUrl: './item-done.component.html',
  styleUrl: './item-done.component.css',
})
export class ItemDoneComponent extends TodoItemBaseComponent {}
