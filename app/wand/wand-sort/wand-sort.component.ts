import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wand } from '../shared/wand.model';
import { WandService } from '../shared/wand.service';

@Component({
  selector: 'app-wand-sort',
  templateUrl: './wand-sort.component.html',
  styleUrls: ['./wand-sort.component.css']
})
export class WandSortComponent implements OnInit {

  wands: Array<Wand> = []
  selectedWand: Wand 

  constructor(private wandService:WandService,
    private router: Router) { }

    ngOnInit(): void {
      this.getWands()
  }

  getWands() {
    this.wandService.getSortedWands().subscribe(
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
