import './App.css';
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import images from './assets/Images';

function App() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div>
      <motion.div ref={carousel} className='carousel'>
        <motion.div 
        drag='x'
        whileTap={{cursor: "grabbing"}} 
        dragConstraints={{right: 0, left: -width}} 
        className='inner-carousel'>
          {images.map((image, index) => {
            return (
              <motion.div className='item'>
                <img 
                key={index}
                src={image}
                alt="New York"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
