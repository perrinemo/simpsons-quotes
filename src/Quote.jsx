import React from "react";

const Quote = ({ quote }) => {
    return(
        <figure className="Quote">
            <img
                src={quote.image}
                alt={quote.character}
            />
            <figcaption>
                <blockquote>
                    {quote.quote}
                </blockquote>
                <cite>{quote.character}</cite>
            </figcaption>
        </figure>
    )
}

export default Quote;