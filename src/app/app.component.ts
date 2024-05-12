import { Component } from '@angular/core';
import { CurtainsJsDirective } from './curtainsjs.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div appCurtainsJs>
      <div id="page-wrap">
        <div id="canvas"></div>
        <div class="curtain-wrapper">
          <div class="curtain">
            <video src="0512.mov" crossorigin="" data-sampler="simplePlaneVideoTexture"></video>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
  imports: [CurtainsJsDirective],
})
export class AppComponent {}
