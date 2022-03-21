import NavBar from './component/pages/NavBar';
import Main from './component/pages/Main';
import Card from './component/pages/Cards';
import data from './data';
import './App.css';

function App() {
    const cards = data.map(item => {

      return(
        <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        />
      )
    })
  return (
        <div className="App">

              <NavBar/>
              <Main/>
              {cards}
        </div>
  );
}

export default App;
