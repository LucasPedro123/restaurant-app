import About from "../components/About/About-component";
import Header from "../components/Header/Header-componente";
import Main from "../components/Main/Main-component";
import Service from "../components/Service/Service-component";

function Home() {

  return (
    <div className="pai">
      <Header />
      <Main/>
      <Service />
      <About/>
    </div>
  )
}

export default Home;