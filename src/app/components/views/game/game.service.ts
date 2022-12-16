import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  baseUrl:String="";


  constructor(private httpclient:HttpClient, private snack:MatSnackBar) { }


  findallbycat(id:String):Observable<Game[]>{
    const url = `${this.baseUrl}/games/cat_id?category=${id}`
    return this.httpclient.get<Game[]>(url);
  }

  findbygameid(id:String):Observable<Game>{
    const url = `${this.baseUrl}/games/${id}`
    return this.httpclient.get<Game>(url);
  }


  create(id:String,game:Game):Observable<Game>{
    const url = `${this.baseUrl}/games?category=${id}`;
    return this.httpclient.post<Game>(url, game);
  }

  update(id:String, newGame:Game):Observable<Game>{
    const url = `${this.baseUrl}/games/${id}`
    return this.httpclient.put<Game>(url, newGame);
  }

  delete(id:String):Observable<void>{
    const url = `${this.baseUrl}/games/${id}`
    return this.httpclient.delete<void>(url);
  }

  message(str:String):void{
    this.snack.open(`${str}`, "OK", {horizontalPosition:"end",verticalPosition:"top",duration:3000})
 }

}
