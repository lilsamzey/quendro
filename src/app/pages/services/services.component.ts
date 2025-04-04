import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  
  serviceCategories: ServiceCategory[] = [
    {
      id: 'embedded-systems',
      title: 'Embedded Systems',
      icon: 'bi-cpu',
      description: 'Expertise with microcontrollers like ESP32, STM32, Nordic nRF Series, and Arduino.'
    },
    {
      id: 'software-development',
      title: 'Software Development',
      icon: 'bi-code-slash',
      description: 'Specialized in C and C++ for embedded and high-performance applications.'
    },
    {
      id: 'fpga-development',
      title: 'FPGA Development',
      icon: 'bi-grid-3x3-gap',
      description: 'Development using Verilog and VHDL with experience on different Xilinx chips.'
    },
    {
      id: 'electronic-hw',
      title: 'Electronic Hardware',
      icon: 'bi-motherboard',
      description: 'Custom electronic hardware design and implementation for specialized applications.'
    },
    {
      id: 'communication-protocols',
      title: 'Communication Protocols',
      icon: 'bi-hdd-network',
      description: 'Implementation of BLE, WiFi 6, I2C, SPI, UART, LoRa, TCP/IP, UDP, and RS-232.'
    },
    {
      id: 'operating-systems',
      title: 'Operating Systems',
      icon: 'bi-layers',
      description: 'Real-Time OS, Bare Metal CPU, Yocto/Petalinux based Embedded Linux expertise.'
    }
  ];

  activeSection: string = 'overview';

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  setActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
  }

  // For animation triggers
  isElementInView(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}