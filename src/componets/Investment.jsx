export function Investment({ data }) {
  const { investment, reports } = data;
  const { description: title } = investment;
  return (
    <div className="border p-2 my-4">
      <h2 className="text-center font-semibold">{title}</h2>
    </div>
  );
}
