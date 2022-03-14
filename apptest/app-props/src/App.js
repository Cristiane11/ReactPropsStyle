
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="contacts">
     <Contact
      img="./images/mr-whiskerson.png"
      name="Mr. Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
      website="www.classic.com"
     
     />
     <Contact
     img="./images/fluffykins.png"
     name="Fluffykins"
     phone="(212) 555-1200"
     email="fluff@me.com"
     website="wwww.fui.com"
     />
     <Contact
     img="./images/felix.png"
     name="Felix"
     phone="(212) 555-5487"
     email="thecat@hotmail.com"
     website="wwww.adonainumberone.com"
     />
     <Contact
     img="./images/pumpkin.png"
     name="Pumpkin"
     phone="(212) 555-1111"
     email="pumpkin@scrimba.com"
     website="wwww.jesus.com"
     />
    </div>
  );
}

export default App;
