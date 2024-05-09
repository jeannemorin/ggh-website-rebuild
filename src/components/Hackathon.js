import Banner from "./Hackathon/Banner";
import FAQ from "./Hackathon/FAQ";
import Join from "./Hackathon/Join";
import Jury from "./Hackathon/Jury";
import Prix from "./Hackathon/Prix";
import Theme from "./Hackathon/Theme";
import Vision from "./Hackathon/Vision"

import Header from './Header_Nav/HeaderTopTwoColors';
import Marquee from "react-fast-marquee";


const Hackathon = () => {

    return (
    <div>
        <Header />
        <Banner />
        <Vision />
        <Theme />
        <Prix />
        <Jury />
        <Join />
        <FAQ />
    </div>)
}

export default Hackathon;
