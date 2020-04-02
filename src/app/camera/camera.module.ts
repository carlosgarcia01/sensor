import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CameraRoutingModule } from './camera-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { UsingCameraComponent } from './using-camera/using-camera.component';


@NgModule({
  declarations: [UsingCameraComponent],
  imports: [
    CameraRoutingModule,
    NativeScriptCommonModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CameraModule {
  constructor() { }
 }
