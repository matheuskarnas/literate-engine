import * as S from './styles'

const Main = () => (
  <S.warpper>
    <S.Logo
      src="https://raw.githubusercontent.com/React-Avancado/boilerplate/3e43f7d917b79a2875d1eeb1fe0794460e88ae3a/public/img/icon-192.png"
      alt="Logo de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>react avançado</S.Title>
    <S.Description>TypeScript, ReactJS e Styled Components</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor de frente para uma tela com codigos"
    />
  </S.warpper>
)

export default Main
