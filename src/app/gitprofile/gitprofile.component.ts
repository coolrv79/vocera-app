import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { VoceraServices } from '../services/vocera-services.service';

@Component({
  selector: 'app-gitprofile',
  templateUrl: './gitprofile.component.html',
  styleUrls: ['./gitprofile.component.css']
})
export class GitprofileComponent {
  result:any;
  value:any;
  gitform:any;
  errmsg:any;
  @ViewChild('prof', { static: true })
  input!: ElementRef;

  // ngAfterViewInit() {
  //   console.log(this.input?.nativeElement.value);
  // }
  constructor(private service:VoceraServices) { 
  }

  getProfile(){
    this.service.getmyProfile(this.input?.nativeElement.value).subscribe((result)=>{
      this.result = result;
      this.input.nativeElement.value='';
      this.errmsg ='';
    },
    (err)=>{
      console.log(err);
      this.errmsg = 'Particular user does not exist.';
      this.result ='';
    })
  }
}
