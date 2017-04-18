import { Component, OnInit } from '@angular/core';
import { Property } from '../../classes/property';
import { PropertyAnalysisService } from '../../services/property-analysis.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  constructor(private propertyAnalysisService : PropertyAnalysisService) { }

  calculate(property: Property): void{
    console.log("Calculate button pressed.");
    this.propertyAnalysisService.analysisProperty(property);
  }

  ngOnInit() {
  }

}
