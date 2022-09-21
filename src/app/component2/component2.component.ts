import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  component2Data:string[] = ['Origin', 'Lifelinks system', 'Pinpoint', 'Jeevs', 'Castor', 'Doordash']
  result: string
  ngOnInit(): void {
    this.showData()                
  }

  showData() {
    let data = document.getElementById("data")
    const allData = this.component2Data.map(m=> m)
    data.innerHTML = allData.join('&nbsp; &nbsp; &nbsp; &nbsp;')
  }

}
