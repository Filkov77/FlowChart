import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { getArrow } from 'perfect-arrows';
import { Observable } from 'rxjs';
import { ChartPresentationService } from './chart.service';

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

    @ViewChild('one')
    one!: ElementRef<HTMLDivElement>;

    @ViewChild('two')
    two!: ElementRef<HTMLDivElement>;

    @ViewChild('three')
    three!: ElementRef<HTMLDivElement>;

    @ViewChild('four')
    four!: ElementRef<HTMLDivElement>;

    arrows!: Arrow[] | undefined;

    elementOne: ChartElementModel = {
        column: 1,
        heading: 'ItemTranslation',
        prefix: 'IT',
        title: 'ItemTranslation'
    };

    chart: Observable<(ChartElementModel | undefined)[][]> | undefined;

    constructor(private chartService: ChartPresentationService) { }

    ngOnInit(): void {
        this.chart = this.chartService.get();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.initArrows();
        });
    }

    @HostListener('window:resize', [])
    private onResize() {
        this.initArrows();
    }

    private initArrows() {
        const elements: [ElementRef<HTMLDivElement>, ElementRef<HTMLDivElement>][] = [
            [this.one, this.two],
            [this.three, this.four]
        ];

        this.arrows = [];

        elements.forEach(tuple => {
            const firstEl = tuple[0].nativeElement.getBoundingClientRect();
            const secondEl = tuple[1].nativeElement.getBoundingClientRect();
            const p1 = { x: firstEl.x + firstEl.width, y: (firstEl.y + firstEl.height / 2) };
            const p2 = { x: secondEl.x, y: (secondEl.y + secondEl.height / 2) };

            const arrow = getArrow(
                p1.x,
                p1.y,
                p2.x,
                p2.y,
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
