import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WandService } from '../shared/wand.service';

@Component({
  selector: 'app-wand-new',
  templateUrl: './wand-new.component.html',
  styleUrls: ['./wand-new.component.css']
})
export class WandNewComponent implements OnInit {

  constructor(private wandService: WandService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveWand( name:string, streangth: string, wid: string) {
    if(name == "" || wid == "" || streangth == "" ){
      alert("All fields must be completed")
      return}
    var regex = /[a-z]/g;
    if (!regex.test(name)) {
      alert("Name is not valid")
      return
    }

    if (!Number(streangth) || Number(streangth) < 0) {
      alert("Strength is not valid")
      return
    }

    if (!Number(wid) || Number(wid) < 0){
      alert("WizardId is not valid")
    }

    this.wandService.saveWand({
      id: 0,
      name: name,
      strength: Number(streangth),
      wizardId: Number(wid)
    }).subscribe(WandDetailComponent => [console.log(WandDetailComponent), alert("Wand saved"), this.router.navigate(["/wands"])])

  }

}
