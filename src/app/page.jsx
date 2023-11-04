import ContAlbums from "@/components/ContAlbums";
import ContPlaylists from "@/components/ContPlaylists";


export default function Home() {
  return (
    <div className="min-h-screen pt-28 pl-32 pr-8 " >
      <ContAlbums/>
      <ContPlaylists />
    </div>  
  )
}
