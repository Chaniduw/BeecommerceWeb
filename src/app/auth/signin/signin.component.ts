import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LogoComponent } from '../../shared/logo/logo.component';
import { validateEmail } from '../../utils/utils';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LogoComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  @Output() switchToSignUpEvent = new EventEmitter<void>();

  signInForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  async onSubmit() {
    if (this.signInForm.valid) {
      this.loading = true;
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Sign in successful!', this.signInForm.value);
        // Handle successful sign in
      } catch (error) {
        console.error('Sign in failed:', error);
        // Handle error
      } finally {
        this.loading = false;
      }
    }
  }

  switchToSignUp() {
    this.switchToSignUpEvent.emit();
  }
}
