import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.css']
})
export class GameUpdateComponent implements OnInit {
  
  game:Game={
    'title':'',
    'description':'',
    'producer':''
  }
  cat_id:String=''
  id:String=''
  constructor(private service:GameService, private active:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.cat_id = this.active.snapshot.paramMap.get('id_cat')!;
    this.id= this.active.snapshot.paramMap.get('id')!;
    this.findbyid();
  }

  findbyid():void{
    this.service.findbygameid(this.id).subscribe((r)=>{
      this.game = r;
    });
  }

  update():void{
    this.service.update(this.id, this.game).subscribe((r)=> {
      this.game = r
      this.router.navigate([`categories/${this.cat_id}/games`])
      this.service.message("Jogo atualizado com sucesso")
    },(err)=>{
      for (let index = 0; index < err.error.errors.length; index++) {
        this.service.message(err.error.errors[index].message);
        
      }
    }
    );
  }

  cancel():void{
    this.router.navigate([`categories/${this.cat_id}/games`])

  }

}
