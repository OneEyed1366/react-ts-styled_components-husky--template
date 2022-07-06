import { Fragment, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '../../styles';

interface IProps {
  children: ReactNode;
}

export default function GlobalThemeLayer({ children }: Readonly<IProps>): JSX.Element {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </Fragment>
  );
}
