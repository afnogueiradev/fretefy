import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiaoItemComponent } from './regiao-item.component';

describe('RegiaoItemComponent', () => {
  let component: RegiaoItemComponent;
  let fixture: ComponentFixture<RegiaoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegiaoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
