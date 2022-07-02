import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';
import { FriendComponent } from './friend/friend.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'downloads', component: DownloadsComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'friends/:id', component:FriendComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
