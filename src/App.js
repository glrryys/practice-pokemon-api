import {useEffect, useState} from 'react';

// const api = (``); this will not be needed since it's
// not needed to have a api key downloaded


// GET /api/v2/pokemon/{id or name} TRY TO REMEBER THIS 


function POKEMON() {

  // define variables
  const[name, setName] = useState(''); // text
  const [url, setUrl] = useState(''); // link 
  const [image, setImages] = useState('');
  const [stats, setStats] = useState(''); 

  
  const [data, setData] = useState({}); // managing groups of data 


  const submitForm = async () => {
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
    const resData = await res.json(); 

      // what does res do?
      // it's just now holds the data from the api

      // res.json makes open and readable 



      // what does this not need const ISBNinfo and such
      
      // answer: the ISBN api gave u the number info BUT didn't find the
      // info in the number like author and such

      // pokemon gives you directly to all the information
      // you asked since it sends all the info in one input




      // CLEANER MESSAGE:
      // Why Pokémon API doesn’t need `ISBNinfo` or extra lookup:

       // The ISBN API gives you a response with a key like "ISBN:9781234567890".
      // You have to build that key and look inside it to get the real book info.
      // Example: resData["ISBN:9781234567890"].title

      // The Pokémon API is simpler — when you search by name, it sends all the
    // information (name, image, stats) directly in one object.
      // Example: resData.name, resData.sprites.front_default

    // So with Pokémon, you don’t need to look anything up — it’s already ready.


    

    setData({ 
      name: name,  // input of user
      image: resData.sprites.front_default,    // just means the res.json made it readable 
      // not didn't know what extactly to find or where
      stats: resData.stats, 
      url: resData.forms[0].url    // [] shows array
      // to get to the first array, it's 0 and then put it inside
    }); 
    
  };

  return (
     <div>

       {/* INPUT FIELD */}
       <input
       type= 'text'
       value= {name}
       onChange= {e => setName(e.target.value)}
       
         />

       {/* SUBMIT BUTTON FIELD */}

       <button onClick={submitForm}>SUBMIT</button>

      <div>

      {/* LABELS & OUTPUTS */}
      <label htmlFor="pokemon name:"> pokemon name: </label>
      <h5>{data.name}</h5>
      <label htmlFor="stats:"> stats: </label>
     


     {/* needs the data.stats && since 
     data.stats.map isn't fetching info from
     setData and its using data.stats && to
     vertify if its there and working so it can
     turn it into an array */}
      {data.stats && data.stats.map((s, i) => (
          <div key={i}>  {/* this isn't needed since im
          not clearing anything BUT it just keeps track of the rows */}
            <h5>{s.stat.name}: {s.base_stat}</h5>
          </div>
   ))}
      
    
      <label htmlFor="image:"> image: </label>
      <img src={data.image} alt="image" />


      <div>
         <label htmlFor="url:"> url: </label>
      <h5>{data.url}</h5>

      </div>
      </div>

     </div>
  ); 

}

export default POKEMON;