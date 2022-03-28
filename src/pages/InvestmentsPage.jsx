import { apiGetInvestments } from '../api/api';
import { Investments } from '../componets/Investments';
import { Investment } from '../componets/Investment';
export default function InvestmentsPage() {
  const backend = apiGetInvestments();
  console.log(backend);
  return (
    <Investments>
      {backend.map(item => {
        return <Investment key={item.id} data={item} />;
      })}
    </Investments>
  );
}
