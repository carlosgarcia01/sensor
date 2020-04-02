import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { UsingCameraComponent } from './using-camera/using-camera.component';


const routes: Routes = [
    {path: "",component: UsingCameraComponent},
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CameraRoutingModule { }
