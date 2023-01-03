import './projects.css'
import national_img1 from "../../Images/National Days Pt1.PNG"
import national_img2 from "../../Images/National Days Pt2.PNG"
import national_img3 from "../../Images/National Months Pt1.PNG"
import community from "../../Images/community pic.png"
import cp from "../../Images/cp pic.png"
import eco from "../../Images/eco pic.png"
import info from "../../Images/info pic.png"
import sell_shop from "../../Images/sell shop pic.png"
import shops from "../../Images/shops pic.png"

const Projects = () => {
    
    return (
        <>
            <div className='note-at-top'>All projects with a GitHub repository will be hyperlinked by the project header</div>
            <div className='project-container'>
                <div className='project-header' >
                    <a href="https://github.com/derekgauger/website" target="_blank" rel="noreferrer">The Website You Are Currently Viewing</a>
                </div>
                <div className='project-text'>
                    <p>
                        I started creating this website because I thought it would be cool to have my own website. I did a lot of the coding at night, when I had free time, so I went with a darker theme as to not 
                        blind myself. The orange secondary color was decided by one of my friends saying "orange because you are ginger". I've wanted to learn a bit more about web development and the frameworks 
                        commonly used, so I used React JS and a lot of GeeksForGeeks tutorials. So far, I am happy with the look, but if you have any ideas for improvement, I'd love to incorperate them. 
                        There is probably more I could say about this project, but I think it would be quite redundant since you can just see it for yourself.
                    </p>
                </div>
            </div>


            <div className='project-container'>
                <div className='project-header'>
                    <span>Molson Coors Blockchain Capstone</span>
                </div>
                <div className='project-text'>
                    <p>
                        The Milwaukee School of Engineering requires its students to do a capstone/senior-design project to finish their undergraduates. I am working with a group of 4 other students and the Molson Coors 
                        Beverage Company Emerging Technology Team. Molson Coors reached out to MSOE with an opportunity to allow students to help improve supply-chain traceability using Blockchain technologies. 
                        We aim to provide Molson Coors with a proof-of-concept solution for tracking their fleet of Peroni kegs. Our goal is to improve visbility for kegs in warehouses and third-party locations, 
                        reduce potential asset/product loss along the supply chain, and reduce the time it takes to audit kegs. 
                        <br/><br/>
                        The main portion of the project that I've been working on is the Blockchain research and implementation. I've learned a lot about how Blockchain works behind the scenes, use-cases, and 
                        pros/cons in different situations. Molson Coors is not requiring us to use any specific technologies, but we would like to provide them with Blockchain research and a basic proof-of-concept solution 
                        so the Emerging Technology team can use that information in other areas. We have been researching different methods of tracing kegs throuhgout the supply-chain including radio frequency identification 
                        (RFID), QR Codes, and barcodes with the scanners needed for each. We will currently be moving forward with RFID and Blockchain, but this system as a solution may change throughout the prototyping process.
                        <br/><br/>
                        Unlike other projects in this list, this one is currently still in progress and is under a non-diclosure agreement for code and other company specific information. Writing these descriptions does not violate any agreements.
                    </p>
                </div>
            </div>


            <div className='project-container'>
                <div className='project-header'>
                    <a href='https://github.com/derekgauger/Robot-Car' target="_blank" rel="noreferrer">Robot Car</a>
                </div>
                <div className='project-text'>
                    <p>
                        This was a partner project using C++ for my Real-time systems course. There was some external API libraries and code created by our professors that we had to utilize in our programming. 
                        Our goal was to create a robot that could sense walls, stop when needed, follow lines, and be controlled by a person. It was essentially a more simplified version of self-driving cars. 
                        We worked with motors, ultrasonic sensors, and infrared sensors. Clearly, we used the motors to control the movement of the car. It could turn, move straight, diagonally, and have varying speeds.
                        The ultrasonic sensor was used to determine the distance from the robot to the object infront of it. The distance sensor was then used to allow us to make a wall-sensing robot that could stop
                        when it was about to hit a wall. The infrared sensor was used to allow the robot to track a line. We would put the robot onto a white platform with a black stripe, the robot could then 
                        follow the blackstripe. Toward the end of the course, we implemented a streaming feature to allow us to see video from the robot's camera.
                    </p>
                    <div className='project-subheader'>Videos of the robot</div>
                    <iframe className="video" title="vid1" src="https://www.youtube.com/embed/AjNqd4braPk"></iframe>
                    <iframe className="video" title="vid2" src="https://www.youtube.com/embed/x4_yP-olWpg"></iframe>
                </div>
            </div>


            <div className='project-container'>
                <div className='project-header'>
                    <a href='https://github.com/derekgauger/truth_discord_bot' target="_blank" rel="noreferrer">"Truth" Discord Bot</a>
                </div>
                <div className='project-text'>
                    <p>
                        "Truth" is the name of the Discord bot I created using Javascript. I am not really sure where the name originated from, but it is what I stuck with. This Discord bot is a tool that automatically posts 
                        the fun national days in a Discord server. For example, these holidays include "National Donut Day", "National Cat Day", and "National Frozen Yogurt Day". The bot will also post the fun National
                        Months such as "National Grapefruit Month", "National Snack Food Month", and "National Bake for Family Fun Month".
                    </p>
                    <div className='project-subheader'>Examples of National Day Posts</div>
                    <img className="project-img" src={national_img1} alt="Cake Day"></img>
                    <img className="project-img" src={national_img2} alt="Other National Days"></img>
                    <div className='project-subheader'>Examples of National Month Posts</div>
                    <img className="project-img" src={national_img3} alt="National Months Example"></img>
                </div>
            </div>


            <div className='project-container'>
                <div className='project-header'>
                    <a href='https://github.com/derekgauger/Economy-Blocks' target="_blank" rel="noreferrer">"Economy Blocks" Mincraft Plugin</a>
                </div>
                <div className='project-text'>
                    <p>
                        Economy Blocks is a Minecraft Plugin created using Java. I decided to make a simple Mincraft plugin to increase the longevity of the Minecraft servers with my friends. All servers die out 
                        eventually because people get bored. When I was younger, Minecraft was my favorite game. It was one of those games that was simple to understand and very customizable, so it was kind of 
                        one of those gateway games that got me into computers and understanding how everything works behind the scenes in code. This plugin was made to add a few more fun features into the game 
                        and encourage people playing together. A few of these features include adding stores for people to buy and sell items, communities for grouping up with friends, and server-wide events.
                        There were a lot more features that I won't go over in this description, but those were some of the big ones. This was a pretty big project, so I can't show all of it in this tiny blurb,
                        but here are some pictures showing some basics of what I did. (I am not sure why I chose pink for the base color)
                    </p>
                    <div className='project-subheader'>List of commands to get information about the plugin</div>
                    <img className="project-img" src={info} alt="Info"></img>
                    <div className='project-subheader'>Shops you can navigate to using this GUI</div>
                    <img className="project-img" src={shops} alt="Shops"></img>
                    <img className="project-img" src={sell_shop} alt="Sell Shop"></img>
                    <div className='project-subheader'>Community commands admins can do</div>
                    <img className="project-img" src={community} alt="Community"></img>
                    <div className='project-subheader'>Economy implementation</div>
                    <img className="project-img" src={eco} alt="Economy"></img>
                    <div className='project-subheader'>"Care Packages" you can earn by doing certain things</div>
                    <img className="project-img" src={cp} alt="Care Package"></img>

                </div>
            </div>


            <div className='project-container'>
                <div className='project-header'>
                    <a href='https://github.com/derekgauger/python_util_library' target="_blank" rel="noreferrer">Python Utility Library</a>
                </div>
                <div className='project-text'>
                    <p>
                        This project is more of a storage area for important Python related methods, structures, and algorithms. During my junior year of college, I took an algorithms class and I figured it
                        would be beneficial for me to put all the data structures, sorting algorihtms, and searching methods found into a single GitHub repository. Putting them in the same area would make it easier
                        for me to go back and refresh those concepts in my mind. The data structures I am storing include binary search trees, graphs, linked-lists, and queues. The sorting algorithms included are 
                        insertion, selection, bubble, merge, quick, and counting sort. Along with the sorting algoirthms, there are also benchmarking methods for each of them. All of the code in this repository is thouroughly 
                        commented to avoid any confusion from later me and so others can look through efficiently.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Projects