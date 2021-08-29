import React from 'react';

const divs = (numero) => {
  const arr = [];
  for(let i = 0; i< numero; i++) {
    arr.push(i)
  }
  return arr;
}

const Animacion = ({effectN, divsN}) => {
  const efecto = `effect ${effectN}`;
  return(
    <div className={efecto}>
      { divs(divsN).map( n => (<div key={n} ></div>))}
    </div>
  )
}

export default Animacion;