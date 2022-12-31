import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contdown-component',
  templateUrl: './contdown-component.component.html',
  styleUrls: ['./contdown-component.component.scss']
})
export class ContdownComponentComponent implements OnInit {

  constructor() { }
  deadline =  new Date("Jan 01, 2023 00:00:00").getTime();
  @Output() timerEnd : EventEmitter<boolean> = new EventEmitter();
  days = 0;
  hours = 0;
  minutes =0;
  seconds =0;
  t= 0;
  ngOnInit(): void {
    var x = setInterval(()=>{
      var now = new Date().getTime();
      var days = Math.floor(this.t / (1000 * 60 * 60 * 24));
      this.days = days;
      var t = this.deadline - now;
      this.t = t;
      var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      this.hours = hours;
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      this.minutes = minutes;
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      this.seconds = seconds;
      if (t < 0) {
        clearInterval(x);
        this.hours =0;
        this.days = 0;
        this.seconds = 0;
        this.minutes =0;
        this.timerEnd.emit(false);
    }
  
    },1000)

    
    
  }
  

}
