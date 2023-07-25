import { Component, OnInit } from '@angular/core';
import { Mode } from '../../../lib/mode-toggle/mode-toggle.model';
import { ModeToggleService } from '../../../lib/mode-toggle/mode-toggle.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public isDarkTheme: boolean = false;
  public iconColor: string = this.isDarkTheme ? '#F6F1D5' : '#000';

  public imagePath: string = this.isDarkTheme ? '../../../../assets/dark-logotype.svg' : '../../../../assets/light-logotype.svg';

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

  public changeThemeMode(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.imagePath = this.isDarkTheme ? '../../../../assets/dark-logotype.svg' : '../../../../assets/light-logotype.svg';
    this.iconColor = this.isDarkTheme ? '#F6F1D5' : '#000';
    this.setBgVanta();
  }

  public setBgVanta(): void {
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
