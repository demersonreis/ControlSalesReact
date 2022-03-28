import Header from './componets/Header';
import Main from './componets/Main';
import InvestmentsPage from './pages/InvestmentsPage';
export default function App() {
  return (
    <>
      <Header>Fundos de Investimentos</Header>
      <Main>
        <InvestmentsPage />
      </Main>
    </>
  );
}
