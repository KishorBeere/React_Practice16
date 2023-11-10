import {Drawer,IconButton,List,ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';




const PAGES = ["Home","Check","Update","About Us","Contact Us","Login","Register"] 
function DrawerComp(){
    const [openDrawer,setOpenDrawer] = useState(false) 
    return(
        <> 
        <Drawer open={openDrawer} onClose={()=>{
            setOpenDrawer(false)
        }}>
            <List>
                    {
                        PAGES.map((page,index)=>{
                            return(   
                            <ListItemButton onClick={()=>{
                                setOpenDrawer(false)
                            }} key={index} >
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        )
                        })
                    }
                
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