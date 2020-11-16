import { DarkTheme, LightTheme, Theme } from '../models/theme.model';

export abstract class ThemeFactory {
  public abstract factoryMethod(): Theme;
}

export class DarkThemeFactory extends ThemeFactory {
  public factoryMethod(): Theme {
    return new DarkTheme();
  }
}

export class LightThemeFactory extends ThemeFactory {
  public factoryMethod(): Theme {
    return new LightTheme();
  }
}
