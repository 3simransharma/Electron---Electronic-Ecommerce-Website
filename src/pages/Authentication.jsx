import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { Link } from 'react-router-dom';

import React from 'react'
import { Button, Image } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

import "./pagescss.css";

const Authentication = () => {

    const [treeHeight, setTreeHeight] = useState('200px');
    
    useEffect(() => {
        const itemCount = 3; // Change this to the actual number of items in the TreeView
        const calculatedHeight = itemCount * 40 + 'px'; // Adjust the value as needed
        setTreeHeight(calculatedHeight);
    }, []);

    const internal_navigator = 
    (
     <TreeView
        aria-label="Authentication"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
        height: treeHeight,
        fontSize: '24px',
        flexGrow: 1,
        maxWidth: 400,
        overflowY: 'auto',
        '@media (min-width: 960px)': {
            maxWidth: 600,
        //   marginLeft: 'auto',
        //   marginRight: 'auto',
        },
        }}
        style={{ padding: "20px 20px 20px 20px" }}
    >
        <TreeItem nodeId="1" label="Anchor Links" sx={{ fontSize: "24px" }}>

        <TreeItem
            nodeId="2"
            label={<a href="#login">Login</a>}
        >
            <TreeItem
            nodeId="4"
            label={<a href="#forgotPassword">What happens when you forget Password?</a>}
            />
        </TreeItem>

        <TreeItem
            nodeId="3"
            label={<a href="#register">Register</a>}
        />
        
        </TreeItem>
    </TreeView>
    );

  return (
    <div className='pageAlign'>
    <div className='toTheTopOfPage'></div>
    <h1>Authentication</h1>
  

  {/* <a href = "#login">Login</a><br />
  <a href = "#register">Register</a><br />
  <a href = "#forgotPassword">What happens when user forgets Password?</a> */}

    <div>

    {internal_navigator}

    <div id="register">
        <h2>Register</h2>

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="https://i.ibb.co/D1KqH89/image.png" style = {{height:"400px"}} />
        </div>
        <br />

        <p>
            This Register page will be your first step if you haven't ever used this website. Here, you'll have to create an account using your personal credentials like name, email and password.

            <br />
            If you have already created an account and creating a new one, so you'll have to use another email, as it'll not allow to create a new account with same email again.
            
            <br />
        </p>
        </div>


        <div id="login">
        <h2>Login</h2>

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="https://i.ibb.co/gRqnPs4/image.png" style = {{height:"400px"}} />
        </div>
        <br />

        <p>
            If you already have registered on this website, simply you have to login in this page with your credentials which were used for the registration.
        </p>
        </div>

        <div id="forgotPassword">
        <h2>What happens when user forgets Password?</h2>
        
        <br />

        <p>While you're attempting to log in, if you happen to forget your password, there's a convenient way to reset it. Just locate the "Forget Password" link on the login page:</p>

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="https://i.ibb.co/gRqnPs4/image.png" style = {{height:"300px"}} />
        </div>
        <br />

        <p>Once you click on that link, you'll need to provide your email address and then hit the "Send" button.</p>
        
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src = "https://i.ibb.co/fDW93Lp/58.jpg" style = {{height:"300px"}} />
        </div>
        <br />

        <p>
        By doing this, you'll receive an email containing a link that will allow you to reset your password. Clicking on this link will take you to a new page where you can set a new password for your account.
        </p>

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src = "https://i.ibb.co/M8bjH2Q/59.jpg" style = {{height:"200px"}} />
        </div>
        <br />

        

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src = "https://i.ibb.co/sQG0yyL/60.jpg" style = {{height:"300px"}} />
        </div>
        <br />
        <p>
            This process is designed to help you regain access to your account in case you forget your password.
        </p>

        </div>
        <a href = "#toTheTopOfPage"><Button style = {{marginLeft:"0px",position:"fixed"}}>Go to Top</Button></a>
    </div>
    </div>
  )
}

export default Authentication