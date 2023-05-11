import { useState } from "react";

const WelcomeTitle = () =>{
    const [hoverIndex, setHoverIndex] = useState(-1);
    const title = 'ON THIS DAY IN HISTORY';

    return (
        <>
            <div id="welcomeTitle">
                {title.split('').map((letter, index) => (
                    letter === ' ' ? (
                        <span key={index} className="titleSpace">&nbsp;</span>) : (
                        <span
                        key={index}
                        className={`titleLetter ${
                            hoverIndex === index ? 'hovered' : ''} 
                            ${hoverIndex === index + 1 ? 'before' : ''
                        } 
                        ${hoverIndex === index - 1 && index !== 0 ? 'next' : ''}`
                        }
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(-1)}
                        >
                        {letter}
                        </span>
                    )
                ))}
            </div>
        </>
    )
}

export default WelcomeTitle;