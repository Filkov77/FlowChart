import { Component, Input } from '@angular/core';
import { ClusterNode, Edge, Node } from '@swimlane/ngx-graph';

@Component({
    selector: 'app-chart-container',
    templateUrl: './chart-container.component.html',
    styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent {
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
    // clusters = [{ 'id': 'c2', 'childNodeIds': ['2', '3'], label: '' }];
    // clusters = [];
}
