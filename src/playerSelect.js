import React, { useState } from 'react';
import Tablero from './tablero';

function PlayerSelect() {

  const [valoresSeleccion, setValoresSeleccion] = useState({
    inputX: "",
    inputO: "",
    buttonX: "",
    buttonO: "",
    jugadorActivo: "",
  });


  const capturarValorInput = (e) => {
    // let { inputX, inputO } = valoresSeleccion;
    // e.target.name == "inputX" ?
    //   (
    //     setValoresSeleccion({ ...valoresSeleccion, inputX: e.target.value, })
    //   ) :
    //   (
    //     setValoresSeleccion({ ...valoresSeleccion, inputO: e.target.value, })
    //   )

    let newData = {
      [e.target.name]: e.target.value
    }
    setValoresSeleccion(prevState => {
      return { ...prevState, ...newData}
    })

  }

  console.log(valoresSeleccion.inputX);


const capturarValorButton = (e) => {
  let { buttonX, buttonO } = valoresSeleccion;

  e.target.name === "buttonX" ?
    (
      setValoresSeleccion({ ...valoresSeleccion, buttonX: "X",})
    ) :
    (
      setValoresSeleccion({ ...valoresSeleccion, buttonO: "O", jugadorActivo: valoresSeleccion.buttonX })
    )

}

console.log(valoresSeleccion);

let cambioDeStage = false;

if (valoresSeleccion.inputX === "" || valoresSeleccion.inputO === "" || valoresSeleccion.buttonX === "" || valoresSeleccion.buttonO === "") {
  cambioDeStage = true;
}

return (
  <>
    {cambioDeStage == true
      ?
      (
        <>
        <h1> Pick a Weapon </h1>
        <div className="playerSelect" >
          <h2>Choose a Weapon</h2>
          <input className="inputX" name="inputX" placeholder="Player 1 Username" onChange={(e) => capturarValorInput(e)}></input>
          <input className="inputO" name="inputO" placeholder="Player 2 Username" onChange={(e) => capturarValorInput(e)}></input>
          <button className="buttonX" name="buttonX" onClick={(e) => capturarValorButton(e)}>X</button>
          <button className="buttonO" name="buttonO" onClick={(e) => capturarValorButton(e)}>O</button>
        </div>
        </>
      )
      :
      (
        <Tablero seleccion={valoresSeleccion}  />
      )}
  </>
)
}

export default PlayerSelect;
