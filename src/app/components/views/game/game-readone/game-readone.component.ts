import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-readone',
  templateUrl: './game-readone.component.html',
  styleUrls: ['./game-readone.component.css']
})
export class GameReadoneComponent implements OnInit {
  game:Game= {
    'id':'',
    'title':'',
    'description':'',
    'producer':''
    
  };
  displayedColumns:String[]=['id','title','description', 'producer'];
  cat_id:String=''
  constructor( private service:GameService,private active:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.game.id = this.active.snapshot.paramMap.get('id')!;
    this.cat_id=this.active.snapshot.paramMap.get('id_cat')!;
    this.findgame();
  }

  findgame():void{
    this.service.findbygameid(this.game.id!).subscribe(
      r=>this.game = r
      );
  }
  cancel():void{
    this.router.navigate([`categories/${this.cat_id}/games`])

  }

}
