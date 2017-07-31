import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachingComponent } from './coaching.component';
import {MdSortModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { TableComponent } from './challenges-table/table/table.component';
import { TableMychallengesComponent } from './challenges-table/table-mychallenges/table-mychallenges.component';

import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { ChallangerService } from './challanger.service';
import { MdButtonModule, MdIconModule, MdMenuModule, MdTabsModule, MdInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
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
