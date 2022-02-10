import cristiane from '../images/cristiane.jpg'

function Card() {
  return (
    <main className="card">
        <img src={cristiane} className="npm "/>
        <div className="card-content">
             <h1 className="card-header">Cristiane Abreu</h1>
                <h4>Frontend Developer</h4>
                    <h6>www.cristianeabreu.com</h6>
                        <section className="card-btn">
                            <button> Email</button>
                            <button>Linkendin</button>   
                        </section>
                        <section className="card-text">
                            <h2>About</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini</p>
                        </section>
                        <section>
                            <h2>Interests</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaini</p>
                        </section>

        </div>    
    </main>
  );
}

export default Card;