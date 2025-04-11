import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

interface ReferralFormData {
  // Step 1: Personal Information
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  country: string;
  
  // Step 2: Company Details
  yourCompany: string;
  expertise: string;
  referredCompany: string;
  referredWebsite: string;
  industry: string;
  
  // Step 3: Additional Information
  message: string;
  canInvoice: boolean;
  termsAccepted: boolean;
}

interface ValidationErrors {
  step1: {
    fullName: string;
    email: string;
    country: string;
  };
  step2: {
    expertise: string;
    referredCompany: string;
    referredWebsite: string;
    industry: string;
  };
  step3: {
    termsAccepted: string;
  };
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

@Component({
  selector: 'app-referral-prog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './referral-prog.component.html',
  styleUrl: './referral-prog.component.scss'
})
export class ReferralProgComponent {
  // Track current step
  currentStep: number = 1;
  
  // API endpoint
   private apiUrl = 'https://shark-app-9cc2u.ondigitalocean.app/quendro-register';
  //public  apiUrl = 'http://localhost:5000/quendro-register';
  
  // Loading state
  isSubmitting = false;
  
  // Form data object
  formData: ReferralFormData = {
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    country: '',
    yourCompany: '',
    expertise: '',
    referredCompany: '',
    referredWebsite: '',
    industry: '',
    message: '',
    canInvoice: false,
    termsAccepted: false
  };
  
  // Validation errors
  validationErrors: ValidationErrors = {
    step1: { fullName: '', email: '', country: '' },
    step2: { expertise: '', referredCompany: '', referredWebsite: '', industry: '' },
    step3: { termsAccepted: '' }
  };
  
  // Track form submission status
  formSubmitted = false;
  
  // API error message
  errorMessage = '';
  
  constructor(private http: HttpClient) {}
  
