import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { PostsContainerComponent } from './pages/posts-container/posts-container.component';
import { PostComponent } from './pages/posts-container/post/post.component';
import { FormComponent } from './pages/form/form.component';

import { SharedModule } from '../../shared/shared.module';
import { FormExampleComponent } from './form-example/form-example.component';

@NgModule({
  imports: [CommonModule, SharedModule, ExamplesRoutingModule],
  declarations: [
    PostsContainerComponent,
    PostComponent,
    FormExampleComponent,
    FormComponent,
  ],
})
export class ExamplesModule {}
