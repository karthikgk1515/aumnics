import { Component, OnInit } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  global: string[] = ['Global Payroll', 'Global HR', 'Global Benefits', 'Global Compliance']

  eventEmitter = new EventEmitter();
  ngOnInit(): void {
  }

}
