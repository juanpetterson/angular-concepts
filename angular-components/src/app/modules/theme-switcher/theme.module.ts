import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WithSwitchComponent } from './with-switch/with-switch.component';
import { ObjectCompositionComponent } from './object-composition/object-composition.component';
import { ThemeSwitcherRoutingModule } from './theme-routing.module';

@NgModule({
  declarations: [
    WithSwitchComponent,
    ObjectCompositionComponent,
    ThemeSwitcherRoutingModule,
  ],
  imports: [CommonModule, FormsModule],
})
export class ThemeSwitcherModule {}
