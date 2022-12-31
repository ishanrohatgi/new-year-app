import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'happy-new-year';
  timeEnd :boolean = true;
  dotOne=false;
  dotTwo= false;
  dotThree= false;
  colorToggle = false;
  ngOnInit(){
    setInterval(()=>{
        this.dotOne = !this.dotOne;
        this.dotTwo = !this.dotThree;
        this.dotThree = !this.dotThree;
        this.colorToggle = !this.colorToggle;
        },1000);
  }
  getTimeEnd(data : boolean){
    this.timeEnd = data;
  }
}
