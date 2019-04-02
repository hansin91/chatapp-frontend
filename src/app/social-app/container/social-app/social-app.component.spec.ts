import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAppComponent } from './social-app.component';

describe('SocialAppComponent', () => {
  let component: SocialAppComponent;
  let fixture: ComponentFixture<SocialAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
