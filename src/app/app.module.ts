import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';


import {NativeScriptFormsModule} from 'nativescript-angular/forms';


 // Uncomment and add to NgModule imports if you need to use the HttpClient wrapper 
 import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
 import { PenaltyfeeComponent } from './penaltyfee/penaltyfee.component';
 import { TestComponent } from './test/test.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PenaltyfeeComponent,
        TestComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
