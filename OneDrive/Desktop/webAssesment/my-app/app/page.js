
'use client'


import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JokeList from './componenet/jokeList';
import SearchAndFilter from './componenet/searchandFilter';

const Page = () => (
  <Provider store={store}>
    <div className="p-4 max-w-4xl mx-auto">
      <SearchAndFilter />
      <JokeList />
    </div>
  </Provider>
);

export default Page;


// 'use client'

// import { useState,useEffect } from "react"

// export default function Home() {

//   const [joke,setJokes] = useState([])

//   useEffect(() => {
//     const getData = async () => {
//       const url = "https://v2.jokeapi.dev/joke/Any?amount=10";
  
//       try {
//         const resp = await fetch (url);
//         console.log(resp)
//         const data = await resp.json();
        
//         setJokes(data.jokes);
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
//     getData();
//   }, []);

//   //search

//   const [searchItem, setSearchItem] = useState('')

//   const handleInputChange = (e) => { 
//     const searchTerm = e.target.value;
//     setSearchItem(searchTerm)
//   }


//   // impementing for filter functionalities
 
//     const fetchProgramming = async () => {
//       const url = "https://v2.jokeapi.dev/joke/Programming?amount=10";
  
//       try {
//         const resp = await fetch (url);
//         console.log(resp)
//         const data = await resp.json();
        
//         setJokes(data.jokes);
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
  
 
//     const fetchMisc = async () => {
//       const url = "https://v2.jokeapi.dev/joke/Misc?amount=10";
  
//       try {
//         const resp = await fetch (url);
//         console.log(resp)
//         const data = await resp.json();
        
//         setJokes(data.jokes);
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
   

  

   
//       const fetchSpooky = async () => {
//         const url = "https://v2.jokeapi.dev/joke/Spooky?amount=10";
    
//         try {
//           const resp = await fetch (url);
//           console.log(resp)
//           const data = await resp.json();
          
//           setJokes(data.jokes);
//         } catch (err) {
//           console.error(err);
//         }
//       }
    
     
  
   


//     const fetchChristmas = async () => {
//       const url = "https://v2.jokeapi.dev/joke/Christmas?amount=10";
  
//       try {
//         const resp = await fetch (url);
//         console.log(resp)
//         const data = await resp.json();
        
//         setJokes(data.jokes);
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
//     fetchChristmas;



 
   
  
//     const fetchDark = async () => {
//       const url = "https://v2.jokeapi.dev/joke/Dark?amount=10";
  
//       try {
//         const resp = await fetch (url);
//         console.log(resp)
//         const data = await resp.json();
        
//         setJokes(data.jokes);
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
  

//   return (
//     <div className="ml-12 mt-12">
//     <h1>filter based on</h1>
//     <div className="flex gap-16 text-4xl">
//       <div></div>
//     <button onClick={fetchProgramming}>programming</button>
//    <button onClick={fetchMisc}>Misc</button>
//     <button onClick={fetchDark}>Dark</button>
//     <button onClick={fetchSpooky}>spooky</button>
//     <button onClick={fetchChristmas}>christmas</button>
//     </div> <>

//     <div className="mt-12 mb-12">      
//       <input
//         type="text"
//         value={searchItem}
//         onChange={handleInputChange}
//         placeholder='Type joke to search.....'
//       />
//     </div>

//     {joke.map((j) => (
//             <div >
//                 <div >
//                   <h1 text-xxl>{j.category}</h1>
//                     <h1 className="text-green-400">{j.joke}</h1>
//                 </div>
//             </div>
//         ))}
//     </>
//     </div>
//   );
// }
