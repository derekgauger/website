import './home.css'
const Home = () => {
    
    return (
        <>
            <div className="map-container">
                <iframe className="map" src="https://my.atlistmaps.com/map/a2ec8d34-0aaa-4545-8b59-ceeb3fac8931?share=true" allow="geolocation" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default Home