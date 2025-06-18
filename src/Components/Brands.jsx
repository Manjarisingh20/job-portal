import React from "react";
import spotify from "../Icons/spotify.png";
import slack from "../Icons/slack.png";
import adobe from "../Icons/adobe.png";
import asana from "../Icons/asana.png";
import linear from "../Icons/linear.png";
import Image from "./common/Images";

export default function Brands() {
  return (
    <section className="brands">

        <Image  src={spotify} alt="Spotify"/>
        <Image src={slack} alt="Slack"/>
        <Image src={adobe} alt="Adobe"/>
        <Image src={asana} alt="Asana"/>
        <Image src={linear} alt="Linear"/>
    
    </section>
  );
}
