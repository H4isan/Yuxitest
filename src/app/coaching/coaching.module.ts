import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachingComponent } from './coaching.component';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { TableComponent } from './challenges-table/table/table.component';
import { TableMychallengesComponent } from './challenges-table/table-mychallenges/table-mychallenges.component';

import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { ChallangerService } from './service/challanger.service';
import { MdButtonModule, MdIconModule, MdMenuModule, MdTabsModule, MdInputModule, MdSortModule} from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true, apiBase: 'api/'}),
    MdSortModule,
    NgxPaginationModule,
    ChartsModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdInputModule


  ],
  declarations: [CoachingComponent, TableComponent, ChartsComponent, TableMychallengesComponent],
  providers: [ChallangerService],
  exports: [CoachingComponent]
})
export class CoachingModule { }
