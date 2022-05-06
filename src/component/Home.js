import React, {useState} from 'react'
import { myMusic } from './Song'

const Home = () => {

    const [play, setplay] = useState(myMusic);
    const [search, setsearch] = useState('');

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid d-flex justify-content-center">

        <form class="d-flex">
          <input class="form-control me-2 searchBar" onChange={(event)=> setsearch(event.target.value)} type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      
    </div>

    <div className='sort_by'>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort by
         </a>
         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
           <li><a class="dropdown-item" href="#">All</a></li>
           <li><a class="dropdown-item" href="#">Hindi</a></li>
           <li><a class="dropdown-item" href="#">English</a></li>
         </ul>
      </li>
    </ul>
    
     </div>
    </div>
  </nav>

    <div className='container'>
    <h1 className='text-center mt-5 lat_col'>Latest Collections</h1>


    <div className='row mt-3'>
    {play.filter((val)=>{
       if(search == ""){
           return val;
       }
       else if(val.title.toLowerCase().includes(search.toLowerCase())){
           return val;
       }
    }).map((ele)=>{
        return(
            <div className='col-lg-4 col-sm-12'>
            <div class="card card_css">
            <img src={ele.img} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{ele.title}</h5>
              
              
            </div>
          </div>
            </div>
        )
    })}
    </div>
    </div>
  
        
    </div>
  )
}




export default Home