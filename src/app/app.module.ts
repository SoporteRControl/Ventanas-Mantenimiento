import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // <--- 1. Agrega esta importación

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ListasComponent } from './pages/listas/listas.component';
import { PlantillasComponent } from './pages/plantillas/plantillas.component';
import { SistemasComponent } from './pages/sistemas/sistemas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NuevaVentanaComponent } from './pages/nueva-ventana/nueva-ventana.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HistorialComponent,
    ListasComponent,
    PlantillasComponent,
    SistemasComponent,
    ContactoComponent,
    NuevaVentanaComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/historial', pathMatch: 'full' },
      { path: 'historial', component: HistorialComponent },
      { path: 'listas', component: ListasComponent },
      { path: 'plantillas', component: PlantillasComponent },
      { path: 'sistemas', component: SistemasComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'nueva-ventana', component: NuevaVentanaComponent },
      { path: 'login', component: LoginComponent }
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }