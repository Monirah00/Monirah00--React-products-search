import React from 'react'
import data from './data'

function Home() {
    const [filter,setFilter] = React.useState('')

    const searchfilter = (event) => {
        setFilter(event.target.value)
    }
    let dataSearch = data.cardData.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })
    return (
        <>
    
            
            <ul>
  <li><a href="/">Home</a></li>
  <li><a href="/">News</a></li>
  <li><a href="/">Contact</a></li>
  <li><a href="/">About</a></li>
</ul>   
            
<div className='searchbar'>
            <h2>Search Products  </h2> 
            <input type="text" value={filter} onChange={searchfilter.bind(this)} />

            </div>


            <div className="row">

                 {dataSearch.map((item,index)=>{
                     return(
                        <div className="col">
                        <div className="card">
                            <img src={item.img} alt="" />
                            <div className="card-body">
                                <div className="card-title">
                                    <h2>{item.title}</h2>
    
                                </div>
                                <div className="card-desc">
                                    <p>{item.Desc}</p>
                                    <h3>{item.price}</h3>
                                    <h3>{item.order}</h3>
    
                                </div>
                            </div>
                        </div>
                    </div>
                     )
                 })}
               
            </div>
        

        </>
    )
}

export default Home
