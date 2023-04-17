import img from './image.jpeg';
import './App.css';

function Image() {

  const handleClick = () => {
    alert("You clicked this button");
  }

  return (
    <div class="img">
      <h1>Progress</h1>
        <img src={img} class="img-monkey"alt="monkey" />
        <p>
          How i felt at the beginning of this course. Now everything 
          is getting in place and i'm loving it.
          Today's class about React was so encouraging.We learned alot
          about React among which is how it usesboth HTML and vanilla 
          javascript syntax. This is reffered to as JSX.  
        </p>

        <button class="btn" onClick = {handleClick}>Click here</button>              
    </div>
  );
}

export default Image;
