import React from 'react'
import {useState, useEffect} from 'react'
import {Routes, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


const RidesTopSpeed = (props) => {
    
    // let navigate = useNavigate()
    // const showParks = (parks) => {
    //   navigate(`${parks._id}`)
    // }

    console.log(props);

    const [topRides, setTopRides] = useState([])

    useEffect(() => {
      let ridesSort = props.rides;
    // console.log("FIRST LOG", ridesSort)
      ridesSort.sort(function (a,b) {
        if (parseInt(a.speed) > parseInt(b.speed)) {
          return -1;
        } else { 
          return 1;
        }
        });
      // console.log("orig:", props.rides, "sorted?", ridesSort);
      setTopRides([ridesSort[0], ridesSort[1], ridesSort[2]]);
    }, [props.rides])

    console.log("toprides=", topRides)

if (topRides && topRides[0]) {
    return (
      <div className="parks-grid">
        {
        topRides.map((ride, i) => ( //onClick={() => showParks(ride)}
          <div className="park-card"  key={ride._id}>
            <h2>{i+1}: {ride.name}</h2>
            <h3>Top Speed: {ride.speed}</h3>
            <img style={{ display: 'block', width: '650px' }} src={ride.img} alt={ride.name} />
            <h4><u>Other stats:</u> | Height: {ride.height} | Length: {ride.length}</h4>
            <h4>Park: {props.parks.filter((a) => {return a._id === ride.park})[0]}</h4>
            <p>{ride.description}</p>
            
          </div>
        ))} 
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
  }
  
  export default RidesTopSpeed