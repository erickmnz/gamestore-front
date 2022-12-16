import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css']
})
export class GameDeleteComponent implements OnInit {
  cat_id:String='';
  game:Game={

    'id':'',
    'title':'',
    'description':'',
    'producer':''
  }

  constructor(private service:GameService, private active:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.cat_id=this.active.snapshot.paramMap.get('id_cat')!;
    this.game.id=this.active.snapshot.paramMap.get('id')!;
    this.findbyid();
  }

  findbyid():void{
    this.service.findbygameid(this.game.id!).subscribe(
      (r) =>{
        this.game = r;
      }
    )
  }

  delete():void{
    this.service.delete(this.game.id!).subscribe(
      (r)=>{
        this.service.message("Jogo apagado com sucesso!")
        this.router.navigate([`categories/${this.cat_id}/games`])
      }, (err)=>{
        this.service.message(err.error.message);
      }
    )
  }

  cancel():void{
    this.router.navigate([`categories/${this.cat_id}/games`]);
  }
}
