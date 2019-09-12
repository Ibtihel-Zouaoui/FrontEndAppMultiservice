import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  messageForm: FormGroup;
  submitted = false;
  success = false;
  title = 'materialApp'; 
  favoriteSeason: string;
  seasons: string[] = ['client', 'ouvrier'];
  

  constructor(private formBuilder: FormBuilder,
     private service: DataserviceService,
     private router : Router) { 
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      adresse: ['', Validators.required],
      tel: ['', Validators.required]
    })
  }

  redirect(){
    setTimeout( ()=>{
      this.router.navigate(["home"])
    }
    
    , 1000)
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    const obj = this.messageForm.value;
    obj['role'] = this.favoriteSeason;
    this.success = true;
    if(this.favoriteSeason=='client') {
      this.service.addClient(obj).subscribe(
        data=>{
         if(data) {
          
         }
        
        
        },
        err => {
          console.log("error sending data")
        },
        ()=>{
          console.log("data sent")
        }
  
  
      
        )
      }
      else {
        this.service.addOuvrier(obj).subscribe(
          data=>{
           if(data) {
            
           }
          
          
          },
          err => {
            console.log("error sending data")
          },
          ()=>{
            console.log("data sent")
          }
    
    
        
          )

      }
    }
   
    

  ngOnInit() {
  }

}
