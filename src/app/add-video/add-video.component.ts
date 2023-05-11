import { Component, OnInit } from '@angular/core';
import { Video } from '../model/Video';
import { VideoService } from '../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video: Video = new Video();

  addVideo(){
    
console.log(this.video);

    if(this.video.genre == "action" || this.video.genre == "documentaire" || this.video.genre == "documentaire"){
      this.cons.addVideo(this.video).subscribe(() => {
        this._router.navigateByUrl("/videos")
 
     })
    }

    else{
      alert("genre verif")
    }
   
  }
  

  constructor( private cons: VideoService ,  private _router: Router) { }

  ngOnInit(): void {
  }

}
