import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment'
import { from } from 'rxjs';
import { TilfojTidComponent } from './tilfoj-tid/tilfoj-tid.component';

@NgModule({
  declarations: [
    AppComponent,
    TilfojTidComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
