import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    // console.log(players);

    return (
        <div className=" grid grid-cols-2 gap-4">

            {
                players.map(player => (
                    <>
                        <div className="border-2 bg-green-200 rounded-2xl p-4 w-96">
                            <div className="flex justify-center">
                                <img className="rounded-full w-40 h-40" src={player.img} alt="" />
                            </div>
                            <p className="text-center font-bold mb-2">{player.name}</p>
                            <p className="text-center mb-2">{player.description}</p>
                            <div className="flex gap-3 justify-center mb-2">
                                <p><span className="font-bold">Salary: </span>${player.salary}</p>
                                <p><span className="font-bold">Role:</span>{player.role}</p>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-orange-400 p-3 rounded-xl text-center">Select</button>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    );
};

export default Home;