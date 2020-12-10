interface ChartElementModel {
    id: number;
    column: number;
    heading?: string;
    prefix?: string;
    postfix?: string;
    title: string;
    fromPoint?: DOMPoint;
    toPoint?: DOMPoint;
}

interface ChartElementEdgeOption {
    id: number;
    outcommingPoint: DOMPoint;
    incommingPoint: DOMPoint;
}
