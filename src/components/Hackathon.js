import Banner from "./Hackathon/Banner";
import FAQ from "./Hackathon/FAQ";
import Jury from "./Hackathon/Jury";
import Prix from "./Hackathon/Prix";
import Theme from "./Hackathon/Theme";
import Vision from "./Hackathon/Vision"

import Header from './Header_Nav/HeaderTopTwoColors';
import Marquee from "react-fast-marquee";

import Card from "./utils/Card";

/*<Banner />
        <Vision />
        <Theme />
        <Prix />
        <Jury />
        <FAQ />*/

const Hackathon = () => {

    return (
    <div>
        <Header />
        <Banner />
        <Vision />
        <Theme />
        <Prix />
        <Jury />
        <FAQ />
    </div>)
}

export default Hackathon;
