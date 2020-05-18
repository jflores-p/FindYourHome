import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ShowClienteComponent } from './show-cliente/show-cliente.component';
import { ListPublicadorComponent } from './list-publicador/list-publicador.component';
import { CreatePublicadorComponent } from './create-publicador/create-publicador.component';
import { ShowPublicadorComponent } from './show-publicador/show-publicador.component';
import { ListViviendaComponent } from './list-vivienda/list-vivienda.component';
import { ShowViviendaComponent } from './show-vivienda/show-vivienda.component';
import { CreateViviendaComponent } from './create-vivienda/create-vivienda.component';
import { FiltrarViviendaComponent } from './filtrar-vivienda/filtrar-vivienda.component';
import { HomeComponent } from './components/home/home.component';
import { ListaEntidadesComponent } from './components/lista-entidades/lista-entidades.component';
import { RegistroEntidadesComponent } from './components/registro-entidades/registro-entidades.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listaEntidades', component: ListaEntidadesComponent},
  {path: 'registroEntidades', component: RegistroEntidadesComponent},
  {path: 'listaEntidades/listCliente', component: ListClienteComponent},
  {path: 'registroEntidades/newCliente', component: CreateClienteComponent},
  {path: 'showCliente', component: ShowClienteComponent},
  {path: 'listaEntidades/listPublicador', component: ListPublicadorComponent},
  {path: 'registroEntidades/newPublicador', component: CreatePublicadorComponent},
  {path: 'showPublicador', component: ShowPublicadorComponent},
  {path: 'listaEntidades/listVivienda', component: ListViviendaComponent},
  {path: 'registroEntidades/newVivienda', component: CreateViviendaComponent},
  {path: 'showVivienda', component: ShowViviendaComponent},
  {path: 'filtrarVivienda', component: FiltrarViviendaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
