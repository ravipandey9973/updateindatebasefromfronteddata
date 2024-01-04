import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {

  constructor(private api:ApiserviceService) {
      

  }
  readUser:any;
  successMsg:any;
  ngOnInit(): void {
    this.api.getAllUser().subscribe((res)=>{
      console.log("get allusers",res);
      this.readUser=res.data;
    })
  }

  // delete data

  DeleteId(Id:any){
  // console.log(id,"selected id");
   this.api.deleteData(Id).subscribe((res)=>
   {
    console.log(res,"deleted id no");
    this.successMsg = res.message;
    this.getAlldata();
   })
  }
  getAlldata()
  {
    this.api.getAllUser().subscribe((res)=>{
      console.log("get allusers",res);
      this.readUser=res.data;
    })
  }

}
