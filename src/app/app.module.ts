import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';


import {NativeScriptFormsModule} from 'nativescript-angular/forms';


 // Uncomment and add to NgModule imports if you need to use the HttpClient wrapper 
 import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
<<<<<<< HEAD
import { PenaltyfeeComponent } from './penaltyfee/penaltyfee.component';
=======
import { PenaltyfeeListComponent } from './penaltyfee-list/penaltyfee-list.component';
>>>>>>> 1899aacf3604888663ddfa521b92ad032b2ad22f


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
<<<<<<< HEAD
        PenaltyfeeComponent
=======
        PenaltyfeeListComponent
>>>>>>> 1899aacf3604888663ddfa521b92ad032b2ad22f
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
