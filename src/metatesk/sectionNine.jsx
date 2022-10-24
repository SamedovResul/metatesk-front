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
    email:''
  })
  console.log(window.innerWidth)
  const submit = (e) =>{
    e.preventDefault()

    if(data.Country && data.email && data.nameSurname ){
      if(validate(data.email) ){
        axios.post('https://metatesk.herokuapp.com/post', data)
        .then(function (response) {
          Swal.fire({
            color:"green",
            text: "Success",
          })
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
                    <button onClick={(e) => submit(e)} >join</button>
                </form>
              </div>
              <div className="col-md-6 ">
                <div  className='metatesk-img' >
                  <img 
                  src={sectionImg} alt="metatesk"
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