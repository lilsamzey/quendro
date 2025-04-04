import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  consent: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Contact form data
  formData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    consent: false
  };
  
  // Track form submission status
  submitted = false;
  
  // Form submission handler
  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    
    // Here you would typically send the form data to your backend API
    // For demonstration, we'll just set submitted to true
    this.submitted = true;
    
    // Reset form after submission (optional)
    // this.resetForm();
  }
  
  // Reset form method
  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      consent: false
    };
    this.submitted = false;
  }
}