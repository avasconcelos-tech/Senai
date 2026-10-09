import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import { cardapio } from "./data/cardapio";
import "./App.css";
function App() {
  return (
    <main className="app">
      <Header />
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
          />
        ))}
      </section>
    </main>
  );
}
export default App;
