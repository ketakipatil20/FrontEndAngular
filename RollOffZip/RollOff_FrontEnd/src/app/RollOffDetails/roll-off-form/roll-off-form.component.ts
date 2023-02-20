import { Component, OnInit } from '@angular/core';
import { RollOffService } from 'src/app/shared/roll-off.service';

@Component({
  selector: 'app-roll-off-form',
  templateUrl: './roll-off-form.component.html',
  styleUrls: ['./roll-off-form.component.css']
})
export class RollOffFormComponent implements OnInit{
constructor(public service:RollOffService){
}
ngOnInit(): void{

}
}
