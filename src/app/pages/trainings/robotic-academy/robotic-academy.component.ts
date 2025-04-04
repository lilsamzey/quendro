import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-robotic-academy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './robotic-academy.component.html',
  styleUrls: ['./robotic-academy.component.scss']
})
export class RoboticAcademyComponent implements OnInit {
  
  language: 'en' | 'de' = 'en'; // Default language is English
  
  // URLs for embedded content
  private presentationUrls = {
    en: 'https://docs.google.com/presentation/d/1R6OZLvGmzuIQN2vQqpu0gLvtcyxNDoGGDJMRB9Vf9WY/embed?start=false&loop=false&delayms=3000',
    de: 'https://docs.google.com/presentation/d/1OMRWhMiScpmy9w5DrD6MNTGnX_lvRvP5TVaKodsWFXg/embed?start=false&loop=false&delayms=3000'
  };
  
  // Safe URLs for embedded content
  presentationUrl: SafeResourceUrl | undefined;
  registrationFormUrl: SafeResourceUrl;
  
  // Content translations
  content = {
    en: {
      title: 'Game Programming and Basics of Electronic',
      switchLanguage: 'Klicken Sie hier, um auf Deutsch zu sehen',
      detailTitle: 'More Detail',
      detailText: 'To learn more about our course, please click this link!',
      registrationTitle: 'Registration',
      registrationText: 'Please sign the registration form and share with us to attend our course!',
      contactTitle: 'Contact Person',
      contactPerson: 'Serkan Güntin',
      contactPhone: '+49 15906707944',
      mentorTitle: 'Mentor',
      mentorName: 'Saban Kocal (Dipl.-Ing.)',
      locationTitle: 'Location',
      locationAddress: 'Annenstr. 79, 58453 Witten',
      presentationTitle: 'Course Presentation',
      presentationText: 'Explore our interactive course presentation below',
      registrationFormTitle: 'Registration Form',
      registrationFormText: 'Download and sign this form to register for the course',
      courseFeatures: [
        'Interactive game programming sessions',
        'Hands-on electronics workshops',
        'Project-based learning approach',
        'Small group instruction',
        'Take-home electronics projects',
        'Final project showcase'
      ],
      courseTargets: 'This course is designed for:',
      targetAudience: [
        'Children and teenagers (10-16 years)',
        'Beginners with no prior programming experience',
        'Anyone interested in electronics and game development',
        'Students looking for practical STEM education'
      ],
      downloadForm: 'Download Registration Form',
      contactUs: 'Contact Us'
    },
    de: {
      title: 'Spieleprogrammierung und Grundlagen der Elektronik',
      switchLanguage: 'Click to see in English',
      detailTitle: 'Mehr Details',
      detailText: 'Um mehr über unseren Kurs zu erfahren, klicken Sie bitte auf diesen Link!',
      registrationTitle: 'Anmeldung',
      registrationText: 'Bitte unterschreiben Sie das Anmeldeformular und teilen Sie es uns mit, um an unserem Kurs teilzunehmen!',
      contactTitle: 'Kontakt Person',
      contactPerson: 'Serkan Güntin',
      contactPhone: '+49 15906707944',
      mentorTitle: 'Dozent',
      mentorName: 'Saban Kocal (Dipl.-Ing.)',
      locationTitle: 'Kursort',
      locationAddress: 'Annenstr. 79, 58453 Witten',
      presentationTitle: 'Kurspräsentation',
      presentationText: 'Entdecken Sie unsere interaktive Kurspräsentation unten',
      registrationFormTitle: 'Anmeldeformular',
      registrationFormText: 'Laden Sie dieses Formular herunter und unterschreiben Sie es, um sich für den Kurs anzumelden',
      courseFeatures: [
        'Interaktive Spieleprogrammierungssitzungen',
        'Praktische Elektronik-Workshops',
        'Projektbasierter Lernansatz',
        'Unterricht in kleinen Gruppen',
        'Elektronikprojekte zum Mitnehmen',
        'Abschlussprojekt-Präsentation'
      ],
      courseTargets: 'Dieser Kurs ist konzipiert für:',
      targetAudience: [
        'Kinder und Jugendliche (10-16 Jahre)',
        'Anfänger ohne Programmiererfahrung',
        'Alle, die sich für Elektronik und Spieleentwicklung interessieren',
        'Schüler, die nach praktischer MINT-Bildung suchen'
      ],
      downloadForm: 'Anmeldeformular herunterladen',
      contactUs: 'Kontaktieren Sie uns'
    }
  };

  constructor(private sanitizer: DomSanitizer) {
    // Registration form URL is the same for both languages
    this.registrationFormUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.quendro.de/_files/ugd/7e29d2_46648bc676e74bf9ab1238bc3cd7c42c.pdf'
    );
    
    // Initial presentation URL (will be updated in ngOnInit)
    this.updatePresentationUrl();
  }

  ngOnInit(): void {
    // Check browser language preference
    const browserLang = navigator.language;
    if (browserLang.includes('de')) {
      this.language = 'de';
      this.updatePresentationUrl();
    }
  }

  toggleLanguage(): void {
    this.language = this.language === 'en' ? 'de' : 'en';
    this.updatePresentationUrl();
  }
  
  // Update the presentation URL based on the current language
  private updatePresentationUrl(): void {
    this.presentationUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.presentationUrls[this.language]
    );
  }
  
  // Accessor methods for current language content
  get currentContent() {
    return this.content[this.language];
  }
}