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
    this.mainForm = new FormGroup({
      'defectType': new FormControl(null, Validators.required),
      'operatorName': new FormControl(null, Validators.required),
      'comments': new FormControl(null)
    });
  }

  onSubmit() {
    console.log('form submitted: ', this.mainForm);
  }

}
