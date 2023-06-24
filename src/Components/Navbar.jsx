
const Navbar = () => {
  return (
    <nav>
          <div className='logo'>
            <img src='../src/assets/brand_logo.png' alt='png' />  {/* logo is added into the navbar component */}
            </div>
            <ul>
              <li href='/'>Home</li>
              <li href='/'>Location</li>
              <li href='/'>Menu</li>
              <li href='/'>Contact</li>
            </ul>
            <button> 
         Login
            </button>
         
        </nav>
  )
}

export default Navbar