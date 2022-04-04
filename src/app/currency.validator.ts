import { AbstractControl } from '@angular/forms';

export function ValidateCurrency(control: AbstractControl) {
   let crr =  control.value.split(",");
  if(crr.length>2){
    return { invalidCurrency: true };
  }else{
    crr = crr[0];
  }
  let currency =   convertToUSCurrency(crr);
  console.log(currency);
  if(isNaN(currency) && currency < 2000000){
    return { invalidCurrency: true };
  }
   return null;
}

function convertToUSCurrency(value:string){
    
    let newVal =  console.log(value.replace("/./g",""));
    return Number(newVal);
}