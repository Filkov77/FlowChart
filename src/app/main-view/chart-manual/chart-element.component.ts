import { AfterContentInit, Component, Input, ViewChild } from '@angular/core';

interface Arrow {
    path: string;
    ex: number;
    ey: number;
    cx: number;
    cy: number;
    sx: number;
    sy: number;
    ae: number;
    as: number;
    ec: number;
    endAngleAsDegrees: number;
}

@Component({
    selector: '[app-chart-element]',
    templateUrl: './chart-element.component.html',
    styleUrls: ['./chart-element.component.scss']
})
export class ChartElementComponent implements AfterContentInit{

    @Input()
    chartElement!: ChartElementModel;

    // TODO create a pipe, consder delegating to parent class
    nodeClass = 'node';

    ngAfterContentInit(): void {
        switch(this.chartElement.column) {
            case 1: 
                this.nodeClass = 'node blue';
                break;
            case 2: 
                this.nodeClass = 'node red';
                break;
            case 3: 
                this.nodeClass = 'node green';
                break;
            case 4: 
                this.nodeClass = 'node green';
                break;
            case 5: 
                this.nodeClass = 'node red';
                break;
            case 6: 
                this.nodeClass = 'node green';
                break;
            case 7: 
                this.nodeClass = 'node red';
                break;
            case 8: 
                this.nodeClass = 'node green';
                break;
            case 9: 
                this.nodeClass = 'node yellow';
                break;
            case 10: 
                this.nodeClass = 'node blue';
                break;

        }
    }

}
