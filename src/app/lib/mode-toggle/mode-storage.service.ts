import { Injectable, InjectionToken } from "@angular/core";
import { Mode } from "./mode-toggle.model";

/**
 * Injection Token for ModeStorage
 */
export const MODE_STORAGE_SERVICE = new InjectionToken<ModeStorage>(
  "MODE_STORAGE"
);

export interface ModeStorage {
  save(mode: Mode): void;

  get(): Mode;
}

@Injectable()
export class ModeLocalStorageService implements ModeStorage {
  LOCAL_STORAGE_KEY = "THEME_MODE";

  save(mode: Mode): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, mode.toString());
  }
  
  get(): Mode {
    return <Mode>localStorage.getItem(this.LOCAL_STORAGE_KEY) || undefined;
  }
}
