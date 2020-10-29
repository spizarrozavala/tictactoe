import React, { useState } from 'react';

function Tablero(props) {
  // console.log(props)

  const [cuadrantes, setCuadrantes] = useState({
    A1: "",
    A2: "",
    A3: "",
    B1: "",
    B2: "",
    B3: "",
    C1: "",
    C2: "",
    C3: "",
  })

  const [winner, setWinner] = useState(false)
  const ganador = () => {

    if (cuadrantes.A1 !== "" && cuadrantes.A2 !== "" && cuadrantes.A3 !== "") {
      if (cuadrantes.A1 === cuadrantes.A2 && cuadrantes.A2 === cuadrantes.A3) {
        setWinner(true); 
      }
    }
    if (cuadrantes.B1 !== "" && cuadrantes.B2 !== "" && cuadrantes.B3 !== "") {
      if (cuadrantes.B1 === cuadrantes.B2 && cuadrantes.B2 === cuadrantes.B3) {
        console.log("wewe!2")
      }
    }
    if (cuadrantes.C1 !== "" && cuadrantes.C2 !== "" && cuadrantes.C3 !== "") {
      if (cuadrantes.C1 === cuadrantes.C2 && cuadrantes.C2 === cuadrantes.C3) {
        console.log("wewe!3")
      }
    }
    if (cuadrantes.A1 !== "" && cuadrantes.B1 !== "" && cuadrantes.C1 !== "") {
      if (cuadrantes.A1 === cuadrantes.B1 && cuadrantes.B1 === cuadrantes.C1) {
        console.log("wewe!4")
      }
    }
    if (cuadrantes.A2 !== "" && cuadrantes.B2 !== "" && cuadrantes.C2 !== "") {
      if (cuadrantes.A2 === cuadrantes.B2 && cuadrantes.B2 === cuadrantes.C2) {
        console.log("wewe!5")
      }
    }
    if (cuadrantes.A3 !== "" && cuadrantes.B3 !== "" && cuadrantes.C3 !== "") {
      if (cuadrantes.A3 === cuadrantes.B3 && cuadrantes.B3 === cuadrantes.C3) {
        console.log("wewe!6")
      }
    }
    if (cuadrantes.A1 !== "" && cuadrantes.B2 !== "" && cuadrantes.C3 !== "") {
      if (cuadrantes.A1 === cuadrantes.B2 && cuadrantes.B2 === cuadrantes.C3) {
        console.log("wewe!7")
      }
    }
    if (cuadrantes.A3 !== "" && cuadrantes.B2 !== "" && cuadrantes.C1 !== "") {
      if (cuadrantes.A3 === cuadrantes.B2 && cuadrantes.B2 === cuadrantes.C1) {
        console.log("wewe!8")
      }
    }
  }

  const clickCoordenadas = (e) => {
    if (cuadrantes[e.target.id] === "") {


      // console.log(cuadrantes);
      let newNewData = {
        [e.target.id]: props.seleccion.jugadorActivo
      }
      setCuadrantes(datos => {
        return {
          ...cuadrantes, ...newNewData
        }
      })
      ganador();
    }


    if (props.seleccion.jugadorActivo === "X" && cuadrantes[e.target.id] === "") {
      props.seleccion.jugadorActivo = "O"
    } else if (props.seleccion.jugadorActivo === "O" && cuadrantes[e.target.id] === "") {
      props.seleccion.jugadorActivo = "X"
    } 



  };
 

  return (
    <>
    {
      winner !== false ? (<h1>Winner winner Chicken dinner</h1>)
      :
      (
        <h1>{"Es el Turno de " + props.seleccion.jugadorActivo}</h1>
      )
    }
      <div className="ticTacToe">
        <div className="upperSide">
          <div id="A1" className="A1" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.A1}</div>
          <div id="A2" className="A2" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.A2}</div>
          <div id="A3" className="A3" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.A3}</div>
        </div>
        <div className="middleSide">
          <div id="B1" className="B1" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.B1}</div>
          <div id="B2" className="B2" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.B2}</div>
          <div id="B3" className="B3" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.B3}</div>
        </div>
        <div className="bottomSide">
          <div id="C1" className="C1" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.C1}</div>
          <div id="C2" className="C2" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.C2}</div>
          <div id="C3" className="C3" onClick={(e) => clickCoordenadas(e)}>{cuadrantes.C3}</div>
        </div>
      </div>
    </>
  );
  
}

export default Tablero;
