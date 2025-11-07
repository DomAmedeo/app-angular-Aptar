import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaProdotti } from './ricerca-prodotti';

describe('RicercaProdotti', () => {
  let component: RicercaProdotti;
  let fixture: ComponentFixture<RicercaProdotti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RicercaProdotti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicercaProdotti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
