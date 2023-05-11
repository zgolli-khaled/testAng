import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routes: Routes = [
  {path:'', redirectTo:'videos', pathMatch:'full'},
  {path: 'videos' , component:VideosComponent},

  {path: 'addvideos' , component:AddVideoComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
