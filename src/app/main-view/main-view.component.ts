import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ClusterNode, Edge, Node } from '@swimlane/ngx-graph';
import { Observable } from 'rxjs';

import { ChartService } from 'app/backend-api/chart.service';
import { ChartResponse } from 'app/backend-api/models/chart-response.i';

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

    chartData!: Observable<ChartResponse>;

    nodes!: Node[];

    edges!: Edge[];

    clusters!: ClusterNode[];

    constructor(private chartService: ChartService) { }

    ngOnInit() {
        this.chartData = this.chartService.get();

        // TODO subscribtion destruction
        this.chartData.subscribe(chartResponse => {
            this.nodes = chartResponse.elements.reduce((acc: Node[], el) => {
                acc.push({
                    id: el.id,
                    label: el.title
                });
                return acc;
            }, []);

            this.edges = chartResponse.elements.reduce((acc: Edge[], el) => {

                if (el.outgoing) {
                    el.outgoing.forEach(outEl => {
                        acc.push({
                            source: el.id,
                            target: outEl
                        });
                    });
                }
                return acc;
            }, []);

            this.clusters = chartResponse.elements.reduce((acc: ClusterNode[], el) => {
                const index = acc.findIndex(cl => cl.id === 'c' + el.level.toString());

                if (index === -1) {
                    acc.push({
                        id: 'c' + el.level.toString(),
                        childNodeIds: [el.id],
                        label: el.level.toString()
                    });
                } else {
                    acc[index].childNodeIds!.push(el.id);
                }
                return acc;
            }, []);
        });
    }

}
