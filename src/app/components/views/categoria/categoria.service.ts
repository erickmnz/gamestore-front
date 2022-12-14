import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Category } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  baseUrl:String="";

  constructor(private httpclient:HttpClient, private snack:MatSnackBar) {

   }

   findall():Observable<Category[]>{
      const url = `${this.baseUrl}/categories`;
      return this.httpclient.get<Category[]>(url);
   }

   findbyid(id:String):Observable<Category>{
      const url = `${this.baseUrl}/categories/${id}`;   
      return this.httpclient.get<Category>(url);
   }

   create(cat: Category):Observable<Category>{
      const url = `${this.baseUrl}/categories`;
      return this.httpclient.post<Category>(url, cat);
   }


   update(cat:Category):Observable<void>{
      const url = `${this.baseUrl}/categories/${cat.id}`;   
      return this.httpclient.put<void>(url, cat);
   }


   delete(id:String):Observable<void>{
      const url = `${this.baseUrl}/categories/${id}`;   
      return this.httpclient.delete<void>(url);
   }

   message(str:String):void{
      this.snack.open(`${str}`, "OK", {horizontalPosition:"end",verticalPosition:"top",duration:3000})
   }
}
