import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


import { ReferralProgComponent } from './pages/referral-prog/referral-prog.component';
import { ServicesComponent } from './pages/services/services.component';
import { TechCompetenciesComponent } from './pages/tech-competencies/tech-competencies.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { IndustriesComponent } from './pages/industries/industries.component';


import { SoftwareConsultingComponent } from './pages/services/software-consulting/software-consulting.component';
import { OutsourcingComponent } from './pages/services/outsourcing/outsourcing.component';
import { OutstaffingComponent } from './pages/services/outstaffing/outstaffing.component';
import { DevelopmentTeamsComponent } from './pages/services/development-teams/development-teams.component';
import { CustomSoftwareDevelopmentComponent } from './pages/services/custom-software-development/custom-software-development.component';
import { FpgaBoardBringUpComponent } from './pages/services/fpga-board-bring-up/fpga-board-bring-up.component';
import { ProjectManagementComponent } from './pages/services/project-management/project-management.component';
import { CComponent } from './pages/tech-competencies/c/c.component';
import { CppComponent } from './pages/tech-competencies/cpp/cpp.component';
import { EmbeddedDevelopmentComponent } from './pages/tech-competencies/embedded-development/embedded-development.component';
import { FpgaDevelopmentSimulationComponent } from './pages/tech-competencies/fpga-development-simulation/fpga-development-simulation.component';
import { CsharpDotnetComponent } from './pages/tech-competencies/csharp-dotnet/csharp-dotnet.component';
import { DefenceComponent } from './pages/industries/defence/defence.component';
import { IotComponent } from './pages/industries/iot/iot.component';
import { AutomotiveComponent } from './pages/industries/automotive/automotive.component';
import { AerospaceComponent } from './pages/industries/aerospace/aerospace.component';
import { FintechFinanceComponent } from './pages/industries/fintech-finance/fintech-finance.component';
import { RoboticAcademyComponent } from './pages/trainings/robotic-academy/robotic-academy.component';




export const routes: Routes = [
 
  // { path: '', component: HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },


  { path: 'services', component: ServicesComponent },
  { path: 'services/software-consulting', component: SoftwareConsultingComponent },
  { path: 'services/outsourcing', component: OutsourcingComponent },
  { path: 'services/outstaffing', component: OutstaffingComponent },
  { path: 'services/development-teams', component: DevelopmentTeamsComponent },
  { path: 'services/custom-software-development', component: CustomSoftwareDevelopmentComponent },
  { path: 'services/fpga-board-bring-up', component: FpgaBoardBringUpComponent },
  { path: 'services/project-management', component: ProjectManagementComponent },

  
  
  { path: 'referral-prog', component: ReferralProgComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'tech-competencies', component: TechCompetenciesComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'trainings/robotic-academy', component: RoboticAcademyComponent },


  { path: 'tech-competencies/c', component: CComponent },
{ path: 'tech-competencies/cpp', component: CppComponent },
{ path: 'tech-competencies/embedded-development', component: EmbeddedDevelopmentComponent },
{ path: 'tech-competencies/fpga-development-simulation', component: FpgaDevelopmentSimulationComponent },
{ path: 'tech-competencies/csharp-dotnet', component: CsharpDotnetComponent },


{ path: 'industries/defence', component: DefenceComponent },
  { path: 'industries/iot', component: IotComponent },
  { path: 'industries/automotive', component: AutomotiveComponent },
  { path: 'industries/aerospace', component: AerospaceComponent },
  { path: 'industries/fintech-finance', component: FintechFinanceComponent },
 
  { path: '**', redirectTo: '' }
];
