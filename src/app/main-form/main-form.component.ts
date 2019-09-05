import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DefectsService } from './defects.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  defectTypes = ['délaminage', 'porosité', 'inclusion'];
  mainForm: FormGroup;
  isLoading = false;
  isSubmitted = false;
  serverError = null;


  constructor(private defectsService: DefectsService) { }

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
    // isLoading is used for the spinner effect.
    this.isLoading = true;

    // Add the date to the form data.
    const defectData = {
      ...this.mainForm.value,
      'date': new Date
    }

    // We make the post request in defectsService
    this.defectsService.postDefect(defectData)
      .subscribe(responseData => {
         this.mainForm.reset();
         this.isLoading = false;
         this.isSubmitted = true;
         this.serverError = null;
    }, error => {
      this.isLoading = false;
      this.isSubmitted = true;
      this.serverError = {message: error.message};
    });
  }

}
