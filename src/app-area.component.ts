// @ts-ignore
import { Component, OnInit } from "@angular/core";
// @ts-ignore
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-area",
  template:
    ` <form [formGroup]="form">
    <div>
      <h2>Angular Recative Form</h2>
      <input type="text" placeholder="{{ form.value.firstname }}"
      class="form-control" formControlName="firstname"/><br />
      <input type="text" placeholder="{{ form.value.age }}"
      class="form-control" formControlName="age"/><br />
      <input type="text" placeholder="{{ form.value.lastname }}"
      class="form-control" formControlName="lastname"/><br />
      <input type="text" placeholder="{{ form.value.twitter }}"
      class="form-control" formControlName="twitter"/><br />
    </div>
  </form>` + `<pre>{{ form.value | json }}</pre>`,
  styles: []
})
export class MainAppComponent implements OnInit {
  form: FormGroup;
  person = {
    firstname: "Coder",
    age: 25,
    lastname: "Byte",
    twitter: "@coderbyte"
  };
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}
