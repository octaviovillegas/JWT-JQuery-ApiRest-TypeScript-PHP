import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { WsService }  from './services/ws/ws.service';
import { AutService } from './services/auth/aut.service';
import { VerificarJWTService } from './services/verificar-jwt/verificar-jwt.service';
import { JwtModule } from './jwt/jwt.module';


const appRoutes: Routes = [
  {
    path: 'pagina1',
    canActivate: [VerificarJWTService],
    component: Pagina1Component
  },
  { path: 'pagina2', component: Pagina2Component, canActivate: [VerificarJWTService], },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/pagina1', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Pagina1Component,
    Pagina2Component,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JwtModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WsService,
    AutService,
    VerificarJWTService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
