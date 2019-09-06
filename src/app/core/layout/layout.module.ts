import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPageComponent } from './pages/error.page';
import { SplashPageComponent } from './pages/splash.page';
import { StandardPageComponent } from './pages/standard.page';

@NgModule({
  declarations: [
    NavbarComponent,
    ErrorPageComponent,
    SplashPageComponent,
    StandardPageComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorPageComponent,
    SplashPageComponent,
    StandardPageComponent
  ],
  entryComponents: []
})
export class LayoutModule {}
