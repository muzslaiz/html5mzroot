import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from 'src/component/root/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import { GlobalService } from './global.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GlobalService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
