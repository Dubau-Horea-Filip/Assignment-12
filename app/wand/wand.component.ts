import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wand } from './shared/wand.model';
import { WandService } from './shared/wand.service';

@Component({
  selector: 'app-wand',
  templateUrl: './wand.component.html',
  styleUrls: ['./wand.component.css']
})
export class WandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
