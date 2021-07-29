import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { LoginReactiveComponent } from './pages/login-reactive/login-reactive.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClassBindingComponent } from './pages/pratica/bindings/class-binding/class-binding.component';
import { EventBindingComponent } from './pages/pratica/bindings/event-binding/event-binding.component';
import { InterpolationComponent } from './pages/pratica/bindings/interpolation/interpolation.component';
import { PropertyBindingComponent } from './pages/pratica/bindings/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './pages/pratica/bindings/two-way-binding/two-way-binding.component';
import { HooksComponent } from './pages/pratica/components/hooks/hooks.component';
import { InputOutputComponent } from './pages/pratica/components/input-output/input-output.component';
import { NgContentComponent } from './pages/pratica/components/ng-content/ng-content.component';
import { FormControlComponent } from './pages/pratica/diretivas/attributes/form-control/form-control.component';
import { NgClassComponent } from './pages/pratica/diretivas/attributes/ng-class/ng-class.component';
import { NgModelComponent } from './pages/pratica/diretivas/attributes/ng-model/ng-model.component';
import { NgStyleComponent } from './pages/pratica/diretivas/attributes/ng-style/ng-style.component';
import { CustomizadasComponent } from './pages/pratica/diretivas/customizadas/customizadas.component';
import { NgforComponent } from './pages/pratica/diretivas/structural/ngfor/ngfor.component';
import { NgifComponent } from './pages/pratica/diretivas/structural/ngif/ngif.component';
import { FormArrayComponent } from './pages/pratica/forms/form-array/form-array.component';
import { FormGroupComponent } from './pages/pratica/forms/form-group/form-group.component';
import { NgContainerComponent } from './pages/pratica/template/ng-container/ng-container.component';
import { RefComponent } from './pages/pratica/template/ref/ref.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "login-reactive", component: LoginReactiveComponent },
  { path: "profile", component: ProfileComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/bindings/property", component: PropertyBindingComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/bindings/class", component: ClassBindingComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/bindings/event", component: EventBindingComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/bindings/two-way", component: TwoWayBindingComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/bindings/interpolation", component: InterpolationComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/diretivas/ngif", component: NgifComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/diretivas/ngfor", component: NgforComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/diretivas/atributos/ng-class", component: NgClassComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/diretivas/atributos/ng-style", component: NgStyleComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/diretivas/atributos/ng-model", component: NgModelComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/diretivas/ngfor", component: NgforComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/template/ref", component: RefComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/template/ng-container", component: NgContainerComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/diretivas/atributos/form-control", component: FormControlComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/diretivas/customizadas", component: CustomizadasComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/forms/form-group", component: FormGroupComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/forms/form-array", component: FormArrayComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/components/input-output", component: InputOutputComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/components/ng-content", component: NgContentComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "pratica/components/hooks", component: HooksComponent, canActivate: [ AuthenticatedGuard ] },
  { path: "", redirectTo: "profile", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
