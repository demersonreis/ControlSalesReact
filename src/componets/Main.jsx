export default function main({ children = 'CONTEUDO DE MAIN' }) {
  return (
    <main>
      <div className="container mx-auto p-4">{children}</div>
    </main>
  );
}
