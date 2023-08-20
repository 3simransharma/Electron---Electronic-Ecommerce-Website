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
import ImagesAccordingToDevices from '../components/ImagesAccordingToDevices';

import productDetailPage from "../images/desktop/product_detail_page.jpg";
import cartPage from "../images/desktop/cart.png";
import wishlistPage from "../images/desktop/wishlist.png";
import productReview from "../images/desktop/product_review.jpg";


import { CartFill,StarFill } from 'react-bootstrap-icons';

const CartAndWishlist = () => {

    const [treeHeight, setTreeHeight] = useState('200px');

    useEffect(() => {
        const itemCount = 3; // Change this to the actual number of items in the TreeView
        const calculatedHeight = itemCount * 90 + 'px'; // Adjust the value as needed
        setTreeHeight(calculatedHeight);
    }, []);

    const internal_navigator =
        (
            <TreeView
                aria-label="CartAndWishlist"
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
                <TreeItem nodeId="1" label="Product Detail Page" sx={{ fontSize: "24px" }} defaultExpanded>

                    <TreeItem
                        nodeId="3"
                        label={<a href="#basic">Basic</a>}
                    />

                    <TreeItem
                        nodeId="4"
                        label={<a href="#cart">Cart</a>}
                    />
                    
                    <TreeItem
                        nodeId="5"
                        label={<a href="#wishlist">Wishlist</a>}
                    />

                    <TreeItem
                        nodeId="6"
                        label={<a href="#review">Review</a>}
                    />

                </TreeItem>
            </TreeView>
        );

    return (
        <div className='pageAlign'>
            <div className='toTheTopOfPage'></div>
            <h1>When you click on any Product:</h1>
            <div>

                {internal_navigator}

                <div id="basic">

                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {/* <Image src="https://i.ibb.co/D1KqH89/image.png" style = {{height:"400px"}} /> */}
                        <ImagesAccordingToDevices mobileImage={productDetailPage} desktopImage={productDetailPage} desktop_height='600px' />
                    </div>
                    <br />

                    <p>
                        When you click on any product cart on this website, it will direct you to the Product Detail Page. The Product Detail Page contains detailed information about the product, such as the name of the product, the brand of the product, its features, price, and available stock quantity. Additionally, you can also view reviews written by people who have already purchased that particular product.
                    </p>
                    <br />
                </div>


                <div id="cart">
                    <h2>Cart</h2>

                    <p>
                        When you find a product you like and want to buy, simply click on the <b>Add To Cart</b> button; this button will add the item to your cart. You can view the number of products in your cart by looking at the (<CartFill />) icon on the Navbar. To see which items have been added to the Cart, click on the Cart button.
                    </p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {/* <Image src="https://i.ibb.co/gRqnPs4/image.png" style = {{height:"400px"}} /> */}
                        <ImagesAccordingToDevices mobileImage={cartPage} desktopImage={cartPage} />
                    </div>
                    <br />
                    <p>
                        As you can observe, this is a cart page, encompassing a list of products that you have added either by clicking the <b>Add To Cart</b> button or the <CartFill /> button on the Home Page. On this page, you have the option to remove items from the cart, modify the quantity of items before making a purchase, and proceed to payment once you have finalized your choices.

                        <br /><br />
                        If you currently do not wish to purchase a specific product and intend to buy it at a later time, you can easily do so by clicking on the <b>Move to Wishlist</b> button (indicated by the <span style={{color:"#DC3545"}}>red</span>).
                    </p>
                    <br />
                </div>

                <div id="wishlist">
                    <h2>Wishlist</h2>

                    <p>
                    If you find a specific product you're interested in but don't intend to purchase immediately, you have the option to add it to your Wishlist. The Wishlist feature assists you in maintaining a list of products you've taken a liking to or intend to purchase at a later time. <br/> 
                    </p>
                    <p>
                    To view the count of products in your wishlist, simply click the hamburger menu, and you'll notice a <StarFill /> icon positioned and above that icon, number of products in the wishlist is displayed on <span style={{backgroundColor:"#DC3545",padding:"0 5px",borderRadius:"5px",color:"white"}}>red rectangle</span> . To review the items you've saved, click on the <b>Wishlist</b> option within the Hamburger menu.
                    </p>
                    
                    <br />

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {/* <Image src="https://i.ibb.co/gRqnPs4/image.png" style = {{height:"400px"}} /> */}
                        <ImagesAccordingToDevices mobileImage={wishlistPage} desktopImage={wishlistPage} />
                    </div>
                    <br />
                    <p>
                    This is the Wishlist page, showcasing a compilation of products that you have chosen either by clicking the <b>Add To Wishlist</b> button or the <StarFill /> button on the Home Page. Within this page, you have the ability to manage these items, such as removing them from the wishlist or adjusting the desired quantity.
                    </p>

                    <p>
                    In case you're ready to proceed with purchasing a product from your Wishlist, you can easily move it back to your cart by clicking the <b>Move to Cart</b> button.
                    </p>

                    <p>
                    If you decide not to purchase a specific product at the moment and plan to consider it for a future purchase, you can achieve this by clicking on the <b>Remove from Wishlist</b> button (denoted by the <span style={{color:"#DC3545"}}>red</span>).
                    </p>
                    <br />
                </div>

                <div id="review">
                    <h2>How to give a Review?</h2>

                    <p>Once you've purchased the specific product, you can proceed to the product detail page. Within this page, navigate to the <b>Rating & Reviews</b> section. Within this section, you'll find a button labeled <Button size="sm">Submit Review</Button>. Upon clicking this button, a popup overlay will appear.</p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <ImagesAccordingToDevices mobileImage={productReview} desktopImage={productReview} />
                    </div>

                    <p>Within this popup, you have the opportunity to provide ratings and share your comments regarding the product. When submitting a review, it is <b>required to assign a star rating to the product on a scale of 1 to 5</b>. Providing a comment is optional but encouraged.</p>
                    <p>If you wish to <b>edit your review</b> after submitting it, you can simply click on the same <Button size="sm">Submit Review</Button> button and proceed to modify your review.</p>

                    <br />
                </div>

            </div>
        </div>
    )
}

export default CartAndWishlist