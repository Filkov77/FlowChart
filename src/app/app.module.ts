import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartContainerComponent } from './main-view/chart-container/chart-container.component';
import { ChartElementComponent } from './main-view/chart-manual/chart-element.component';
import { ChartManualComponent } from './main-view/chart-manual/chart-manual.component';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
    declarations: [
        AppComponent,
        MainViewComponent,
        ChartContainerComponent,
        ChartManualComponent,
        ChartElementComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxGraphModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
