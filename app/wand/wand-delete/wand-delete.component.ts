import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WandService } from '../shared/wand.service';

@Component({
  selector: 'app-wand-delete',
  templateUrl: './wand-delete.component.html',
  styleUrls: ['./wand-delete.component.css']
})
export class WandDeleteComponent implements OnInit {

  constructor(private wandService: WandService,
    private router: Router) { }

  ngOnInit(): void {
  }

  removeWand(id: string) {
    if(id == "" || Number(id) < 0 || !Number(id)){
      alert("Id is not valid")
      return
    } 

    this.wandService.deleteWand(Number(id)).subscribe(wand => [console.log(wand), alert("Wand deleted"), this.router.navigate(["/wands"])])
  }

}
