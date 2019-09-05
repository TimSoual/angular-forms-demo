import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  defectTypes = ['délaminage', 'porosité', 'inclusion'];
  mainForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // We initialize the from group with validators.
    this.mainForm = new FormGroup({
      'defectType': new FormControl(null, Validators.required),
      'operatorName': new FormControl(null, [Validators.required, this.validateOperatorName.bind(this)]),
      'comments': new FormControl(null)
    });
  }

  validateOperatorName(control: FormControl): {[s: string]: boolean} {
    // This validator sets the nameHasNumber error to true if the operator name has a number in it.
    if (/\d/.test(control.value)) {
      return {'nameHasNumber': true};
    }
    return null;
  }

  onSubmit() {
    console.log('form submitted: ', this.mainForm);
  }

}
