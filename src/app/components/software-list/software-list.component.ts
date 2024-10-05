import { Component } from '@angular/core';

// Define an interface for Software
interface Software {
  name: string;
  version: string;
}

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css'],
})
export class SoftwareListComponent {
  // Initialize the software array with name and version
  software: Software[] = [
    { name: 'Microsoft Word', version: '2021' },
    { name: 'Adobe Photoshop', version: '2023' },
    { name: 'Google Chrome', version: '116.0.5845.96' },
    { name: 'Visual Studio Code', version: '1.82' },
    { name: 'Slack', version: '4.31.2' },
    { name: 'Zoom', version: '5.15.6' },
    { name: 'Spotify', version: '1.2.0.1114' },
    { name: 'Notepad++', version: '8.4' },
    { name: 'Microsoft Excel', version: '2021' },
    { name: 'AutoCAD', version: '2023' },
  ];

  newSoftware: string = '';
  newVersion: string = ''; // For input of the new software version

  // Function to add a new software
  addSoftware() {
    if (this.newSoftware && this.newVersion) {
      this.software.push({ name: this.newSoftware, version: this.newVersion });
      this.newSoftware = ''; // Clear the software input field
      this.newVersion = ''; // Clear the version input field
    }
  }

  // Function to remove a software by index
  removeSoftware(index: number) {
    this.software.splice(index, 1);
  }
}
