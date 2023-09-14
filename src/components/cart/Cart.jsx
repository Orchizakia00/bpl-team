/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectedPlayers }) => {
    console.log(selectedPlayers);

    return (
        <div>
            <p className="text-3xl font-bold text-center mb-4">Player Cart</p>
            <h3 className="text-center mb-4">Total Players: {selectedPlayers.length}</h3>
            {
                selectedPlayers.map((player)=>(
                    <li>{player.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;