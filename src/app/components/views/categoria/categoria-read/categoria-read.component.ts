import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','games','actions'];

  cats:Category[]=[]

  constructor(private service:CategoriaService, private router:Router){    
  }
  
  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.service.findall().subscribe(r => this.cats = r
      )
  }

  toCategoryCreate(){
    this.router.navigate(['categories/create'])
  }

}


