import React,{useEffect,useRef} from 'react';
import './metatesk.css'
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive';
import SectionSix from './sectionSix';
import SrcollNumber from './scrollNumber';
import SectionSeven from './sectionSeven';
import metateskimg from './metaImg/metatesk-logo.png';
import SectionEight from './sectionEight';
import SectionNine from './sectionNine';
import {useSpring,animated} from 'react-spring';
// import FooterSection from '../homeFolder/footerSection';


const Metatesk = ({Boolean}) => {
  const {boolean, setboolean} = Boolean


  const container = useSpring({
		to: [{height: "400px" }],

		from: {height: "200px"  },
    config: {
      duration: 1500,
    }
	})

  const Title = useSpring({
		to: [{top: "100px" }],
		from: {top: "-300px"  },
    config: {
      duration: 1500
    }
	})

  

  return (
    <article className='metatesk-section' >
      
      <SectionOne />
      <SectionTwo />
      <SectionThree  />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven  />
      <SectionEight />
      <SectionNine setboolean={setboolean} />
      
    </article>
  )
}

export default Metatesk