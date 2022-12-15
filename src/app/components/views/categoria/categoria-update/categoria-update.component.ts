import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {



  categoria:Category = {
    'name':''
  }


  constructor(private service:CategoriaService, private activate:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.categoria.id =  this.activate.snapshot.paramMap.get('id')!;
    this.findbyid();
  }

  findbyid():void{
    this.service.findbyid(this.categoria.id!).subscribe(
      (r) => {
        this.categoria = r;
      }
    )
  }
  update():void{
    this.service.update(this.categoria).subscribe(
      () => {
        this.router.navigate(['categories'])
        this.service.message("Categoria atualizada com sucesso");
      },(err)=>{
        for (let index = 0; index < err.error.errors.length; index++) {
          this.service.message(err.error.errors[index].message);
          
        }
      }

    )
  }

  cancel():void{
    this.router.navigate(['categories']);
  }

}
