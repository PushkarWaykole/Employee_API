import Navbar from "./components/Navbar";
import SmallContainer from "./components/SmallContainer";
import { React, useState, useEffect } from "react"


function App() {
  const [data, setData] = useState([]);
  const url = 'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020';




  const [selected, setSelected] = useState({
    person: {
      gender: "Female",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      title: "Miss",
      fname: "Ruby",
      lname: "Gamboa",
      number: 3434,
      streetname: "Diagonal square",
      city: "Betulia",
      state: "Quintana Roo",
      country: "Mexico",
      postcode: 45334,
      timezone: "+3:00",
      timezonedes: "Tehran"
    }

  })
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);






  
  return (
    <div>

      <Navbar />

    
      <div>



        <div className="bg-white mt-9 flex gap-7 p-9 align-center justify-center drop-shadow-2xl rounded-lg w-3/4 m-auto">


          <div >
            <img className="rounded-full"

              src={selected.person.image} alt="profile" />
          </div>



          <div>

            <h2 className="font-bold text-email text-4xl underline">{selected.person.title} {selected.person.fname} {selected.person.lname}</h2>
            <p className="mt-4">


               {selected.person.number},{selected.person.streetname},{selected.person.city},{selected.person.state},<b>{selected.person.country}</b>,{selected.person.postcode}


            </p>


            <p>

              {selected.person.timezone},{selected.person.timezonedes} ,{selected.person.country}
            </p>

            <p className="text-gray-400 mt-2">{selected.person.gender}</p>
          </div>
        </div>
      </div>


      <div className="grid grid-rows-5 grid-cols-4 gap-4 m-7">
        {data && data.results?.map((em, id) => {
          return (

            <div key={id} onClick={() => {
              setSelected((prev) => ({
                ...prev,
                person: {
                  gender: em.gender,
                  image: em.picture.large,
                  title: em.name.title,
                  fname: em.name.first,
                  lname: em.name.last,
                  number: em.location.street.number,
                  streetname: em.location.street.name,
                  city: em.location.city,
                  state: em.location.state,
                  country: em.location.country,
                  postcode: em.location.postcode,
                  timezone: em.location.timezone.offset,
                  timezonedes: em.location.timezone.description
                }
              }))
            }}>
              <SmallContainer gender={em.gender} nat={em.nat} title={em.name.title} fname={em.name.first} lname={em.name.last} email={em.email} />
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;

