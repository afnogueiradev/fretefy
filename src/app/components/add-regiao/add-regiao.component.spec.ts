import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegiaoComponent } from './add-regiao.component';

describe('AddRegiaoComponent', () => {
  let component: AddRegiaoComponent;
  let fixture: ComponentFixture<AddRegiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRegiaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
