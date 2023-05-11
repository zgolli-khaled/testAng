import { Component, OnInit } from '@angular/core';
import { Video } from '../model/Video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  data !: Video[];
  findValue!: string;

  datas !: Video[];

  constructor( private cons : VideoService) { }

  ngOnInit(): void {

    this.cons.getVideos().subscribe((data)=>{
      console.log(data);
      this.data=data;
      this.datas=data
      
    })

   
    
  }

  onSubmit(){
    
   this.datas= this.data.filter((v)=>{
      console.log(v.genre);
      
      return v.genre == this.findValue;
     
    })

    if(this.datas.length == 0){
      this.datas=this.data;
    }



    
    
    

  }


  incNbr(data : Video){
    data.nbrShared++;
    this.cons.updateVideo(data , data.id).subscribe(() => {

    console.log("updated");
    

   })
  }
}
