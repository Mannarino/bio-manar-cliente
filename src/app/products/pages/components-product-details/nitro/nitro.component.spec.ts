import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitroComponent } from './nitro.component';

describe('NitroComponent', () => {
  let component: NitroComponent;
  let fixture: ComponentFixture<NitroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NitroComponent]
    });
    fixture = TestBed.createComponent(NitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
