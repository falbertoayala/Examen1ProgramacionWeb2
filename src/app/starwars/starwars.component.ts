import { Component, OnInit } from '@angular/core';
import { Starwars } from '../share/mmodel/starwars';
import { StarwarsService } from '../share/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  startwars : Array<Starwars>;
  peliculaSelect : Starwars;

  constructor(private starwarsService : StarwarsService) { 

    this.starwarsService = starwarsService;

  }
  
  ngOnInit() {

    this.starwarsService.getPeliculas()
    .subscribe((data : Array<Starwars>)=>{
    
     }, error =>{
      console.log("fasd")
      this.startwars = [{title : "Episodio1", episode_id: "Capitulo1", release_date: "20/01/2014" }]  
     
      //console.log(`Error ${error}`);
     });

    }

    onSelect(peliculaSelect : Starwars) : void{
      this.peliculaSelect = peliculaSelect;
  }

}
