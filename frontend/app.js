import React from 'react';
import  ReactDOM  from 'react-dom/client';
import {restaurant} from "./Data";

const Header = ()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img src="https://marketplace.canva.com/EAE1GTHrBuk/2/0/800w/canva-healthy-food-logo-template.-organic-food-vector-design.-fork%2C-spoon-and-leaves-logotype-L6tNe-eHLzE.jpg" alt="Company Logo" />
            </div>
            <div className='details-container'>
                <ul className='details-list'>
                    <li className='list'>Home</li>
                    <li className='list'>About</li>
                    <li className='list'>Contact Us</li>
                    <li className='list'>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Search = ()=>{
    return(
        
            <div className='search-container'>
                <input type="text" placeholder='Search'/>
                <button className='search-btn'>Search</button>
            </div>  
      
    )
}


const RestaurantCard = (props)=>{
   const {resData} = props;
   console.log(resData);
    return (
        <>
           {/* food card */}
           <div className='body-container'>
                <div className='foodcardlogo-container'>
                    <img className="comany-name"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId} alt="dominos" />
                    
                        <h3 className='heading3'>{resData.name}</h3>
                        <h4 className='heading3'>{resData.cuisines.join(',')}</h4>
                        <h4 className='heading3'>{resData.areaName}</h4>
                        <h4 className='heading3'>{resData.avgRating}</h4>
                </div>
           </div>
        </>
    )
}

const Body =()=>{
    return(
        <div className='mainbody-container'>
            {
                restaurant.map((restaurants,index)=>(
                    <RestaurantCard key={restaurants.info.id} resData={restaurants.info}/>
                ))
            }

            
        </div>
    )
}

const App = ()=>{
    return(
        <>
            <Header/>
            <Search/>
            <Body/>
            

        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);