import { Component, OnInit } from '@angular/core';
import { PeopleEntityService } from 'src/app/people/services/data/people-entity.service';
import { Person } from 'src/app/people/services/data/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person-shell',
  templateUrl: './add-person-shell.component.html',
  styleUrls: ['./add-person-shell.component.scss']
})
export class AddPersonShellComponent implements OnInit {

  constructor(private entityService: PeopleEntityService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmitted(form: any) {
    const person: Person = {
      firstName: form.firstName,
      lastName: form.lastName
    }
    this.entityService.add(person).subscribe(
      () => {
        this.router.navigateByUrl('/people');
      }
    );

  }

}
