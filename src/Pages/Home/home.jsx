import './home.css'
const Home = () => {
    
    return (
        <>
            <div className="map-container">
                <div className="vertical-line"></div>
                <iframe className="map" title="map_of_me" src="https://my.atlistmaps.com/map/a2ec8d34-0aaa-4545-8b59-ceeb3fac8931?share=true" allow="geolocation" frameborder="0" scrolling="no" allowfullscreen></iframe>
                <div className="vertical-line"></div>
            </div>

            <div className='map-blurb'>
                This is an interactive map showing all the important locations in my life so far. <span>Click the markers to get a short description.</span>
            </div>

            <div className='about-container'>
                <div className='about-header'>
                    <span>About Me</span>
                </div>

                <div className='about-text'>
                    <p>
                        Howdy, I am from a small town of about 10,000 people called Elkhorn, Wisconsin. However, a good portion of my childhood was spent in Delavan, Wisconsin (One of Elkhorn's neighboring towns). 
                        My family moved locations when I was in middle school and since then, I've always thought of Elkhorn as my Hometown. I graduated from the Elkhorn Area School District in Spring of 2019. 
                        After high school graduation, I set my goals to college graduation. I had already been accepted into the Milwaukee School of Engineering (MSOE) and began attending in Fall of 2019 as a Software Engineering major. 
                        Everything was going great until the Coronavirus epidemic came around ended up sending us all home for about a year and a half. 
                        Classes became a bit harder because there was so much going on in everyone's lives during that time. Eventually, the COVID restrictions passed, and we were all able to go back to school. 
                        After being away for so long, being back in-person was refreshing. I plan to graduate from MSOE in Spring of 2023 with a Bachelor's in Software Engineering. I've already accepted an offer for a full-time
                        position after graduation at my current internship, Astronautics.
                        <br/><br/>
                        One of my biggest passions/hobbies is disc golf. I had never heard of the sport before being invited to join a few of my friends for a round. Needless to say, I enjoyed playing it and the
                        obsessive urge to learn more had taken over. I started watching YouTube video trying to understand techniques, disc types, and how professionals play. One summer, I decided I wanted to learn to throw farther,
                        so I went out to a field every day and practiced, recorded myself, and learned. I can proudly say that it all worked out. I told my parents that I would figure it out and be good at the game, so if 
                        you guys are reading this... told ya so.
                        <br/><br/>
                        I've talked a lot about everything in my life except software engineering, so this section will be more about that. I told my parents in elementary school that I wanted to be a software engineer 
                        when I grew up. Since then, I've been tailoring all of my skills and classes to focus on STEM related topics. Until recently, I haven't been sure what direction I wanted to take my career. 
                        I figured out that I want to do embedded/back-end software developemnt. I enjoy working with data and not having to worry about making things look nice. Although, I'm not completely set on 
                        doing embedded programming because I am still in my early career stage. This website has been coded from scratch, but if you want to checkout my other projects. Go to the "Projects" tab on this website.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home