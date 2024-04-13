import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";


const Estates = () => {

    const [estate, setEstate] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setEstate(data))
    },[])

    return (
        <div className="mt-14">
            <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900">Stylish Estates Exhibit</h2>
            <p className="md:w-[80%] w-[90%] mx-auto text-blue-900 mt-3">Explore our Stylish Estates Exhibit, featuring a curated selection of luxurious properties exuding elegance and sophistication. Discover your dream home amidst the epitome of refined living.</p>
        </div>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                estate.map(estateCard => <EstateCard key={estateCard.id} estateCard={estateCard}></EstateCard>)
            }
        </div>
        </div>
    );
};

export default Estates;