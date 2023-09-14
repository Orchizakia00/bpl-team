import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch('./players.json')
        .then(res => res.json())
    },[])

    return (
        <div className="border-2 w-64 bg-green-200 rounded-2xl p-4">
            <div className="flex justify-center">
                <img className="rounded-full w-40 h-40" src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170916/mushfiqur-rahim.jpg" alt="" />
            </div>
            <p className="text-center font-bold">Mushfiq</p>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam.</p>
            <div className="flex gap-3 justify-center">
                <p>Salary: $1.2M</p>
                <p>Wicket Keeper</p>
            </div>
            <div className="flex justify-center">
            <button className="bg-orange-400 p-3 rounded-xl text-center">Select</button>
            </div>
        </div>
    );
};

export default Home;