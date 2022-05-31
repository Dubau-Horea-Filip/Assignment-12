import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wand } from '../shared/wand.model';
import { WandService } from '../shared/wand.service';

@Component({
  selector: 'app-wand-detail',
  templateUrl: './wand-detail.component.html',
  styleUrls: ['./wand-detail.component.css']
})
export class WandDetailComponent implements OnInit {

  wand: Wand
  wandId: number = 0

  constructor(private wandService: WandService,
    private router: Router) { }

  ngOnInit(): void {
    this.wandId = Number(localStorage.getItem("wandId"))
    this.getWand()
  }

  getWand() {
    this.wandService.getWand(this.wandId).subscribe(
      res => {
        this.wand = res
        console.log(res)
      }
    )
  }

  goBack() {
    this.router.navigate(["/wizards"])
  }

}
