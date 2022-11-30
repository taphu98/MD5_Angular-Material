import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCategoryAvatarComponent } from './upload-category-avatar.component';

describe('UploadCategoryAvatarComponent', () => {
  let component: UploadCategoryAvatarComponent;
  let fixture: ComponentFixture<UploadCategoryAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCategoryAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCategoryAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
