import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefenseTableComponent } from './defense-table/defense-table.component';
import { KickerTableComponent } from './kicker-table/kicker-table.component';
import { QbTableComponent } from './qb-table/qb-table.component';
import { RbTableComponent } from './rb-table/rb-table.component';
import { WrTableComponent } from './wr-table/wr-table.component';
import { TeTableComponent } from './te-table/te-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CallApiService } from './service/call-api.service';
import { ApiService } from './service/api.service';
import { StatsService } from './service/logic/stats.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DefenseTableComponent,
    KickerTableComponent,
    QbTableComponent,
    RbTableComponent,
    WrTableComponent,
    TeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [CallApiService, ApiService, StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
