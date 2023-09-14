/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/Cart";

const Home = () => {

    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    useEffect(() => {
        fetch('./players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    // console.log(players);

    const handleSelectBtn = (player) => {
        setSelectedPlayers([...selectedPlayers, player]);
    }
    console.log(selectedPlayers);

    return (
        <div className="flex gap-10">
            <div className="grid grid-cols-2 gap-4 w-3/4">
            {
                players.map(player => (
                    
                        <div key={player.id} className="border-2 bg-green-200 rounded-2xl p-4 w-96">
                            <div className="flex justify-center">
                                <img className="rounded-full w-40 h-40" src={player.img} alt="" />
                            </div>
                            <p className="text-center font-bold mb-2">{player.name}</p>
                            <p className="text-center mb-2">{player.description}</p>
                            <div className="flex gap-3 justify-center mb-2">
                                <p><span className="font-bold">Salary: </span>${player.salary}</p>
                                <p><span className="font-bold">Role: </span>{player.role}</p>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={() => handleSelectBtn(player)} className="bg-orange-400 p-3 rounded-xl text-center">Select</button>
                            </div>
                        </div>
                ))
            }
            </div>

            <div className="px-5 rounded-xl bg-red-200 w-1/4">
                <Cart
                selectedPlayers = {selectedPlayers}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;