import data from "./data";
import Cards from "./Cards";
function Tours({ tours ,removeTourHandler}) {
    return (
        <div className="container">
            <div className="title">
                <h2>plan with love</h2>
            </div>

            
                <div className="Cards">
                    {
                        tours.map((tour) => (
                            <Cards key={tour.id} {...tour} removeTourHandler={removeTourHandler}></Cards>
                        ))

                    }
                </div>
            
        </div>

    )
}
export default Tours;