import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import Weather from './Weather';

function App() {
  // Creating a state variable called location and a function to update it
  const [location, setLocation] = useState('');
  const [responseData, setResponseData] = useState({});
  const [input, setInput] = useState('');

  //useEffect runs when location changes
  useEffect(() => {
    //fetches data from our weather API based on the location
    const fetchLocationData = async () => {
      try {
        let response = await axios.get(`http://localhost:3001/weather/?searchQuery=${location}`)
          //Updating responseData with the first result from the API response
        setResponseData(response.data[0])
          console.log(response);
          //catch errors during the request
      } catch (error){
        //If the error response status is 404 (or Not Found) alert user
        if(error.response || error.response.status === 400){
          alert('Enter a valid city :)');
        }else{//Displays an alert message to the user
          alert('Something went wrong');
        }
       } 
    };
    //calls async function to fetch data
    fetchLocationData();
    //useEffect should run whenever the location changes
  }, [location]);

  return ( //returning some jsx to render in browser
    <div style={{background: ' 62deg, #8EC5FC 0%, #E0C3FC 100%', height: '90vh', padding: '20px', margin:'10px 10px 10px 10px', border:'2px solid #990099'}} className="App">
      {/* Form component for user input */}
      <Form >
        {/* when a user types, the input value is stored in the input state variable using the setInput function */}
        <Form.Control style={{height:'30px', width:'200px'}}placeholder="Explore a city" type='text' onChange={(e) => {setInput(e.target.value)}}/>
      </Form>
      {/* Button calls the setLocation function when clicked */}
      <Button style={{background: 'aliceblue',  cursor: 'pointer', padding: '10px 40px', margin: '30px 0 0 10px', border:'1px solid #990099'}} onClick={(e) => {
        e.preventDefault()
        //setLocation function sets the location state variable to the current value of the input state variable
        setLocation(input)
      }}>Explore!</Button>
      {/* renders the Weather component w/ props based on responseData state variable */}
      <Weather lat={responseData?.lat} lon={responseData?.lon} city={responseData?.city_name} description={responseData?.description} />
    </div>
  );
}

export default App;
