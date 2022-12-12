import 'styled-components';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {defaultTheme} from '../styles/themes/defaultTheme';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	export interface DefaultTheme extends ThemeType {}
}
