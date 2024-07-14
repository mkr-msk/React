function Image({ index, title }) {
    return(
        <figure className="image">
            <img src={`/img/${index}.jpg`} alt={title} />
            <figcaption>
                <h3>Species: {title}</h3>
            </figcaption>
        </figure>
    );
}

export default Image;