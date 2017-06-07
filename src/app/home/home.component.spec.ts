import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';
import { AIService } from '../AI-service/ai.service';

import {
  MdCardModule,
  MdButtonModule,
  MdRadioModule,
  MdSnackBarModule,
  MdProgressSpinnerModule,
  MdDialogModule,
  MdSnackBar,
} from '@angular/material';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MdCardModule,
        MdButtonModule,
        MdRadioModule,
        MdSnackBarModule,
        MdProgressSpinnerModule,
        MdDialogModule,
        NoopAnimationsModule,
      ],
      declarations: [
        HomeComponent,
      ],
      providers: [
        AIService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('the `thinking` variable should be initially disabled', () => {
    expect(component.thinking).toBe(undefined);
  });

  it('should display an error if the form is not valid', () => {
    const SnackBar = fixture.debugElement.injector.get(MdSnackBar);
    const snackBarSpy: jasmine.Spy = spyOn(SnackBar, 'open').and.callThrough();

    component.play();
    fixture.detectChanges();

    expect(snackBarSpy).toHaveBeenCalled();
  });

  it('play button should generate a new match', () => {
    const aiService = fixture.debugElement.injector.get(AIService);
    const aiServiceSpy: jasmine.Spy = spyOn(aiService, 'play').and.callThrough();

    component.gameForm.controls['chose'].setValue('Rock');
    component.play();
    fixture.detectChanges();
    expect(component.thinking).toBe(true);
    expect(aiServiceSpy).toHaveBeenCalled();
  });
});
