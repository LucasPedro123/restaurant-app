import About from "../components/About/About-component";
import Header from "../components/Header/Header-componente";
import Main from "../components/Main/Main-component";
import Menu from "../components/Menu/Menu-component";
import Service from "../components/Service/Service-component";
import SpecialDish from "../components/SpecialDish/SpecialDish-component";

function Home() {

  return (
    <div className="pai">
      <Header />
      <Main/>
      <Service />
      <About />
      <SpecialDish />
      <Menu/>
    </div>
  )
}

export default Home;