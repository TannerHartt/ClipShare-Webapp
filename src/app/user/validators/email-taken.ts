import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmailTaken implements AsyncValidator {

  constructor(private auth: AngularFireAuth) {
  }

  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const response = await this.auth.fetchSignInMethodsForEmail(control.value);
    return response.length ? { emailTaken: true } : null;
  }
}