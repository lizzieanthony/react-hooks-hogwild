import Tile from "./Tile";


const Tiles = (props) => {

    const renderHogTiles = () => {
        return props.hogData.map(hog => {
            return (
            <Tile 
            key={hog.image} 
            name={hog.name} 
            image={hog.image} 
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog["highest medal achieved"]}

            /> )
        })
    }
    return (
        <div className="tileContainer">
            {renderHogTiles()}
        </div>
    )
}

export default Tiles; 