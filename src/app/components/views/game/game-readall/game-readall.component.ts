import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-readall',
  templateUrl: './game-readall.component.html',
  styleUrls: ['./game-readall.component.css']
})
export class GameReadallComponent implements OnInit{
  
  games:Game[] = [];
  displayedColumns:String[]=['id','title','actions'];
  cat_id:String = '';

  constructor( private service:GameService,private active:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.cat_id = this.active.snapshot.paramMap.get('id_cat')!;
    this.findall()
  }

  findall():void{
    this.service.findallbycat(this.cat_id).subscribe(
      r=>this.games = r
      );
  }

  toGameCreate(){
    this.router.navigate([`categories/${this.cat_id}/games/create_game`]);
  }

}
