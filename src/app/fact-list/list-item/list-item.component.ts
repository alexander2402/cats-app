import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Fact } from 'src/app/fact.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() fact: Fact;
  @Input() index: number;
  @Output() factClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
