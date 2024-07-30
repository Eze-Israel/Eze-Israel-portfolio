import { TypeAnimation } from 'react-type-animation';
import "../css/TypeAnima.css"

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'My name is Eze Isreal O',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a professional Front-end Developer',
        1000,
        'I develop Scalable and Responsive web Applications',
        1000,
        'Hire Me today!!',
        1000,
        'Contact me for more information ',
        1000,
        'Go to My Contact Page or Place a Call! ',
        1000,
        '+2347061033459 ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
     className='TypeAnima'/>
  );
};

export default ExampleComponent