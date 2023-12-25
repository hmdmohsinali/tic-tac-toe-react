import React from 'react'
import circle from "../components/Assests/circle.png";
import cross from "../components/Assests/cross.png";
function TicTacToe() {
  return (
    <div className='text-center'>
      <h1 className='mt-[50px] mb-6 text-white font-bold text-3xl text- flex justify-center items-center'>Tic Tac Toe in<span className='text-sky-300'> React</span></h1>
      <div className='board'>
        <div className='row1 '>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
        <div className='row2 '>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
        <div className='row3 '>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
      </div>
      <button className="w-[100px] h-[50px] border-none cursor-pointer rounded-2xl bg-[#1f3540] text-xl text-sky-300 ">Reset</button>
    </div>
  )
}

export default TicTacToe
