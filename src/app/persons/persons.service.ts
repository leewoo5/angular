import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class PersonsService {
  persons:string[] = ['Steve', 'Park', 'Jerry']

  addPerson(name: string) {
    this.persons.push(name)
  }
}
