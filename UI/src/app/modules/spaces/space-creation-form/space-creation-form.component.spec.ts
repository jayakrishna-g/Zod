import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCreationFormComponent } from './space-creation-form.component';

describe('SpaceCreationFormComponent', () => {
  let component: SpaceCreationFormComponent;
  let fixture: ComponentFixture<SpaceCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceCreationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
