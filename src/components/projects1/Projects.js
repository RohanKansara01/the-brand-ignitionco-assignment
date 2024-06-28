import React from 'react';
// import Title from '../layouts/Title';
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import './Projects.css'; // Import your CSS file
import boatWebsite from "./projectImages/boat_website.PNG"
import onlineAutoPartShop from "./projectImages/online_auto_part_shop.PNG"
import pharmacy from "./projectImages/pharmacy.png";
import Sugar from "./projectImages/Sugar.png";
import rentomojo from "./projectImages/rentmojo_homepage.PNG"

const Projects = () => {
    return (
        <section id="projects" className="projects-container">

            <div className="projects-title">
                <h2>My Projects</h2>
            </div>
            <div className="projects-grid">
                <ProjectsCard
                    title="Sugar Cosmetics"
                    des="Sugar Cosmetics is a popular beauty brand known for its diverse range of cruelty-free makeup products. From vivid lipsticks to precise eyeliners, Sugar offers high-quality cosmetics that cater to various styles and skin tones."
                    src={Sugar}
                    githublink="https://github.com/navtejnt1/cosmetics-eshop"
                    livelink="https://sugarcosmetics-awcs4db1s-navtejs-projects.vercel.app/"
                />
                <ProjectsCard
                    title="boAt-Clone"
                    des="Discover the boAt Clone Website Project, a web development initiative replicating boAt's sleek design. Enjoy user-friendly navigation while shopping for premium audio gear. We aim to provide an accessible alternative with authentic style."
                    src={boatWebsite}
                    githublink="https://github.com/RohanKansara01/boAt-Website-Clone"
                    livelink="https://shivering-need-4074.netlify.app/"
                />
                <ProjectsCard
                    title="Online Pharmacy"
                    des="Pharmacy is an innovative Pharmacy Management System designed to streamline and modernize pharmacy operations. This comprehensive software solution empowers pharmacies to efficiently manage inventory and enhance customer service."
                    src={pharmacy}
                    githublink="https://github.com/satyam46020/Pharmacy"
                    livelink="https://joyful-ring-9720.vercel.app/"
                />
                <ProjectsCard
                    title="Rentomojo"
                    des=" RentMojo is a pioneering online platform that offers hassle-free rental solutions for a wide range of products, including furniture, appliances, electronics, and more. With flexible rental plans and convenient delivery options, RentMojo simplifies the process of accessing essential items."
                    src={rentomojo}
                    githublink="https://github.com/RohanKansara01/rentomojo"
                    livelink="https://rentomojo-eight.vercel.app"
                />
                <ProjectsCard
                    title="Online Auto Part Shop"
                    des="Autoparts is an online e-commerce website where you will find wide varity of autoparts products for different automobiles. Many functionalities are provided in the web application like login/signup, cart and filtering the products with its category along with payment and full responsiveness."
                    src={ onlineAutoPartShop}
                    githublink="https://github.com/SursaChauhan/Online-Auto-Part-shop"
                    livelink="https://sursachauhan.github.io/Online-Auto-Part-shop/"
                />
            </div>
        </section>
    );
}

export default Projects;
