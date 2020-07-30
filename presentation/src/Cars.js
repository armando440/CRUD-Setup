import React from 'react';

class Carscomp extends React.Component{
     //track state
     state ={
         cars: [
             {title: "Toyota Supra" }
         ]
     }
     // componentDidMount() calls function to fetch()
     getCars = () => {
         const api_url = process.env.REACT_APP_API_URL;
         fetch(`${api_url}/cars`)
         .then(response => response.json())
         .then(data => this.setState({cars:data}, 
            () => {console.log(this.state)}))
     }
     componentDidMount(){
        console.log(this.state)
        this.getCars();
        console.log(this.state)
     }
     // render() list of Cars
     render() {
         const displayCars = this.state.cars.map(car=> <li>{car.Model}</li>);
         return (
             <ul>
                 {displayCars}
             </ul>
         ) 
     }

}
export default Carscomp;