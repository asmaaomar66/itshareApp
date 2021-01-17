import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UniqnessValidator{

  static shouldbeuniqness(control:AbstractControl) : Promise<ValidationErrors | null>
  {

    return new Promise( (resolve, reject)=> {

      //simulate to time = exceute to process
    setTimeout(() => {

      if(control.value == "asmaa@gmail.com"){
        
        resolve({shouldbeuniqness: true});
      }else{
        resolve(null);
      }

    }, 2000);

    })

  }
}
