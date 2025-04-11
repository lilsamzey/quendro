// src/app/services/referrals-list.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Referral {
  id: number;
  referenceId: string;
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  yourCompany?: string;
  expertise?: string;
  referredCompany: string;
  referredWebsite?: string;
  industry?: string;
  canInvoice: boolean;
  message?: string;
  emailSent: boolean;
  emailSentDate?: string;
  emailError?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReferralsResponse {
  success: boolean;
  data: Referral[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ReferralResponse {
  success: boolean;
  data: Referral;
}

@Injectable({
  providedIn: 'root'
})
export class ReferralsListService {
  // API endpoint
  private apiUrl = 'https://shark-app-9cc2u.ondigitalocean.app/quendro-register';
  //public apiUrl = 'http://localhost:5000/quendro-register';
  constructor(private http: HttpClient) { }

  /**
   * Tüm referans kayıtlarını getir
   * @param page Sayfa numarası
   * @param limit Sayfa başına kayıt sayısı
   * @param sortColumn Sıralama kolonu
   * @param sortDirection Sıralama yönü (asc/desc)
   * @param searchTerm Arama terimi
   * @returns Observable<ReferralsResponse>
   */
  getReferrals(
    page: number = 1,
    limit: number = 10,
    sortColumn: string = 'createdAt',
    sortDirection: string = 'desc',
    searchTerm: string = ''
  ): Observable<ReferralsResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('sortColumn', sortColumn)
      .set('sortDirection', sortDirection);

    // Arama terimi varsa ekle
    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get<ReferralsResponse>(`${this.apiUrl}/referrals`, { params });
  }

  /**
   * Belirli bir referans kaydını getir
   * @param id Referans ID
   * @returns Observable<ReferralResponse>
   */
  getReferralById(id: number): Observable<ReferralResponse> {
    return this.http.get<ReferralResponse>(`${this.apiUrl}/referrals/${id}`);
  }

  /**
   * Referans kaydını sil
   * @param id Silinecek kaydın ID'si
   * @returns Observable<any>
   */
  deleteReferral(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/referrals/${id}`);
  }

  /**
   * Referans kaydını güncelle
   * @param id Güncellenecek kaydın ID'si
   * @param referralData Güncellenecek veriler
   * @returns Observable<any>
   */
  updateReferral(id: number, referralData: Partial<Referral>): Observable<any> {
    return this.http.put(`${this.apiUrl}/referrals/${id}`, referralData);
  }

  /**
   * Başarısız e-postayı yeniden gönder
   * @param id Referans ID
   * @returns Observable<any>
   */
  resendEmail(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/referrals/${id}/resend-email`, {});
  }
}