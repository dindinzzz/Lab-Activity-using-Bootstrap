import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new_project';
  apptitles=['Breathe deep','Explore the heights','Change your perspective']
  index= 0
  updateTitle()
  {
    this.index++
    if(this.index==3){
      this.index= 0
    }
  }
}
