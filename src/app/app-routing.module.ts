import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {path:"login", component: LoginComponent},
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "camera", loadChildren: () => import("~/app/camera/camera.module").then((m) => m.CameraModule) },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
