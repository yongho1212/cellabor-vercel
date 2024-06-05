import 'styled-components';
import { ColorsType } from './theme';
import { TextsType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    texts : TextsType;
  }
}
