import React from "react";

function GreetingRealtime() {
 
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours <17) {
        timeOfDay = "afternoon"
    } else if (hours >= 18 && hours <23) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    return (
        <h1>Good {timeOfDay}, I'm Menno Zimmer
        <br/> 
        web developer and musician  
        </h1>
    )
}

export default GreetingRealtime