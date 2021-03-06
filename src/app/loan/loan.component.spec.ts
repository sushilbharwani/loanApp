import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoanComponent } from './loan.component';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test count of elements on form',()=>{
    const formElements = fixture.debugElement.nativeElement.querySelector('#loanForm');
    const inputElements = formElements.querySelectorAll('input');
    const selectElements = formElements.querySelectorAll('select');
    expect(inputElements.length).toEqual(3);
    expect(selectElements.length).toEqual(2);
  });

  it('check initial form values as blank',()=>{
    const formGroup = component.loanForm;
    const formValues = {
      monthlyIncome : '',
      requestedAmount : '',
      loanTerm : '',
      children : '',
      coapplicant : ''
    }
    expect(formGroup.value).toEqual(formValues);
  });
  
  it('check monthlyIncome value before entering some value and validation',()=>{
    const monthlyIncomeElement = fixture.debugElement.nativeElement.querySelector('#loanForm').querySelectorAll('input')[0];
    const monthlyIncomeValue =  component.loanForm.get('monthlyIncome');
    expect(monthlyIncomeElement.value).toEqual(monthlyIncomeValue?.value);
    expect(monthlyIncomeValue?.errors).not.toBeNull();
    expect(monthlyIncomeValue?.errors?.required).toBeTruthy();
    
  });

  it('check requestedAmount value before entering and validation',()=>{

    const requestedAmountElement = fixture.debugElement.nativeElement.querySelector('#loanForm').querySelectorAll('input')[1];
    const requestedAmountValue =  component.loanForm.get('requestedAmount');
    expect(requestedAmountElement.value).toEqual(requestedAmountValue?.value);
    expect(requestedAmountValue?.errors).not.toBeNull();
    expect(requestedAmountValue?.errors?.required).toBeTruthy();
    
  });

  it('check loanTerm value before entering and validation',()=>{

    const loanTermElement = fixture.debugElement.nativeElement.querySelector('#loanForm').querySelectorAll('input')[2];
    const loanTermValue =  component.loanForm.get('loanTerm');
    expect(loanTermElement.value).toEqual(loanTermValue?.value);
    expect(loanTermValue?.errors).not.toBeNull();
    expect(loanTermValue?.errors?.required).toBeTruthy();
    
  });

  it('check Children Value before entering and Validation',()=>{

    const childrenSelectElement = fixture.debugElement.nativeElement.querySelector('#loanForm').querySelectorAll('select')[0];
    const childrenSelectValue =  component.loanForm.get('children');
    expect(childrenSelectElement.value).toEqual(childrenSelectValue?.value);
    expect(childrenSelectValue?.errors).not.toBeNull();
    expect(childrenSelectValue?.errors?.required).toBeTruthy();
    
  });

  it('check Co-Borrower Value before entering and Validation',()=>{
    const coapplicantElement = fixture.debugElement.nativeElement.querySelector('#loanForm').querySelectorAll('select')[1];
    const coapplicantValue =  component.loanForm.get('coapplicant');
    expect(coapplicantElement.value).toEqual(coapplicantValue?.value);
    expect (coapplicantValue?.errors).not.toBeNull();
    expect(coapplicantValue?.errors?.required).toBeTruthy();
  });




});
