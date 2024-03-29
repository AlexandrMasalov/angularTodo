import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemDoneComponent } from '../todo-item/item-done/item-done.component';
import { ItemInProgressComponent } from '../todo-item/item-in-progress/item-in-progress.component';
import { ItemNotStartedComponent } from '../todo-item/item-not-started/item-not-started.component';
import { TodoGroup, TodoItem, TodoStatus } from './todo-group.interface';

@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [
    CommonModule,
    ItemDoneComponent,
    ItemInProgressComponent,
    ItemNotStartedComponent,
    FormsModule,
  ],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.css',
})
export class TodoGroupComponent implements OnInit {
  @Input() todoGroup!: TodoGroup;
  @Input() index!: number;

  @Output() changeTitleEvent: EventEmitter<{ value: string; index: number }> =
    new EventEmitter<{ value: string; index: number }>();

  @Output() deleteGroup = new EventEmitter<number>();

  @Output() addNewItem = new EventEmitter<{ item: TodoItem; index: number }>();

  public isShowTitle = true;
  public groupTitle?: string;

  ngOnInit(): void {
    this.groupTitle = this.todoGroup.title;
    if (this.todoGroup.title === '') {
      this.isShowTitle = false;
    }
  }

  public onEnterValue(): void {
    this.isShowTitle = true;
    this.changeTitleEvent.emit({ value: this.groupTitle!, index: this.index });
  }

  public deleteGroupEvent(): void {
    this.deleteGroup.emit(this.index);
  }

  public addNewTodo(value: string) {
    this.addNewItem.emit({
      item: {
        status: TodoStatus.NOT_STARTED,
        title: value,
        description: '',
      },
      index: this.index,
    });
  }
}
