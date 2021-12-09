import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feti';
  writer = 'Juhász Zsolt';
  newGyumolcs = '';
  gyumolcsok = [
    'alma',
    'körte',
    'barack',
    'szilva',
    'banán',
    'ribizli',
    'birs',
    'eper',
    'szőlő'
  ];
  hozzaadGyumolcs():void{
    console.log(this.newGyumolcs);
    this.gyumolcsok.push(this.newGyumolcs);
  }
}
