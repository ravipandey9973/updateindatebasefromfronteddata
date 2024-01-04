import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  // userForm !: FormGroup
  errMsg :any;
  successMsg:any;
  constructor(private api:ApiserviceService) {

  }
  ngOnInit(): void {
  
  }
  userForm = new FormGroup({
    'fullname':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
     'mobile':new FormControl('',Validators.required)
   })
  userSubmit ()
  {
    //console.log(this.userForm.value);
    if(this.userForm.valid)
    {
      console.log(this.userForm.value);
      this.api.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,"Data Added Successfully");
        this.userForm.reset();
        this.successMsg=res.message;
      })
    }
    else{
      this.errMsg = 'All Fields are required';
    }
  } 

}
