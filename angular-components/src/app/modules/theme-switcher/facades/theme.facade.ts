import {
  DarkThemeFactory,
  LightThemeFactory,
  ThemeFactory,
} from '../factories/theme.factory';
import { Theme } from '../models/theme.model';

export function addAvailableThemesToList(): Theme[] {
  return [
    clientCode(new DarkThemeFactory()),
    clientCode(new LightThemeFactory()),
  ];
}

function clientCode(factory: ThemeFactory): Theme {
  return factory.factoryMethod();
}
