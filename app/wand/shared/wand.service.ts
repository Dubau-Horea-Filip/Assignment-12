import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Wand } from './wand.model';

@Injectable({
  providedIn: 'root'
})
export class WandService {
  private url = "http://localhost:8080/api/wands"

  constructor(private http: HttpClient) { }

  getWands(): Observable<Wand[]> {
    return this.http.get<Array<Wand>>(this.url).pipe(map(res => {return res['wands']}));
  }

  getSortedWands(): Observable<Wand[]> {
    return this.http.get<Array<Wand>>(this.url +"/sort/strength").pipe(map(res => {return res['wands']}));
  }

  getWand(id: number): Observable<Wand> {
    return this.getWands().pipe(map(Wands => Wands.find(Wand => Wand.id === id)))
  }

  saveWand(Wand: Wand): Observable<Wand> {
    console.log("save Wand", Wand)

    return this.http.post<Wand>(this.url, Wand)
  }

  updateWand(Wand: Wand): Observable<Wand> {
    return this.http.put<Wand>(this.url + "/" + Wand.id, Wand)
  }

  deleteWand(id: number): Observable<any> {
    return this.http.delete(this.url + "/" + id)
  }

  filterWands(name: string) {
    if (name == "") {
      alert("you shoule write a name")
    }
    return this.http.get<Array<Wand>>(this.url + "/filter/" + name).pipe(map(res => {return res['wands']}));
  }

  // sortWands() {
  //   return this.http.get<Array<Wand>>(this.url + "/sort").pipe(map(res => {return res['wands']}));
  // }
}
