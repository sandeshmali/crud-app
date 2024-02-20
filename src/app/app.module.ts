import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudModule } from './modules/crud/crud.module';
import { FormsModule } from '@angular/forms';
import { CommonService } from './shared/common.service';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CrudModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