  // Navigate to the next step
  nextStep(): void {
    if (this.currentStep === 1) {
      if (this.validateStep1()) {
        this.currentStep++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (this.currentStep === 2) {
      if (this.validateStep2()) {
        this.currentStep++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
  
  // Navigate to the previous step
  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  // Validate Step 1
  validateStep1(): boolean {
    let isValid = true;
    
    // Reset errors
    this.validationErrors.step1 = { fullName: '', email: '', country: '' };
    
    // Validate fullName
    if (!this.formData.fullName.trim()) {
      this.validationErrors.step1.fullName = 'Full name is required';
      isValid = false;
    }
    
    // Validate email
    if (!this.formData.email.trim()) {
      this.validationErrors.step1.email = 'Email is required';
      isValid = false;
    } else if (!this.isValidEmail(this.formData.email)) {
      this.validationErrors.step1.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Validate country
    if (!this.formData.country) {
      this.validationErrors.step1.country = 'Please select your country';
      isValid = false;
    }
    
    return isValid;
  }
  
  // Validate Step 2
  validateStep2(): boolean {
    let isValid = true;
    
    // Reset errors
    this.validationErrors.step2 = { 
      expertise: '', 
      referredCompany: '', 
      referredWebsite: '', 
      industry: '' 
    };
    
    // Validate expertise
    if (!this.formData.expertise) {
      this.validationErrors.step2.expertise = 'Please select your area of expertise';
      isValid = false;
    }
    
    // Validate referredCompany
    if (!this.formData.referredCompany.trim()) {
      this.validationErrors.step2.referredCompany = 'Referred company name is required';
      isValid = false;
    }
    
    // Validate referredWebsite
    if (!this.formData.referredWebsite.trim()) {
      this.validationErrors.step2.referredWebsite = 'Referred company website is required';
      isValid = false;
    } else if (!this.isValidUrl(this.formData.referredWebsite)) {
      this.validationErrors.step2.referredWebsite = 'Please enter a valid URL';
      isValid = false;
    }
    
    // Validate industry
    if (!this.formData.industry.trim()) {
      this.validationErrors.step2.industry = 'Industry is required';
      isValid = false;
    }
    
    return isValid;
  }
  
  // Validate Step 3
  validateStep3(): boolean {
    let isValid = true;
    
    // Reset errors
    this.validationErrors.step3 = { termsAccepted: '' };
    
    // Check if terms are accepted
    if (!this.formData.termsAccepted) {
      this.validationErrors.step3.termsAccepted = 'Please accept the terms and conditions to proceed';
      isValid = false;
    }
    
    return isValid;
  }
  
  // Email validation
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // URL validation
  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  // Submit the form
  submitForm(): void {
    // Validate step 3 first
    if (!this.validateStep3()) {
      console.log('Form validation failed at step 3');
      return;
    }
    
    // Reset error message
    this.errorMessage = '';
    
    // Set loading state
    this.isSubmitting = true;
    
    // Log the data we're about to send
    console.log('Preparing to send form data:', this.formData);
    
    // Prepare email template data
    const emailTemplateData = this.prepareEmailTemplateData();
    console.log('Email template data prepared:', emailTemplateData);
    
    // Log the API endpoint we're using
    console.log('Sending request to:', this.apiUrl);
    
    // Create HTTP headers with detailed logging
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log('Request headers:', headers);
    
    // Log the request payload
    const payload = { formData: this.formData, emailTemplateData };
    console.log('Request payload:', JSON.stringify(payload));
    
    // Send POST request to API endpoint with detailed error handling
    this.http.post<ApiResponse>(
      this.apiUrl, 
      payload, 
      { headers }
    ).subscribe({
      next: (response) => {
        console.log('API Response received:', response);
        this.isSubmitting = false;
        
        if (response.success) {
          console.log('Form submission successful');
          // Show success message
          this.formSubmitted = true;
          
          // Scroll to top of form
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          console.error('API returned error:', response.message);
          this.errorMessage = response.message || 'An error occurred while submitting the form.';
        }
      },
      error: (error) => {
        console.error('API Error details:', error);
        
        // Log more detailed error information
        if (error.status) {
          console.error(`HTTP Status: ${error.status}`);
        }
        
        if (error.statusText) {
          console.error(`Status Text: ${error.statusText}`);
        }
        
        if (error.error) {
          console.error('Error body:', error.error);
        }
        
        if (error.message) {
          console.error('Error message:', error.message);
        }
        
        // Check if it's a network error
        if (!error.status) {
          console.error('This appears to be a network error - the server might be unreachable');
        }
        
        this.isSubmitting = false;
        this.errorMessage = 'Failed to connect to the server. Please try again later.';
      }
    });
  }
  
  // Prepare email template data
  prepareEmailTemplateData(): any {
    // Format the date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Generate a unique reference ID
    const referenceId = 'REF-' + Math.floor(100000 + Math.random() * 900000);
    
    // Return template data
    return {
      referenceId,
      date: formattedDate,
      fullName: this.formData.fullName,
      email: this.formData.email,
      phone: this.formData.phone || 'Not provided',
      country: this.getCountryName(this.formData.country),
      yourCompany: this.formData.yourCompany || 'Not provided',
      expertise: this.getExpertiseName(this.formData.expertise),
      referredCompany: this.formData.referredCompany,
      referredWebsite: this.formData.referredWebsite,
      industry: this.formData.industry,
      canInvoice: this.formData.canInvoice ? 'Yes' : 'No',
      message: this.formData.message || 'None'
    };
  }
  
  // Get human readable country name
  getCountryName(code: string): string {
    const countries: {[key: string]: string} = {
      'de': 'Germany',
      'us': 'United States',
      'uk': 'United Kingdom',
      'fr': 'France',
      'es': 'Spain',
      'it': 'Italy',
      'other': 'Other'
    };
    
    return countries[code] || code;
  }
  
  // Get human readable expertise
  getExpertiseName(code: string): string {
    const expertises: {[key: string]: string} = {
      'software': 'Software Development',
      'hardware': 'Hardware Engineering',
      'ai': 'Artificial Intelligence',
      'cloud': 'Cloud Computing',
      'iot': 'IoT Solutions',
      'consulting': 'IT Consulting',
      'other': 'Other'
    };
    
    return expertises[code] || code;
  }
  
  // Reset the form to submit another referral
  resetForm(): void {
    this.formData = {
      fullName: '',
      email: '',
      phone: '',
      linkedIn: '',
      country: '',
      yourCompany: '',
      expertise: '',
      referredCompany: '',
      referredWebsite: '',
      industry: '',
      message: '',
      canInvoice: false,
      termsAccepted: false
    };
    this.currentStep = 1;
    this.formSubmitted = false;
    this.errorMessage = '';
  }
}