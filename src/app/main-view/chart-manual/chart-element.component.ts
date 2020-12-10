import { AfterContentInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: '[app-chart-element]',
    templateUrl: './chart-element.component.html',
    styleUrls: ['./chart-element.component.scss']
})
export class ChartElementComponent implements AfterContentInit {

    @ViewChild('prefix')
    prefix: ElementRef<HTMLDivElement> | undefined;

    @ViewChild('element')
    element!: ElementRef<HTMLDivElement>;

    @ViewChild('postfix')
    postfix!: ElementRef<HTMLDivElement> | undefined;

    @Input()
    chartElement: ChartElementModel | undefined;

    @Output()
    edgeOptionsChange = new EventEmitter<ChartElementEdgeOption>();

    // TODO create a pipe, consder delegating to parent class
    nodeClass = 'node';

    ngAfterContentInit(): void {
        switch (this.chartElement?.column) {
            case 1:
                this.nodeClass = 'node blue';
                break;
            case 2:
                this.nodeClass = 'node yellow';
                break;
            case 3:
                this.nodeClass = 'node sapphire';
                break;
            case 4:
                this.nodeClass = 'node sapphire';
                break;
            case 5:
                this.nodeClass = 'node yellow';
                break;
            case 6:
                this.nodeClass = 'node sapphire';
                break;
            case 7:
                this.nodeClass = 'node yellow';
                break;
            case 8:
                this.nodeClass = 'node sapphire';
                break;
            case 9:
                this.nodeClass = 'node emerald';
                break;
            case 10:
                this.nodeClass = 'node purple';
                break;
        }
    }

    getIncomingPoint() {
        const incomingEdgeElement = this.prefix ?? this.element;
        const incomingEdgeElementRect = incomingEdgeElement.nativeElement.getBoundingClientRect();
        return {
            x: incomingEdgeElementRect.x,
            y: (incomingEdgeElementRect.y + incomingEdgeElementRect.height / 2)
        };
    }

    getOutcommingPoint() {
        const outcommingEdgeElement = this.postfix ?? this.element;
        const outcomingEdgeElementRect = outcommingEdgeElement.nativeElement.getBoundingClientRect();
        return {
            x: outcomingEdgeElementRect.x + outcomingEdgeElementRect.width,
            y: (outcomingEdgeElementRect.y + outcomingEdgeElementRect.height / 2)
        };
    }
}
