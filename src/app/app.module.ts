import { SearchService } from './search/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RandomArticleComponent } from './random-article/random-article.component';

// 3rd party
import { MaterialModule } from '@angular/material';
import { SearchComponent } from './search/search.component';
import { MdCard } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RandomArticleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
