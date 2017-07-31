import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMychallengesComponent } from './table-mychallenges.component';

describe('TableMychallengesComponent', () => {
  let component: TableMychallengesComponent;
  let fixture: ComponentFixture<TableMychallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMychallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMychallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
