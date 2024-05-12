import { Component } from '@angular/core';
import { CurtainsJsDirective } from './curtainsjs.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="display: flex; flex-direction: column; width: 100%; margin: 0 auto; padding-top: 4rem; align-items: center; justify-content: center;">
      <img width="200" src="angular-logo.svg" />
      <div style="color: white; margin-top: 1rem;">
        Made with ❤️ by <span style="font-weight: 700;">Khang Tran</span>
      </div>
    </div>

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
