import { Component, OnInit } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {

  constructor(private actoresService: ActoresService) { }

  allActores : Observable<any>;

  getAllActores(){
    this.allActores = this.actoresService.getAllActors();
    let test = 0;
    this.allActores.forEach(function (value) {
      test = test + 1;
  });
    alert('cantidad' + test)
  }

  ngOnInit() {
    this.getAllActores();
   
    
  }

}
