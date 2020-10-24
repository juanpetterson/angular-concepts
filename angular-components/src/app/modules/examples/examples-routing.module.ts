import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './pages/form/form.component';
import { PostsContainerComponent } from './pages/posts-container/posts-container.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsContainerComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
