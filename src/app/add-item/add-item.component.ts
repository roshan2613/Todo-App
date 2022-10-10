import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() addItemEvent = new EventEmitter<string>();
  constructor() { }
  newItem: string = '';

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEvent.emit(this.newItem);
  }

}
