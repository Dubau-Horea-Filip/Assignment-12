import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WandService } from '../shared/wand.service';


@Component({
  selector: 'app-wand-update',
  templateUrl: './wand-update.component.html',
  styleUrls: ['./wand-update.component.css']
})
export class WandUpdateComponent implements OnInit {

  constructor(private wandService: WandService,
    private router: Router) { }

  ngOnInit(): void {
  }

  updateWand(id: string, name:string, strength: string, wid: string) {
    if(name == "" || wid == "" || strength == "" || id == ""){
      alert("All fields must be completed")
      return
    }

    if (!Number(id) || Number(id) < 0){
      alert("Id is not valid")
    }

    var regex = /[a-z]/g;
    if (!regex.test(name)) {
      alert("Name is not valid")
      return
    }

    if (!Number(strength) || Number(strength) < 0) {
      alert("Strength is not valid")
      return
    }

    if (!Number(wid) || Number(wid) < 0){
      alert("WizardId is not valid")
    }

    this.wandService.updateWand({
      id: Number(id),
      wizardId: Number(wid),
      name: name,
      strength: Number(strength),
     
     
    }).subscribe(WandDetailComponent => [console.log(WandDetailComponent),
                    alert("Wand updated"), this.router.navigate(["/wands"]), console.log(id,name,strength,wid)])

  }

}
