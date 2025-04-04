import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Competency {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-tech-competencies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tech-competencies.component.html',
  styleUrls: ['./tech-competencies.component.scss']
})
export class TechCompetenciesComponent implements OnInit {
  
  coreCompetencies: Competency[] = [
    {
      id: 'software-development',
      title: 'Software Development',
      icon: 'bi-code-slash',
      description: 'Expertise in C and C++ programming, including modern C++ standards.',
      skills: [
        'C/C++ Programming',
        'Modern C++ (C++11, C++14, C++17)',
        'Embedded Software Development',
        'Algorithm Design & Optimization',
        'Software Architecture'
      ]
    },
    {
      id: 'fpga-development',
      title: 'FPGA Development',
      icon: 'bi-cpu',
      description: 'Design and implementation of FPGA systems using Verilog and VHDL.',
      skills: [
        'Verilog',
        'VHDL',
        'Xilinx FPGA (Kintex, Virtex, ZYNQ, ZYNQ Ultrascale, Spartan)',
        'RTL Design',
        'Timing Analysis',
        'Board Bring-up'
      ]
    },
    {
      id: 'hardware-design',
      title: 'Electronic Hardware',
      icon: 'bi-motherboard',
      description: 'Development of electronic hardware components and systems.',
      skills: [
        'Integrated Circuit Design',
        'ADC/DAC Integration',
        'PCB Design',
        'Signal Processing',
        'High-Speed Interfaces'
      ]
    },
    {
      id: 'embedded-systems',
      title: 'Embedded Systems',
      icon: 'bi-layers',
      description: 'Design and implementation of embedded systems with various technologies.',
      skills: [
        'Real-Time Operating Systems',
        'Bare Metal CPU Programming',
        'Yocto/Petalinux Based Embedded Linux',
        'Linux Devicetree Customization',
        'Firmware Development'
      ]
    },
    {
      id: 'communication-protocols',
      title: 'Communication Protocols',
      icon: 'bi-hdd-network',
      description: 'Implementation of various communication protocols on FPGA and CPU platforms.',
      skills: [
        'SFP+',
        'SPI',
        'I2C',
        '1-wire',
        'TCP/IP',
        'UDP',
        'PCI-e',
        'Custom Protocol Development'
      ]
    },
    {
      id: 'high-speed-data',
      title: 'High-Speed Data Transfer',
      icon: 'bi-speedometer2',
      description: 'Over 10 years of experience with high-speed data transfer technologies.',
      skills: [
        'Direct Memory Access (DMA)',
        'High-Throughput System Design',
        'Data Streaming',
        'Performance Optimization',
        'Low-Latency Systems'
      ]
    }
  ];

  xilinxPlatforms: string[] = [
    'Kintex', 
    'Virtex', 
    'ZYNQ', 
    'ZYNQ Ultrascale', 
    'Spartan'
  ];

  communicationProtocols: string[] = [
    'SFP+', 
    'SPI', 
    'I2C', 
    '1-wire', 
    'TCP/IP', 
    'UDP', 
    'PCI-e'
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }
}