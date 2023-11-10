import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar,Button,useMediaQuery,useTheme, Typography } from '@mui/material';
import Home from './Home';
import Account from './account';
import AccountForm from './accountForm';
import About from './About' 
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DrawerComp from './DrawerComp';
import ContactUs from './contactus';

const PAGES = ["Home","Check","Update","About Us","Contact Us"] 


function NavBarMUI() {

  const [selectedTab, setSelectedTab] = useState(0);

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md')) 


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
                        {
                          PAGES.map((page, index)=>{
                          return  <Tab key={index} label={page} />
                          })
                        }
                       
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
