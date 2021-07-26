import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginReactiveComponent } from './pages/login-reactive/login-reactive.component';
import { PropertyBindingComponent } from './pages/pratica/bindings/property-binding/property-binding.component';
import { ClassBindingComponent } from './pages/pratica/bindings/class-binding/class-binding.component';
import { EventBindingComponent } from './pages/pratica/bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './pages/pratica/bindings/two-way-binding/two-way-binding.component';
import { InterpolationComponent } from './pages/pratica/bindings/interpolation/interpolation.component';
import { NgifComponent } from './pages/pratica/diretivas/structural/ngif/ngif.component';
import { NgforComponent } from './pages/pratica/diretivas/structural/ngfor/ngfor.component';
import { NgClassComponent } from './pages/pratica/diretivas/attributes/ng-class/ng-class.component';
import { NgStyleComponent } from './pages/pratica/diretivas/attributes/ng-style/ng-style.component';
import { NgModelComponent } from './pages/pratica/diretivas/attributes/ng-model/ng-model.component';
import { RefComponent } from './pages/pratica/template/ref/ref.component';
import { NgContainerComponent } from './pages/pratica/template/ng-container/ng-container.component';
import { FormControlComponent } from './pages/pratica/diretivas/attributes/form-control/form-control.component';
import { NameExistDirective } from './directives/name-exist.directive';
import { AutomaticDigitsDirective } from './directives/automatic-digits.directive';
import { CustomizadasComponent } from './pages/pratica/diretivas/customizadas/customizadas.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FormGroupComponent } from './pages/pratica/forms/form-group/form-group.component';
import { FormArrayComponent } from './pages/pratica/forms/form-array/form-array.component';
import { GameService } from './services/game.service';
import { InputOutputComponent } from './pages/pratica/components/input-output/input-output.component';
import { NumericStepperComponent } from './pages/pratica/components/components/numeric-stepper/numeric-stepper.component';
import { NumericStepperTwoWayComponent } from './pages/pratica/components/components/numeric-stepper-two-way/numeric-stepper-two-way.component';
import { NgContentComponent } from './pages/pratica/components/ng-content/ng-content.component';
import { AreaComponent } from './pages/pratica/components/components/area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    LoginReactiveComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InterpolationComponent,
    NgifComponent,
    NgforComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    RefComponent,
    NgContainerComponent,
    FormControlComponent,
    NameExistDirective,
    AutomaticDigitsDirective,
    CustomizadasComponent,
    ReversePipe,
    FormGroupComponent,
    FormArrayComponent,
    InputOutputComponent,
    NumericStepperComponent,
    NumericStepperTwoWayComponent,
    NgContentComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
