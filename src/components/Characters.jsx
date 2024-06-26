import React from 'react'
import kitty from '../images/hellokittyC.png'
import keroppi from '../images/Keroppi-PNG-Picture.png'
import chococat from '../images/Chococat-Transparent.png'
import badtz from '../images/Badtz-Maru-PNG-Image.png'
import gudetama from '../images/Gudetama-PNG-File.png'
import aggretsuko from '../images/aggretsuko.png'
import melody from '../images/My-Melody-PNG-Picture.png'
import litletwin from '../images/Little-Twin-Stars-PNG-Clipart.png'
import kuromi from '../images/Kuromi-PNG-Picture.png'
import pompompuri from '../images/Pompompurin-PNG-Image-File.png'
import pochacco from '../images/Pochacco-No-Background.png'

export default function Characters() {
    return (
        <div className='charactersContainer' id='characters'>
           
<div>
                <div className='card'>

                    <div className='front'>
                        <img src={kitty} alt='principal' />
                        <h2 className='name'>hello kitty</h2>
                    </div>
                    <div className='back'>
                        <p>Hello Kitty has many tastes and hobbies, among them, what fascinates her most is learning English and collecting little things like candies and goldfish. Her favorite food is apple pie made by her mother, Mary Kitty.</p>
                    </div>
                </div>
          
            <div className='card'>
                   <div className='front'>
                    <img src={keroppi} alt='keroppi' />
                    <h2 className='name'>keroppi</h2>
                    </div>
                    <div className='back'>
                        <p>He is known for his empathetic and considerate nature towards others, which is a typical characteristic of the sentimental personality type. He is seen comforting his friends when they feel sad and is always willing to listen.</p>
                    </div>
                </div>
                <div className='card'>
                  <div className='front'>
                    <img src={chococat} alt='chococat' />
                    <h2 className='name'>chococat</h2>
                    </div>
                    <div className='back'>
                        <p>He's always up to date with the latest news, thanks to his ultra-sensitive "antenna" whiskers, but he can be a little absent-minded at times.</p>
                    </div>
                </div>
         
                </div>
                <div>
                <div className='card'>
                   <div className='front'>
                    <img src={badtz} alt='badtz' />
                    <h2 className='name'>badtz</h2>
                    </div>
                    <div className='back'>
                        <p> He is a naughty little penguin. He lives with his mother and father playing pinball in Gorgeoustown. Badtz-Maru attracts a lot of attention while walking his pet crocodile, Pochi.</p>
                    </div>
                </div>
                <div className='card'>
                   <div className='front'>
                    <img src={gudetama} alt='gudetama' />
                    <h2 className='name'>gudetama</h2>
                    </div>
                    <div className='back'>
                        <p>The most notable thing about this card is his personality, his favorite activity being doing absolutely nothing and his melancholic and indifferent attitude. He lacks the will to do things and that creates an atmosphere in which he adopts an unmotivated and even depressed attitude.</p>
                    </div>
                    
                </div>
                <div className='card'>
                   <div className='front'>
                    <img src={aggretsuko} alt='aggretsuko' />
                    <h2 className='name'>aggretsuko</h2>
                    </div>
                    <div className='back'>
                        <p>is a 25-year-old red panda who works in the accounting department of a company. She releases all the frustration caused at work when she sings death metal in a karaoke bar.</p>
                    </div>
                </div>
                </div>
                <div>
            
                <div className='card'>
                    <div className='front'>
                    <img src={melody} alt='melody' />
                    <h2 className='name'>melody</h2>
                    </div>
                    <div className='back'>
                        <p>She is completely white, although she always wears a red or pink hood and an ornament on the right side of her head, which is usually a white flower or a bow. His nose is yellow, his eyes are black, and his left ear is usually lowered.</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='front'>
                    <img src={litletwin} alt='litle twin Stars' />
                    <h2 className='name'>litle twin Stars</h2>
                  </div>
                    <div className='back'>
                        <p>Sanrio's Little Twin Stars are two adorable cherubic twins, named Kiki and Lala, who are always accompanied by wonderful scenes in pastel colors, clouds, and of course, stars.</p>
                    </div>
                </div>
                <div className='card'>
                  <div className='front'>
                    <img src={kuromi} alt='kuromi' />
                    <h2 className='name'>kuromi</h2>
                    </div>
                    <div className='back'>
                        <p>Kuromi likes to write in her diary and writes little romantic stories. It seems that she is angry with My Melody since she accidentally ripped a page out of her diary to wipe a little sheep's nose. Kuromi didn't like it at all and that's why she was angry with My Melody forever. </p>
                    </div>
                </div>
                </div>
                <div>
            <div>
                <div className='card'>
                    <div className='front'>
                    <img src={pompompuri} alt='pompompuri' />
                    <h2 className='name'>pompompuri</h2>
                    </div>
                    <div className='back'>
                        <p>He has a relaxed demeanor and loves the phrase 'let's go out!' He loves milk, anything soft, and his mother's cream and caramel puddings. He has a talent for naps and "pure aerobics," and can make friends with anyone.</p>
                    </div>
                </div>
                <div className='card'>
                   <div className='front'>
                     <img src={pochacco} alt='pochacco' />
                     <h2 className='name'>pochacco</h2>
                    </div>
                    <div className='back'>
                        <p>He is small, curious and clumsy and sometimes sticks his nose where he is not called. He lives in Nightingale Alley and loves basketball, soccer and skateboarding, which is why he is always dressed in sports jerseys. In addition, he likes to walk and loves banana ice cream.</p>
                    </div>
                </div>
                </div>

        </div>
        </div>

    )
}
