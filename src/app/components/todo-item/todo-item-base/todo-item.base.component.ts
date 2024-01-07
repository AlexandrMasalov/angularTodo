import { Directive, Input } from '@angular/core';
import { TodoItem } from '../../todo-group/todo-group.interface';

@Directive({
  standalone: true,
})
export class TodoItemBaseComponent {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;
}
