import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wand } from '../shared/wand.model';
import { WandService } from '../shared/wand.service';

@Component({
  selector: 'app-wand-list',
  templateUrl: './wand-list.component.html',
  styleUrls: ['./wand-list.component.css']
})
export class WandListComponent implements OnInit {

  

  wands: Array<Wand> = []
  selectedWand: Wand 

  constructor(private wandService:WandService,
    private router: Router) { }

    ngOnInit(): void {
      this.getWands()
  }

  getWands() {
    this.wandService.getWands().subscribe(
      res => {
        this.wands = res as Wand[]
      }
    )
  }

  onSelect(wizard: Wand) {
    this.selectedWand = wizard
    localStorage.setItem("wandid", this.selectedWand.id.toString())
  }

  gotoDetail() {
    this.router.navigate(["/wands/details"])
  }

}
