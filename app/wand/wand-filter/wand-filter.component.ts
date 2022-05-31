import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wand } from '../shared/wand.model';
import { WandService } from '../shared/wand.service';

@Component({
  selector: 'app-wand-filter',
  templateUrl: './wand-filter.component.html',
  styleUrls: ['./wand-filter.component.css']
})
export class WandFilterComponent implements OnInit {

  wands: Array<Wand> =[]
  wandsWithAngular: Array<Wand> = []

  constructor(private wandservice: WandService,
    private router: Router) { }

  ngOnInit(): void {
    // this.getWands()
  }

  getWands() {
    this.wandservice.getWands().subscribe(
      res => {
        this.wands = res as Wand[]
      }
    )
  }

  filterWands(name:string) {
    this.wandservice.filterWands(name).subscribe(
      res => {
        this.wands = res
        console.log(this.wands)
      }
    )
  }

  filterWandsAngular(name: string) {
    this.wandservice.getWands().subscribe(
      wands => this.wandsWithAngular = wands.filter(wiz => wiz.name.includes(name))
    )
  }

}
