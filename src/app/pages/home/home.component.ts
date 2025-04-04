import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Testimonial {
  text: string;
  author: string;
  position: string;
  image: string;
}

interface BlogPost {
  title: string;
  summary: string;
  date: string;
  image: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  route: string;
}

interface TechCompetency {
  icon: string;
  title: string;
  description: string;
}

interface Industry {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Services data
  services: Service[] = [
    {
      icon: 'bi-code-square',
      title: 'Software Development',
      description: 'Custom software solutions designed to meet your specific business requirements and challenges.',
      route: '/services/software'
    },
    {
      icon: 'bi-cpu',
      title: 'FPGA Development',
      description: 'High-performance hardware solutions with fast processing capabilities for complex applications.',
      route: '/services/fpga'
    },
    {
      icon: 'bi-graph-up',
      title: 'Research & Design',
      description: 'Innovation-driven research and design services to keep you ahead of the competition.',
      route: '/services/research'
    },
    {
      icon: 'bi-lamp',
      title: 'Cross Innovation',
      description: 'Interdisciplinary approaches to solve complex problems with innovative thinking.',
      route: '/services/innovation'
    }
  ];
  
  // Tech competencies data
  techCompetencies: TechCompetency[] = [
    {
      icon: 'bi-cloud',
      title: 'Cloud Computing',
      description: 'AWS, Azure, Google Cloud expertise with scalable infrastructure solutions.'
    },
    {
      icon: 'bi-hdd-network',
      title: 'IoT Solutions',
      description: 'End-to-end IoT implementations with sensor integration and data analysis.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Cybersecurity',
      description: 'Robust security solutions to protect your valuable data and systems.'
    },
    {
      icon: 'bi-reception-4',
      title: '5G Technology',
      description: 'Next-generation connectivity solutions for high-speed applications.'
    }
  ];
  
  // Industries data
  industries: Industry[] = [
    { icon: 'bi-building', name: 'Manufacturing' },
    { icon: 'bi-heart-pulse', name: 'Healthcare' },
    { icon: 'bi-bank', name: 'Finance' },
    { icon: 'bi-truck', name: 'Logistics' },
    { icon: 'bi-basket', name: 'Retail' },
    { icon: 'bi-lightning', name: 'Energy' }
  ];

  // Testimonial data
  testimonials: Testimonial[] = [
    {
      text: "Quendro's expertise in FPGA development helped us optimize our manufacturing processes, resulting in a 30% increase in efficiency. Highly recommended!",
      author: "Robert Schneider",
      position: "CTO, TechManufacturing GmbH",
      image: "images/robert.png"
    },
    {
      text: "We partnered with Quendro for our cloud migration project. Their team delivered the solution on time and within budget, exceeding our expectations.",
      author: "Anna Müller",
      position: "IT Director, HealthTech Solutions",
      image: "images/anna.png"
    }
  ];
  
  // Blog posts data
  blogPosts: BlogPost[] = [
    {
      title: "The Future of FPGA in Modern Computing",
      summary: "Exploring how FPGAs are revolutionizing computing architecture and performance.",
      date: "Mar 10, 2025",
      image: "images/blog1.png"
    },
    {
      title: "Cross-Innovation: Breaking Industry Barriers",
      summary: "How interdisciplinary approaches are solving complex business challenges.",
      date: "Feb 25, 2025",
      image: "images/blog2.png"
    },
    {
      title: "Securing IoT Devices in Industrial Settings",
      summary: "Best practices for maintaining cybersecurity in connected industrial environments.",
      date: "Feb 12, 2025",
      image: "images/blog3.png"
    }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
    // Initialize animations or load initial data
    this.initializeAnimations();
  }
  
  private initializeAnimations(): void {
    // Add any animation initialization here if needed
    document.addEventListener('DOMContentLoaded', () => {
      // Optional: Add scroll-based animations or other initializations
    });
  }
}