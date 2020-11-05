import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ClusterNode, Edge, Node } from '@swimlane/ngx-graph';
import { getArrow } from 'perfect-arrows';

@Component({
    selector: 'app-chart-manual',
    templateUrl: './chart-manual.component.html',
    styleUrls: ['./chart-manual.component.scss']
})
export class ChartManualComponent implements AfterViewInit {

    @ViewChild('one')
    one!: ElementRef<HTMLDivElement>;

    @ViewChild('two')
    two!: ElementRef<HTMLDivElement>;

    @ViewChild('three')
    three!: ElementRef<HTMLDivElement>;

    @ViewChild('four')
    four!: ElementRef<HTMLDivElement>;

    @Input() nodes!: Node[];

    // nodes = [{
    //     'id': '1', 'label': 'Title1', 'meta': { 'forceDimensions': false },
    //     'dimension': { 'width': 20, 'height': 20 }, 'position': { 'x': 0, 'y': 0 }, 'data': { 'color': '#a8385d' }
    // },
    // {
    //     'id': '2', 'label': 'Title2', 'meta': { 'forceDimensions': false }, 'dimension': { 'width': 20, 'height': 20 },
    //     'position': { 'x': 0, 'y': 0 }, 'data': { 'color': '#7aa3e5' }
    // }, {
    //     'id': '3', 'label': 'Title3',
    //     'meta': { 'forceDimensions': false }, 'dimension': { 'width': 20, 'height': 20 }, 'position': { 'x': 0, 'y': 0 },
    //     'data': { 'color': '#a27ea8' }
    // }];

    @Input() edges!: Edge[];

    // edges = [{ 'source': '1', 'target': '2', 'id': 'a0tf5' }, { 'source': '1', 'target': '3', 'id': 'aqbjn' }];

    @Input() clusters!: ClusterNode[];

    path: string | undefined;
    ex = 0;
    ey = 0;
    sx = 0;
    sy = 0;
    endAngleAsDegrees = 0;

    ngAfterViewInit() {
        setTimeout(() => {
            this.initArrow();
        });
    }

    @HostListener('window:resize', [])
    private onResize() {
        this.initArrow();
    }

    private initArrow() {
        const firstEl = this.one.nativeElement.getBoundingClientRect();
        const secondEl = this.two.nativeElement.getBoundingClientRect();
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
        this.ex = ex;
        this.ey = ey;
        this.sx = sx;
        this.sy = sy;

        this.endAngleAsDegrees = ae * (180 / Math.PI);

        this.path = `M${sx},${sy} Q${cx},${cy} ${ex},${ey}`;
    }


    // clusters = [{ 'id': 'c2', 'childNodeIds': ['2', '3'], label: '' }];
    // clusters = [];
}
