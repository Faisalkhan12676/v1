import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-videomanage',
  templateUrl: './videomanage.component.html',
  styleUrls: ['./videomanage.component.css'],
})
export class VideomanageComponent implements OnInit {
  videos: any = [];
  isLoading = true;
  role:any;
  
  constructor(private resource: ResourcesService,private haverole: AuthService) {
    this.resource.getAllVideo().subscribe((data:any) => {
      this.isLoading = false;
      this.videos =  data.filter((video: any) => video.videoPath !== null);
      console.log(this.videos);
    }),
      (error: any) => {
        this.isLoading = false;
        console.log(error);
      };


      this.role = this.haverole.haveRole().toLowerCase();
      console.log(this.role);
  }



 

  ngOnInit(): void {}
}
