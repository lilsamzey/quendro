// src/app/components/referrals-list/referrals-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReferralsListService, Referral } from '../referrals-list.service';

@Component({
  selector: 'app-referrals-list',
  templateUrl: './referrals-list.component.html',
  styleUrls: ['./referrals-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ReferralsListComponent implements OnInit {
  // Table data
  referrals: Referral[] = [];
  loading = true;
  error = '';
  
  // Pagination variables
  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  
  // Sorting variables
  sortColumn = 'createdAt';
  sortDirection = 'desc';
  
  // Search variable
  searchTerm = '';
  
  constructor(private referralsService: ReferralsListService) { }

  ngOnInit(): void {
    this.loadReferrals();
  }
  
  // Load referral data
  loadReferrals(): void {
    this.loading = true;
    
    this.referralsService.getReferrals(
      this.currentPage,
      this.pageSize,
      this.sortColumn,
      this.sortDirection,
      this.searchTerm
    ).subscribe({
      next: (response) => {
        this.referrals = response.data;
        this.totalItems = response.pagination.total;
        this.totalPages = response.pagination.totalPages;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load data. Please try again later.';
        this.loading = false;
        console.error('Error loading referrals:', err);
      }
    });
  }
  
  // Change page
  changePage(page: number): void {
    this.currentPage = page;
    this.loadReferrals();
  }
  
  // Change sort column
  changeSort(column: string): void {
    if (this.sortColumn === column) {
      // If same column, toggle sort direction
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // If different column, set new column and default sort direction
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    
    this.currentPage = 1; // Return to first page
    this.loadReferrals();
  }
  
  // Search
  search(): void {
    this.currentPage = 1; // Return to first page
    this.loadReferrals();
  }
  
  // Delete referral
  deleteReferral(id: number): void {
    if (confirm('Are you sure you want to delete this referral?')) {
      this.referralsService.deleteReferral(id).subscribe({
        next: () => {
          this.loadReferrals(); // Refresh the table
        },
        error: (err) => {
          console.error('Error deleting referral:', err);
          alert('An error occurred while deleting the referral.');
        }
      });
    }
  }
  
  // Resend email
  resendEmail(id: number): void {
    this.referralsService.resendEmail(id).subscribe({
      next: () => {
        alert('Email successfully resent.');
        this.loadReferrals(); // Refresh the table
      },
      error: (err) => {
        console.error('Error sending email:', err);
        alert('An error occurred while sending the email.');
      }
    });
  }
}