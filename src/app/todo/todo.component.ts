import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }
  items: string[] = []
  clicked: boolean[] = [];

  ngOnInit(): void {
  }

  addItem(item: string) {
    this.items.push(item);
    this.clicked.push(false);
  }

  strike(i: number) {
    this.clicked[i] = !this.clicked[i];
  }

}
