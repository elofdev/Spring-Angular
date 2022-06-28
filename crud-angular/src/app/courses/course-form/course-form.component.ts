import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  /* declaramos um form (um grupo de campos), chamamos de "formgroup" */

  form: FormGroup;

  /* injeção do FormBuilder...da classe ReactiveFormsModule */
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('onSubmit');
  }

  onCancel() {
    console.log('onCancel');
  }
}
