import { Component, OnInit } from '@angular/core';
import{ServicePostService} from '../service-post.service';

import {FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray} from '@angular/forms';

import { Observable } from "rxjs/Rx";


@Component({
  selector: 'appdata',
  templateUrl: './data-driven.component.html',
  providers : [ServicePostService]
})
export class DataDrivenComponent {
  myform : FormGroup ;
  data ;
  constructor(private formBuilder : FormBuilder , private postService : ServicePostService) {
      
      this.myform = formBuilder.group({
            'name' : ['Asaad',Validators.required],
            'email' : ['asaad@mum.edu' , Validators.required],
            'post' : ['This is my firt post' , this.lenghtValidator ]
      });

      
   }

   lenghtValidator(control : FormControl) : {[s :string] : boolean}{
      let val : string = control.value;
      if(val.length < 10){
        return {example : true};
      }
    return null;
   }

   getData(){
      this.postService.getmyData()
      .subscribe(
        (res : any) => {
          this.data = res.json()
       //   console.log(this.data);
       
      }
      );
    //  let mydata : {name : string , email : string, post : string};
       for(const k in this.data){
          if(this.data[k].name != undefined){
         //   mydata.name = this.data[k].name;
          //  mydata.email = this.data[k].email;
          //  mydata.post = this.data[k].website;

          //  console.log(this.data[k].name);
           this.myform = this.formBuilder.group({
                'name' : [this.data[k].name ,Validators.required],
                'email' : [this.data[k].email , Validators.required],
                'post' : ['' , this.lenghtValidator ]
      });  
        }
      }
       
      
       
   }

   onSubmit(){
     console.log(this.myform.value);
   }

}
