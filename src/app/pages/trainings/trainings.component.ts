import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Course {
  id: string;
  title: string;
  icon: string;
  description: string;
  level: string;
  duration: string;
  topics: string[];
}

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  
  courses: Course[] = [
    {
      id: 'c-programming',
      title: 'C Programming Fundamentals',
      icon: 'bi-code-slash',
      description: 'Master the foundations of C programming with hands-on projects and real-world applications.',
      level: 'Beginner to Intermediate',
      duration: '8 weeks',
      topics: [
        'C Language Basics',
        'Data Types and Variables',
        'Control Structures',
        'Functions and Modular Programming',
        'Arrays and Strings',
        'Pointers and Memory Management',
        'File I/O Operations',
        'Structures and Unions'
      ]
    },
    {
      id: 'advanced-c',
      title: 'Advanced C Programming',
      icon: 'bi-braces',
      description: 'Take your C programming skills to the next level with advanced concepts and techniques.',
      level: 'Intermediate to Advanced',
      duration: '10 weeks',
      topics: [
        'Advanced Pointer Concepts',
        'Dynamic Memory Allocation',
        'Function Pointers',
        'Multi-threading in C',
        'Network Programming',
        'Advanced Data Structures',
        'Optimization Techniques',
        'Building Robust C Applications'
      ]
    },
    {
      id: 'modern-cpp',
      title: 'Modern C++ (C++11/14/17)',
      icon: 'bi-cpu',
      description: 'Learn the latest features and best practices in modern C++ development.',
      level: 'Intermediate to Advanced',
      duration: '12 weeks',
      topics: [
        'C++11 Core Features',
        'Auto Type Deduction',
        'Lambda Expressions',
        'Smart Pointers',
        'Move Semantics',
        'C++14 Enhancements',
        'C++17 Features',
        'Templates and Meta-programming',
        'STL Containers and Algorithms',
        'Concurrent Programming'
      ]
    },
    {
      id: 'embedded-cpp',
      title: 'Embedded Programming with C++',
      icon: 'bi-motherboard',
      description: 'Develop efficient and reliable embedded software using modern C++ techniques.',
      level: 'Advanced',
      duration: '10 weeks',
      topics: [
        'C++ for Embedded Systems',
        'Real-Time Constraints',
        'Memory Management',
        'Interrupt Handling',
        'Device Drivers Development',
        'Optimization for Resource-Constrained Systems',
        'RTOS Integration',
        'Testing and Debugging Embedded C++'
      ]
    }
  ];

  trainingFeatures: any[] = [
    {
      icon: 'bi-person-video3',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of practical experience.'
    },
    {
      icon: 'bi-laptop',
      title: 'Hands-on Approach',
      description: 'Apply concepts through practical exercises and real-world projects.'
    },
    {
      icon: 'bi-clock-history',
      title: 'Flexible Schedule',
      description: 'Access course materials on your own time with our online learning platform.'
    },
    {
      icon: 'bi-chat-dots',
      title: 'Interactive Sessions',
      description: 'Engage in live Q&A sessions and discussions with instructors and peers.'
    },
    {
      icon: 'bi-patch-check',
      title: 'Industry-Relevant Content',
      description: 'Curriculum designed to meet current industry demands and best practices.'
    },
    {
      icon: 'bi-book',
      title: 'Comprehensive Resources',
      description: 'Access to detailed course materials, code examples, and reference documentation.'
    }
  ];

  activeTab: string = 'all';

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }
}