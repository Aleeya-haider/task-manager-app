import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CreateTaskComponent } from './create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskComponent],
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.ngOnInit(); // Initialize the component
    fixture.detectChanges(); // Trigger change detection
  });

  it('should have invalid form if form fields are empty', () => {
    const submitButton = debugElement.query(By.css('button[type="submit"]')).nativeElement;

    expect(component.taskForm.valid).toBeFalse();
    expect(submitButton.disabled).toBeTrue();
  });

  it('should enable submit button when form fields are filled', () => {
    const titleInput = debugElement.query(By.css('input[id="title"]')).nativeElement;
    const descriptionInput = debugElement.query(By.css('textarea[id="description"]')).nativeElement;
    const criteriaInput = debugElement.query(By.css('textarea[id="criteria"]')).nativeElement;
    const submitButton = debugElement.query(By.css('button[id="saveTask"]')).nativeElement;

    titleInput.value = 'Test Title';
    descriptionInput.value = 'Test Description';
    criteriaInput.value = 'Test Criteria';
    titleInput.dispatchEvent(new Event('input'));
    descriptionInput.dispatchEvent(new Event('input'));
    criteriaInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.taskForm.valid).toBeTrue();
    expect(submitButton.disabled).toBeFalse();
  });
});
