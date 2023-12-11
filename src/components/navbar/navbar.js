import Link from 'next/link'
import '@fontsource/roboto/700.css';
import AppBar from '@mui/material/AppBar';
import { blueGrey } from '@mui/material/colors';


export function NavBar(){
  return(
    <AppBar className="blueGrey-500">
      <></>
        <div className="navbar-start">
            <Link href='/' className="btn btn-ghost normal-case text-3xl">PodRace</Link>
        </div>    
    </AppBar>

  )
}
