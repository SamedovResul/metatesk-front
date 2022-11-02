import React ,{useEffect,useState,useMemo} from 'react'
import sectionImg from './metaImg/sectionOnebg.jpeg'
import {Element} from 'react-scroll'
import ScrollTriger from 'react-scroll-trigger';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import axios from 'axios'
import Swal from 'sweetalert2'
import { validate } from 'react-email-validator';

const Addsection3 = ({setboolean}) => {
  const [data, setData] = useState({
    nameSurname:'',
    Country:'',
    email:'',
    date:''
  })
  const [Disabled, setDisabled] = useState(false)
  const [Date, setDate] = useState(false)
  const submit = (e) =>{
    e.preventDefault()

    if(data.Country && data.email && data.nameSurname && data.date ){
      if(validate(data.email) ){
        setDisabled(true)
        // https://metatesk.herokuapp.com/post
        axios.post('https://metatesk.herokuapp.com/email/post', data)
        .then(function (response) {
          Swal.fire({
            color:"green",
            text: "Success",
          })
          setDisabled(false)
          setData({
            nameSurname:'',
            Country:'',
            email:''
          })
        })
        .catch(function (error) {
          console.log(error);
        });
      }else{
        Swal.fire({
          color:"red",
          text: "please insert valid email",
        })
      }
    }else{
      Swal.fire({
        color:"red",
        text: "please complete form",
      })
    }
  }
  console.log(data)
 

  const options = useMemo(() => countryList().getData(), [])
  return (
    <Element name="join" >
      <ScrollTriger onEnter={()=>  setboolean(false)}  >
        <article className='metattesk-contact add-section-Three'>
        {/* <div className='png' ></div> */}
        <div  className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <form action="">
                  <div className='title-div'>
                    <p> Get a FREE demo class for your child </p>
                  </div>
                    <input type="text" value={data.nameSurname} required placeholder='Name and Surname'
                      onChange={(e) => setData({
                        ...data, nameSurname: e.target.value
                      })}
                    />
                    <Select options={options}  placeholder="Country"  onChange={(e) => setData({
                      ...data, Country: e.label
                    })} />
                    {/* <input type="text" required placeholder='Country' /> */}
                    <input type="email" required value={data.email}  placeholder='E-mail adress'
                      onChange={(e) => setData({
                        ...data, email: e.target.value
                      })}
                    />
                    {/* <input type="datetime-local" value="dds" onChange={(e) => setData({
                        ...data, date: e.target.value
                      })}  /> */}
                        <input placeholder="Select date" 
                        type={Date ? "datetime-local" : "text"} 
                        onFocus={() => setDate(true)} 
                        onChange={(e) => setData({
                          ...data, date: e.target.value
                        })} ></input>
                      {
                        Disabled ? (
                          <button
                          style={{backgroundColor:"gray"}}
                            disabled >join</button>
                        ):(
                          <button onClick={(e) => submit(e)}   >join</button>
                        )
                      }
                </form>
              </div>
              <div className="col-md-6 ">
                <div  className='metatesk-img' >
                  <img 
                  src='https://res.cloudinary.com/dbgyytugh/image/upload/v1666609835/sectionOnebg_oknnje.jpg' alt="metatesk"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </article>    
      </ScrollTriger>
    </Element>
  )
}

export default Addsection3