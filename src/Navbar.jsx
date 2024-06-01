const Navbar = ({isLoggedIn, signOutFun}) => {
    return <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0rem' }}>
        <div>
            <h2>Simple Auth</h2>
        </div>
        {
            isLoggedIn && <button onClick={signOutFun} style={{maxHeight:'3rem'}}>Logout</button>
        }
    </div>
}

export default Navbar;