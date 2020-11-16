import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithSwitchComponent } from './with-switch/with-switch.component';

const routes: Routes = [
  {
    path: '',
    component: WithSwitchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeSwitcherRoutingModule {}
