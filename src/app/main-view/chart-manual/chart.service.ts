import { Injectable } from '@angular/core';
import { of } from 'rxjs';


// TODO this will be the transforation service for the BE model
@Injectable({
    providedIn: 'root'
})
export class ChartPresentationService {

    get() {
        const row1: (ChartElementModel | undefined)[] = [{
            column: 1,
            heading: 'ItemTtranslation',
            title: 'ItemTranslation'
        },
        {
            column: 2,
            prefix: 'IT',
            title: 'IMP.InternTranslation'
        },
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        ];

        const row2: (ChartElementModel | undefined)[] = [{
            column: 1,
            heading: 'ProductTypes',
            title: 'Product_Type_Group.csv'
        },
        {
            column: 2,
            prefix: 'IT',
            title: 'IMP.CSV_Product_Type_Group'
        },
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        ];

        const row3: (ChartElementModel | undefined)[] = [
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            {
                column: 6,
                title: 'DWH.DIM_Intern',
                postfix: 'T'
            },
            undefined,
            undefined,
            {
                column: 9,
                title: 'COPA.DIM_Intern Item',
                postfix: 'T'
            },
            undefined
        ];

        const row4: (ChartElementModel | undefined)[] = [{
            column: 1,
            heading: 'SAP',
            title: 'T024'
        },
        {
            column: 2,
            prefix: 'IT',
            title: 'IMP.SAP_T024'
        },
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        ];

        return of([row1, row2, row3, row4]);
    }
}
