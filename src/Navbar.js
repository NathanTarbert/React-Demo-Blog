//this is the navbar template. press sfc +tab and render the function
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a> 
                <a href="/create">New Blog</a>  
            </div>
        </nav> 
      );
}
 
export default Navbar;

/* this is how you inject dynamic values to your styling.
 <a href="/create" style={{ 
    // this is how we do inline styling for our blog
    color: "white",
    backgroundColor: "#f1356d",
    borderRadius: "8px"
}}>New Blog</a>   */