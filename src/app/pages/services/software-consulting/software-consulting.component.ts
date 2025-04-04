import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ConsultingFeature {
  id: string;
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-software-consulting',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './software-consulting.component.html',
  styleUrls: ['./software-consulting.component.scss']
})
export class SoftwareConsultingComponent implements OnInit {
  
  consultingFeatures: ConsultingFeature[] = [
    {
      id: 'rapid-prototyping',
      title: 'Rapid Prototyping',
      icon: 'bi-lightning-charge',
      description: 'We offer rapid prototyping embedded solutions to help you bring your ideas to life quickly and effectively.'
    },
    {
      id: 'microcontrollers',
      title: 'Microcontrollers',
      icon: 'bi-cpu',
      description: 'We develop projects with popular microcontrollers such as ESP32, STM32, Nordic nRF Series and Arduino.'
    },
    {
      id: 'communication-protocols',
      title: 'Communication Protocols',
      icon: 'bi-hdd-network',
      description: 'We use various communication protocols such as BLE (Bluetooth Low Energy), WiFi 6, I2C, SPI, UART, LoRa, TCP/IP, UDP and RS-232.'
    },
    {
      id: 'expertise',
      title: 'Diverse Expertise',
      icon: 'bi-people',
      description: 'We have a dynamic team with expertise in Software (C, C++), FPGA (Verilog, VHDL), and Electronic HW development.'
    },
    {
      id: 'fpga-integration',
      title: 'FPGA Integration',
      icon: 'bi-grid-3x3-gap',
      description: 'We are mostly working on Systems, which work in combination with FPGA (Field Programming Gate Arrays), ADC and DAC.'
    },
    {
      id: 'high-speed-data',
      title: 'High-Speed Data Transfer',
      icon: 'bi-speedometer2',
      description: 'We have more than 15 years experience about high speed data transfer. As an example DMA (Direct Memory Access).'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }
}