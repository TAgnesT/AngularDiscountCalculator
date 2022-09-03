import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor() { }

  calc(inp: HTMLInputElement, outp: HTMLLabelElement){
    let num = parseFloat(inp.value);
    let res = num * 100;
    outp.innerText = res.toString();
  }

  ngOnInit(): void {
  }

}
