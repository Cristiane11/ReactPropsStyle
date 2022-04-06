import memesData from "../memesData";

function Meme() {

    let url
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
}
  return (
        <main>
        <div className="form">
            <input type="text" placeholder="Top text" className="form--input"></input>
            <input type="text" placeholder="Bottom text"  className="form--input"></input>
            <button type="submit" className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        </main>
    );
}

export default Meme;