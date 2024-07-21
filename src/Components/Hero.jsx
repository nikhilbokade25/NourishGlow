import './Hero.css';
import image1 from "../assets/image_1.png";

export default function Hero(){
    return(
        <div className="hero_container">
            <div className='hero_tagline'>
                <h2>Nourish Your Skin. <br/><span className='tagline_2'>Reveal Your Radiance.</span></h2>
                <img src={image1} alt='Bottle' className='hero_image'/>
                
            </div>
        </div>
    );
}