import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateCurrency } from '../currency.validator';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent{

  loanForm: FormGroup;
  buttonDisabled = true;
  intrest = null;
  loanAmount = null;
  
  constructor(private fb: FormBuilder, private loanService: LoanService) {
    this.loanForm = this.fb.group({
      monthlyIncome: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(50000)]],
      requestedAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.min(2000000)]],
      loanTerm: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(36), Validators.max(360)]],
      children: ['', Validators.required],
      coapplicant: ['', Validators.required]
    });
    
  }

  submitForm(): void {
    this.loanAmount = null;
    this.intrest = null;
    if (this.loanForm.valid) {
     this.loanService.submitLoanApplication(this.loanForm).subscribe((result) => {
        if (result) {
          this.loanAmount = result.loanAmount;
          this.intrest = result.interestRate;
        }
      })

    }
  }

}
