import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { getArrow } from 'perfect-arrows';
import { Observable } from 'rxjs';

import { ChartElementComponent } from './chart-element.component';
import { ChartPresentationService } from './chart.service';

interface Dictionary<T> {
    [Key: string]: T;
}

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
    selector: 'app-chart-manual',
    templateUrl: './chart-manual.component.html',
    styleUrls: ['./chart-manual.component.scss']
})
export class ChartManualComponent implements OnInit, AfterViewInit {

    @ViewChildren(ChartElementComponent) chartElements!: QueryList<ChartElementComponent>;

    arrows!: Arrow[] | undefined;

    chart: (ChartElementModel | undefined)[][] | undefined;

    chartEdgesOptions: Dictionary<ChartElementEdgeOption> = {};

    edges = [[1, 2], [2, 28], [3, 4], [4, 28], [5, 6], [7, 8], [8, 28], [9, 10], [10, 13], [11, 12], [12, 13], [13, 14], [14, 15], [14, 25],
    [15, 16], [17, 18], [18, 19], [19, 20],
    [20, 21], [22, 23], [23, 24], [24, 25], [25, 30], [26, 27], [27, 28], [28, 29], [29, 5], [29, 20], [29, 25]];

    constructor(private chartService: ChartPresentationService) { }

    ngOnInit(): void {
        // TODO add UnsubscribeOnDestroy
        this.chartService.get().subscribe(chart => this.chart = chart);
        // this.chart = this.chartService.get();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.initArrows();
        });
    }

    onSizeChage(chartEdgesOptions: ChartElementEdgeOption) {
        this.chartEdgesOptions[chartEdgesOptions.id.toString()] = chartEdgesOptions;
    }

    @HostListener('window:resize', [])
    private onResize() {
        this.initArrows();
    }

    private initArrows() {

        this.arrows = [];

        this.edges.forEach(tuple => {
            const startElement = this.chartElements.find(el => el.chartElement?.id === tuple[0]);
            const endElement = this.chartElements.find(el => el.chartElement?.id === tuple[1]);

            const startCoord = startElement!.getOutcommingPoint();

            const endCoord = endElement!.getIncomingPoint();

            const arrow = getArrow(
                startCoord.x,
                startCoord.y,
                endCoord.x,
                endCoord.y,
                {
                    bow: 0,
                    stretch: 0,
                    padEnd: 6
                }
            );
            const [sx, sy, cx, cy, ex, ey, ae, as, ec] = arrow;

            this.arrows = [...this.arrows!, {
                path: `M${sx},${sy} Q${cx},${cy} ${ex},${ey}`,
                sx, sy, cx, cy, ex, ey, ae, as, ec,
                endAngleAsDegrees: ae * (180 / Math.PI)
            }];
        });
    }
}
