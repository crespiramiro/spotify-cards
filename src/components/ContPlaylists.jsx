import Playlist from "./Playlist";

function ContPlaylists() {
    return ( 
        <div className="mt-2 mb-4" >
            <div className="flex items-center mt-2 mb-4 justify-between" >
                <h2 className="text-gray-200 font-bold hover:underline hover:cursor-pointer text-2xl " >Featuring Gojira</h2>
            </div>
            <div className="grid grid-cols-1 md;grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 " >
            <Playlist img='playlistCovers/thisIs.jpeg' alt='This is gojira' playlist='This is gojira' data='This is gojira. The essential tracks, all in one playlist.' />
            <Playlist img='playlistCovers/radio.jpeg' alt='Gojira radio' playlist='Gojira Radio' data='By Spotify.' />
            <Playlist img='playlistCovers/essentials.jpeg' alt='Metal Essentials' playlist='Metal Essentials' data='Want some metal? Better to start with the essentials. Cover: Metallica.' />
            <Playlist img='playlistCovers/classics.jpeg' alt='00s Metal Classics' playlist='00s Metal Classics' data='The biggest metal songs of the 2000s. Cover: Slipknot.' />
            <Playlist img='playlistCovers/heavy.jpeg' alt='Heavy Metal' playlist='Heavy Metal' data='Heavy Metal forever. Classics to brand new tracks, play it loud. Cover: Judas Priest.'  />
            <Playlist img='playlistCovers/workout.jpeg' alt='Adrenaline Workout' playlist='Adrenaline Workout' data='If your workout doubles as an outleet for your agression, this is the playlist for you.'   />
            </div>
        </div>
     );
}

export default ContPlaylists;