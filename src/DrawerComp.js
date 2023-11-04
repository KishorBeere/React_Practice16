import {Drawer,IconButton,List,ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComp(){
    const [openDrawer,setOpenDrawer] = useState(false)
    return(
        <> 
        <Drawer open={openDrawer} onClose={()=>{
            setOpenDrawer(false)
        }}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=>{
            setOpenDrawer(!openDrawer)
        }}>
        <MenuIcon/>
        </IconButton>
        </>
    )
}

export default DrawerComp