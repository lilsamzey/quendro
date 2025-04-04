import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mobileMenuOpen: boolean = false;
  activeDropdown: string | null = null;
  
  constructor(private router: Router) {
    // Subscribe to router events to close mobile menu on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
    });
  }
  
  // Mobil menüyü açma/kapama
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.activeDropdown = null;
    }
  }
  
  // Mobil menüyü kapatma
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.activeDropdown = null;
  }
  
  // Dropdown menüyü açma/kapama
  toggleDropdown(name: string): void {
    if (this.activeDropdown === name) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = name;
    }
  }
  
  // Sayfa dışına tıklayınca dropdown'ı kapatma
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.activeDropdown = null;
    }
  }
  
  // Sayfa yenilendiğinde veya route değiştiğinde mobil menüyü kapatma
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 992 && this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
  }
}