import React from 'react'

function  LevelLayout({data}){


    const handlelevel = (what) => {alert(what)}

 {
    return (
      <div className='level-container' onClick={() => handlelevel(data.click)}>
        <div className='imaheholder'>

        </div>
        <div className='textholder'>
            <div className='title'>{data.title}</div>

            <div className='title'>{data.desc}</div>
        </div>
      </div>
    )
  }
}

export default LevelLayout