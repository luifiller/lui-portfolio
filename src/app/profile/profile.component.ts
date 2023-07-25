import { Component, OnInit } from '@angular/core';
import { Mode } from '../lib/mode-toggle/mode-toggle.model';
import { ModeToggleService } from '../lib/mode-toggle/mode-toggle.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  public currentMode: Mode = Mode.LIGHT;

  constructor(private modeToggleService: ModeToggleService) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
      console.log('mode changed to: ', this.currentMode);

      setTimeout(() => {
        this.setBgVanta();
      }, 300);
    });
  }

  ngOnInit(): void {}

  private setBgVanta(): void {
    const vantaOptions: any = {
      el: '#bg-vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      forceAnimate: true,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
    };

    if (this.currentMode !== Mode.LIGHT) {
      vantaOptions['backgroundColor'] = 0x101820;
      vantaOptions['skyColor'] = 0x030414;
      vantaOptions['cloudColor'] = 0x39414f;
      vantaOptions['sunColor'] = 0x150000;
      vantaOptions['sunGlareColor'] = 0x0;
      vantaOptions['sunlightColor'] = 0x0;
    }

    (window as any).VANTA.CLOUDS(vantaOptions);
  }

}
