import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department=[
  {
    id:"1",
    title:"airanotical",
    image:"../../../assets/airanotical.jpg",
  },
  {
    id:"2",
    title:"Banking & Financial Service",
    image:"../../../assets/bandf.jpg",
  },
  {
    id:"3",
    title:"GIS SERVICES",
    image:"../../../assets/gis.jpg",
  },
  {
    id:"4",
    title:"Healthcare",
    image:"../../../assets/health.jpg",
  },
  {
    id:"5",
    title:"Insurance",
    image:"../../../assets/insurance.jpg",
  },
  {
    id:"6",
    title:"mobility",
    image:"../../../assets/mobility.jpg",
  },
  ]

}
