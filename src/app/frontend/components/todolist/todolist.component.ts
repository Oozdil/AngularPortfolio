import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ITask } from './task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoForm!: FormGroup;
  tasks: ITask[] = [];
  inprogress: ITask[] = [];
  done: ITask[] = [];
  updateId: number;
  isEditEnabled: boolean = false;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.todoForm = this.fb.group(
      { item: ["", Validators.required] }
    );
    this.tasks.push({ description: "Test Task 1 ", done: false });
  }


  addTask() {
    if (this.isEditEnabled) {
      this.tasks[this.updateId].description = this.todoForm.value.item;
      this.tasks[this.updateId].done = false;
      this.todoForm.reset();
      this.isEditEnabled=false;
      this.updateId=undefined;
      return;
    }

    this.tasks.push({
      description: this.todoForm.value.item,
      done: false
    });
    this.todoForm.reset();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  deleteInprogress(index: number) {
    this.inprogress.splice(index, 1);
  }
  deleteDone(index: number) {
    this.done.splice(index, 1);
  }
  onEdit(item: ITask, index: number) {
    this.todoForm.controls["item"].setValue(item.description);
    this.updateId = index;
    this.isEditEnabled = true;
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}
