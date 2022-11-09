import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgtCanvas } from '@angular-three/core';
import { NgtMesh } from '@angular-three/core/meshes';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {
  NgtBoxGeometry,
  NgtSphereGeometry,
} from '@angular-three/core/geometries';
import {
  NgtMeshBasicMaterial,
  NgtMeshStandardMaterial,
} from '@angular-three/core/materials';
import { ModelComponent } from './components/model/model.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PlanetTileComponent } from './components/planets-tile/planet-tile/planet-tile.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelComponent,
    TestComponent,
    PlanetTileComponent,
  ],
  imports: [
    BrowserModule,
    NgtCanvas,
    NgtMesh,
    NgtBoxGeometry,
    NgtMeshBasicMaterial,
    NgtSphereGeometry,
    NgtMeshStandardMaterial,
    NgxSliderModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ModelComponent, PlanetTileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
