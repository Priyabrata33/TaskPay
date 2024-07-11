import Box from '@mui/material/Box';  // Assuming you're using Material-UI Box
import Button from '@mui/material/Button';
import './Home.css'

function Home() {
  return (
    <>
      <Box className = "homeStyle">
        <div className='homeContent'>
              <h1>
              <span>BUILDING THE </span>
              <span style={{ backgroundColor:'#f19433', borderRadius:'5px',color:'white'}}> NEW</span> 
              <span> OPERATING SYSTEM FOR THE FUTURE OF MONEY MANAGEMENT IN INDIA</span>
              </h1>
        </div>
        <div className="container">
          <div className="columnLeft">
              <h3 className = "heading">
                WELCOME TO TASK PAY
                <span className="headingLine"></span> {/* Apply the gradient line here */}
              </h3>
            <p>TaskPay Automates Escrow Transactions &amp; Transforms The User Experience Whilst Managing Monies Through To Settlement</p>
            <div style={{marginTop:'40px'}}>
            <Button sx={{
                backgroundColor: '#f19433',
                color: 'white',
                borderRadius: '40px',
                fontFamily: 'Montserrat, sans-serif',
                '&:hover': { color: '#FFA500', backgroundColor: 'transparent' },
                padding:'14px 24px 14px 24px',
                fontSize: '1rem',
              }}>Talk to Our Export   &gt;&gt;</Button>
            </div>
          </div>
          <div className="imageColumn">
            <h1>Images are here</h1>
            {/* Add your images or other content here */}
          </div>
        </div>
        
      </Box>
      <Box className="secondView">
          <div className='vector'>
              <div className='vectorImage'>
                <h1>Vector images</h1>
              </div>
              <div className='vectorContents'>
                <div className='heading'>
                  <h2>BUILD TO <span style={{color: 'orange'}}>SECURE</span> &amp; <span style={{color:"orange"}}>PROTECT</span></h2>
                  <span className="headingLine"></span>
                </div>
                <p >Helping <span>65 millions SMEs to secure transactions from fraud and timely payments </span></p>
                <p>Our <span>technology</span> enables buyers and sellers to <span>transact anywhere, anyime</span> via <span>any device</span>, in a safe and secure way. <span>Smater, faster, safer</span> always</p>
              </div>
          </div>
      </Box>
      
    </>
  );
}

export default Home;
