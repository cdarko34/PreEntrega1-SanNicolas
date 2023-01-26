const Hero = ({title})=>{
    return(
        <section className="hero hero-slide-1"> 
            <div className="hero-container">
                <article className="hero-container_text-box">
                    <h1>{title}</h1>
                    <p>
                        <strong>Momo Store</strong>
                        Cosas asthetic para ti y tu mascota.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Hero