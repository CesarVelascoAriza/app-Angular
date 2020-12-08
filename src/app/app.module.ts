import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    UsuariosComponent,
    RolesComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
