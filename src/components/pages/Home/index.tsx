import { HTMLAttributes } from 'react';
import styled from 'styled-components';

type IProps = HTMLAttributes<HTMLDivElement>;

const Container = styled.div<Partial<IProps>>`
  display: grid;
`;
/**
 * Начальная страница приложения
 * */
export default function HomePage({ ...etc }: Readonly<IProps>): JSX.Element {
  return <Container {...etc}></Container>;
}
