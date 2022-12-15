import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit{
  
  categoria:Category={
    'id':'',
    'name':''
  }


  constructor(private service:CategoriaService, private activate:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.categoria.id = this.activate.snapshot.paramMap.get('id')!;
    this.findbyid();
  }

  findbyid():void{
    this.service.findbyid(this.categoria.id!).subscribe(
      (r) => {
        this.categoria = r;
        console.log(this.categoria);
      }
    );
    }

    delete():void{
      this.service.delete(this.categoria.id!).subscribe(
        (r) => {
          this.service.message("Categoria apagada com sucesso");
          this.router.navigate(['categories'])
        }, (err) =>{
          this.service.message(err.error);
        }

      )
    }
    cancel():void{
      this.router.navigate(['categories']);
    }

}
