# LaboIV-Auth
Autentificacion angular 2 con JWT

Generacion de JWT en PHP: <a target="_blank" href="https://github.com/firebase/php-jwt">php-jwt</a>

Manejo de JWT en Angular 2: <a target="_blank" href="https://github.com/auth0/angular2-jwt">angular2-jwt</a>

## Configuracion Basica

1 modulo jwt 
https://github.com/auth0/angular2-jwt

2-authservice

3- verificar-jwt que implementa canactivate


4- crear ws service 


5- en el modulo definimos las rutas 

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

6- incluimos los componentes , completo los import  y los provider
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
