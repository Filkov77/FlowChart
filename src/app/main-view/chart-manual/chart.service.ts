import { Injectable } from '@angular/core';
import { of } from 'rxjs';


// TODO this will be the transforation service for the BE model
@Injectable({
    providedIn: 'root'
})
export class ChartPresentationService {

    get() {
        const row1: (ChartElementModel | undefined)[] = [{
            id: 1,
            column: 1,
            heading: 'ItemTtranslation',
            title: 'ItemTranslation'
        },
        {
            id: 2,
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
            id: 3,
            column: 1,
            heading: 'ProductTypes',
            title: 'Product_Type_Group.csv'
        },
        {
            id: 4,
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
                id: 5,
                column: 6,
                title: 'DWH.DIM_Intern',
                postfix: 'T'
            },
            undefined,
            undefined,
            {
                id: 6,
                column: 9,
                title: 'COPA.DIM_Intern Item',
                postfix: 'T'
            },
            undefined
        ];

        const row4: (ChartElementModel | undefined)[] = [{
            id: 7,
            column: 1,
            heading: 'SAP',
            title: 'T024'
        },
        {
            id: 8,
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

        const row5: (ChartElementModel | undefined)[] = [{
            id: 9,
            column: 1,
            title: 'ZBILAN'
        },
        {
            id: 10,
            column: 2,
            prefix: 'IT',
            title: 'IMP.SAP_ZBILAN'
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

        const row6: (ChartElementModel | undefined)[] = [{
            id: 11,
            column: 1,
            title: 'ZBILIF'
        },
        {
            id: 12,
            column: 2,
            prefix: 'IT',
            title: 'IMP.SAP_ZBILIF'
        },
        {
            id: 13,
            column: 3,
            postfix: 'T',
            title: 'IMP.SAP_ZBILIF_V'
        },
            undefined,
        {
            id: 14,
            column: 5,
            prefix: 'HT',
            title: 'STG.SAP_ZBILIF_V'
        },
        {
            id: 15,
            column: 6,
            postfix: 'T',
            title: 'DWH.DIM_Supplier'
        },
            undefined,
            undefined,
        {
            id: 16,
            column: 9,
            postfix: 'T',
            title: 'COPA.DIM_Supplier Supplier'
        },
            undefined,
        ];

        const row7: (ChartElementModel | undefined)[] = [{
            id: 17,
            column: 1,
            title: 'ZBILOG'
        },
        {
            id: 18,
            column: 2,
            prefix: 'IT',
            title: 'IMP.SAP_ZBILOG'
        },
            undefined,
            undefined,
        {
            id: 19,
            column: 5,
            prefix: 'HT',
            title: 'STG.SAP_ZBILOG'
        },
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        ];

        const row8: (ChartElementModel | undefined)[] = [
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            {
                id: 20,
                column: 6,
                title: 'DWH.FAC_Purchase_Order',
                postfix: 'T'
            },
            undefined,
            undefined,
            undefined,
            {
                id: 21,
                column: 10,
                title: 'PURCH.FAC_Purchase_Order',
                postfix: 'T'
            }
        ];

        const row9: (ChartElementModel | undefined)[] = [{
            id: 22,
            column: 1,
            title: 'ZBILOG2'
        },
        {
            id: 23,
            column: 2,
            prefix: 'IT',
            title: 'IMP.SAP_ZBILOG2'
        },
            undefined,
            undefined,
        {
            id: 24,
            column: 5,
            prefix: 'HT',
            title: 'STG.SAP_ZBILOG'
        },
        {
            id: 25,
            column: 6,
            title: 'DWH.FAC_Purchasing',
            postfix: 'T'
        },
            undefined,
            undefined,
            undefined,
            undefined,
        ];

        const row10: (ChartElementModel | undefined)[] = [{
            id: 26,
            column: 1,
            title: 'ZBIMAT'
        },
        {
            id: 27,
            column: 2,
            prefix: 'IT',
            title: 'IMP.SAP_ZBIMAT'
        },
        {
            id: 28,
            column: 3,
            postfix: 'T',
            title: 'IMP.SAP_ZBIMAT_V'
        },
            undefined,
        {
            id: 29,
            column: 5,
            prefix: 'HT',
            title: 'STG.SAP_ZBIMAT_V'
        },
            undefined,
            undefined,
            undefined,
            undefined,
        {
            id: 30,
            column: 10,
            postfix: 'T',
            title: 'PURCH.FAC_Purchasing'
        },
        ];

        return of([row1, row2, row3, row4, row5, row6, row7, row8, row9, row10]);
    }
}
