import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar,Button,useMediaQuery,useTheme, Typography } from '@mui/material';

import Home from './Home';
import Account from './account';
import AccountForm from './accountForm';
import About from './About' 
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DrawerComp from './DrawerComp';
import ContactUs from './contactus';



function NavBarMUI() {

  const [selectedTab, setSelectedTab] = useState(0);

  const theme = useTheme();
  console.log(theme)

  const isMatch = useMediaQuery(theme.breakpoints.down('md')) 
  console.log(isMatch) 

  
  return (
    <div>
      <AppBar position="static" sx={{background:'#063970'}} >
        <Toolbar>
        <AccountBalanceIcon/>
        {
            isMatch ? ( 
                <>
                <Typography>MyBank</Typography> 
                <DrawerComp/>
                </>
             )  : (
                <>
                <Tabs value={selectedTab} onChange={(e,newValue)=>{
                            setSelectedTab(newValue)
                        }} textColor='inherit' sx={{marginLeft:'auto'}}>  
                        <Tab label="Home" />
                        <Tab label="Check" />
                        <Tab label="Update" />
                        <Tab label="About Us" />
                        <Tab label="Contact Us" />
                </Tabs>
                        <Button sx={{marginLeft:'auto'}} variant='contained'>Login{" "}</Button> 
                        <Button sx={{marginLeft:'10px'}} variant='contained'>Register{" "}</Button> 
                </>
             )
            }

        </Toolbar>

      </AppBar>

      {selectedTab === 0 && <Home />}
      {selectedTab === 1 && <Account />}
      {selectedTab === 2 && <AccountForm />}
      {selectedTab === 3 && <About />}
      {selectedTab === 4 && <ContactUs />}


    </div>
  );
}

export default NavBarMUI;
