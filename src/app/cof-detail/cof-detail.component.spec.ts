import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofDetailComponent } from './cof-detail.component';

describe('CofDetailComponent', () => {
  let component: CofDetailComponent;
  let fixture: ComponentFixture<CofDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
