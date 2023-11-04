import { RiPlayFill } from "react-icons/ri"

function Playlist(props) {
    return ( 
        <div className="bg-black rounded-lg p-4 mx-2  hover:cursor-pointer hover:bg-[#282828] transition-all group" >
            <div className="relative mb-4" >
                <img src={props.img} alt="{props.data}" width="200" height="350"  className=" drop-shadow-2xl rounded-md shadow-xl mx-auto "/>
                <button className="p-3 text-xl  bg-[#1DB954] rounded-full text-[#101010] absolute right-2 bottom-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out " >
                <RiPlayFill/>
                </button>
            </div>
            <div>
                <h3 className="font-md mb-2 text-lg text-gray-100">{props.playlist}</h3>
                <p className="text-sm text-gray-400" >{props.data}</p>
            </div>
        </div>
     );
}


export default Playlist;