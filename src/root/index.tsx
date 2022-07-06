import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import HomePage from '../components/pages/Home';
import GlobalThemeLayer from '../layers/GlobalTheme';

type IProps = HTMLAttributes<HTMLDivElement>;

const Container = styled.div<Partial<IProps>>``;
/**
 * Стартовый компонент приложения DigitalNomads
 * */
export default function App({ ...etc }: Readonly<IProps>): JSX.Element {
  return (
    <Container {...etc}>
      <GlobalThemeLayer>
        <HomePage />
      </GlobalThemeLayer>
    </Container>
  );
}
