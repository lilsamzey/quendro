import { Component } from '@angular/core';

import {ReferralsListComponent} from '../../referrals-list/referrals-list.component'

@Component({
  selector: 'app-outsourcing',
  standalone:true,
  imports: [
    ReferralsListComponent
  ],
  templateUrl: './outsourcing.component.html',
  styleUrl: './outsourcing.component.scss'
})
export class OutsourcingComponent {

}
