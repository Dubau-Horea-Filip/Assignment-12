import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wizard } from '../shared/wizard.model';
import { WizardService } from '../shared/wizard.service';

@Component({
  selector: 'app-wizard-detail',
  templateUrl: './wizard-detail.component.html',
  styleUrls: ['./wizard-detail.component.css']
})
export class WizardDetailComponent implements OnInit {
  
  wizard: Wizard
  wizardId: number = 0

  constructor(private wizardService: WizardService,
    private router: Router) { }

  ngOnInit(): void {
    this.wizardId = Number(localStorage.getItem("wizardId"))
    this.getWizard()
  }

  getWizard() {
    this.wizardService.getWizard(this.wizardId).subscribe(
      res => {
        this.wizard = res
        console.log(res)
      }
    )
  }

  goBack() {
    this.router.navigate(["/wizards"])
  }

  updateWizard( name: string, age: string, pet: string) {
    if(name == "" || age == "" || pet == ""  ){
      alert("All fields must be completed")
      return
    }
    

    var regex = /[a-z]/g;
    if (!regex.test(name)) {
      alert("Name is not valid")
      return
    }

    if (!regex.test(pet)) {
      alert("PetName is not valid")
      return
    }

    if (!Number(age) || Number(age) < 0){
      alert("Age is not valid")
    }
    this.wizardService.updateWizard({
      id: this.wizard.id,
      name: name,
      age: Number(age),
      pet: pet
    }).subscribe(wizard => [console.log(wizard), alert("Wizard saved"), this.router.navigate(["/wizards"])])

    
  }

}
