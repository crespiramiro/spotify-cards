import Cards from "./Cards";

function ContAlbums() {

    return ( 
        <div className="mb-8" >
            <div className="flex items-center mb-4 justify-between" >
                <h2 className="hover:underline hover:cursor-pointer  font-bold text-gray-200 text-2xl ">Discography</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6  " >
                <Cards img='albumcovers/magma-gojira.jpeg' album='Magma' data='2016 - Album' />
                <Cards img='albumcovers/mars-gojira.jpeg' album='From mars to sirius' data='2005 - Album' />
                <Cards img='albumcovers/fortitude-gojira.jpeg' album='fortitude' data='2021 - Album' />
                <Cards img='albumcovers/sauvage-gojira.jpg' album="L'Enfant Sauvage" data='2012 - Album' />
                <Cards img='albumcovers/flesh-gojira.jpeg' album='The way of all flesh' data='2008 - Album' />
                <Cards img='albumcovers/terra-gojira.jpeg' album='Terra Incognita' data='2001 - Album' />
            </div>
        </div>
     );
}

export default ContAlbums;