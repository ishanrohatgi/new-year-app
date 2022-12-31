import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContdownComponentComponent } from './contdown-component.component';

describe('ContdownComponentComponent', () => {
  let component: ContdownComponentComponent;
  let fixture: ComponentFixture<ContdownComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContdownComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContdownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
