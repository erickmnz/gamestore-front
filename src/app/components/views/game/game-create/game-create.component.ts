import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit{
  
  game:Game = {
    'title':'',
    'description':'',
    'producer':'',
  }

  constructor(private service:GameService, private active:ActivatedRoute, private router:Router){}

  cat_id:String = ''
  ngOnInit(): void {
    this.cat_id = this.active.snapshot.paramMap.get('id_cat')!;
  
  }

  create():void{
    this.service.create(this.cat_id, this.game).subscribe(
      (r) => { 
        console.log(r);
        this.game = r;


        
      }, (err)=>{
        for (let index = 0; index < err.error.errors.length; index++) {
          this.service.message(err.error.errors[index].message);
          
        }
      }
    )
  }
  cancel():void{
    this.router.navigate([`categories/${this.cat_id}/games`])
  }



}
