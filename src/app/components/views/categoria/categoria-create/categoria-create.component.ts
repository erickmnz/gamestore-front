import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
  
  categoria: Category = {
   'name':''
  };


  constructor(private service:CategoriaService, private router:Router){}
  
  ngOnInit(): void {

  }

  create():void{
    this.service.create(this.categoria).subscribe(
      (r) => {
        this.categoria.name = r.name;
        this.service.message(`A categoria ${this.categoria.name} foi criada com sucesso`)
        this.router.navigate(['categories'])
      }
      , err =>{
        for (let index = 0; index < err.error.errors.length; index++) {
          this.service.message(err.error.errors[index].message);
          
        }
      }
      );
  }

  cancel():void{
    this.router.navigate(['categories']);
  }

}
