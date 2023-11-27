import { useState } from "react";
import "./App.css";
import GifsCard from "./components/GifsCard";

function App() {
  const [inputValue, setintputValue] = useState(""); //Primer usteState aqui es ingresado los valores del input(lo que el usuario teclea)

  const [gifValue, setGifValue] = useState([]); // Guarda los valores gifs de la peticion (id, title, url)
  console.log("gggifValue", gifValue);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7JJXc7YLPD50sqqk7b1V057VlEYL18Jp&q=${inputValue}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(url);

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium,
      };
    });
    console.log("gifs", gifs);
    setGifValue(gifs);
  };

  const handleChange = (value) => {
    // handleChange recibe como propiedad el value de input mediante onChange
    setintputValue(value);
  };
  console.log("inpuValue", inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      getGifs();
    }
  };

  return (
    <>
      <div id="contenedor">
        <header id="titulo">Buscador de Gifs</header>
      </div>

      <div id="buscador">
        <form onSubmit={(event) => handleSubmit(event)}>
          {" "}
          {/* form por defecto al apretar enter envia la informacion*/}
          <input
            id="inputBox" // primera implementación en el codigo luego lo pusimos en un form para poder enviar la información
            type="text"
            placeholder="Ingresa el nombre del gif"
            value={inputValue}
            onChange={(event) => handleChange(event.target.value)} // maneja la entrada en el imput
          />
        </form>
      </div>
      <div id="gifsContainer" style={{ gap: "1rem" }}>
        {gifValue.map((element) => (
          <GifsCard data={element} key={element.id} />
        ))}
      </div>
    </>
  );
}


export default App;
