import Box from '@mui/material/Box';  // Assuming you're using Material-UI Box
import { Button } from '@mui/base/Button';
import './Home.css'

function Home() {
  return (
    <>
      <Box className = "homeStyle">
        <div className='homeContent'>
              <h1 style={{margin:'64px 0 0 0',padding:'0px',width:'fit-content' }}>BUILDING THE</h1>
              <h1 style={{margin:'10px',padding:'3px', backgroundColor:'#f19433',width:'fit-content',borderRadius:'5px',color:'white'}}>NEW</h1> 
              <h1 style={{margin:'0px',padding:'0px',width:'fit-content' }}>OPERATING SYSTEM FOR THE FUTURE OF MONEY MANAGEMENT IN INDIA</h1>
        </div>
        <div className="container">
          <div className="columnLeft">
              <h3 className = "heading">
                WELCOME TO TASK PAY
                <span className="headingLine"></span> {/* Apply the gradient line here */}
              </h3>
            <p style={{color:'#666'}}>TaskPay Automates Escrow Transactions &amp; <br/> Transforms The User Experience Whilst Managing <br/> Monies Through To Settlement</p>
            <div style={{marginTop:'40px'}}>
            
            <Button
              style={{
                backgroundColor: '#f19433',
                color: 'white',
                borderRadius: '20px',
                padding: '15px',
                fontSize: '1.2rem',
              }}
            >
              Talk to Our Export &gt;&gt;
            </Button>
            </div>
          </div>
          <div className="column">
            <h1>Images are here</h1>
            {/* Add your images or other content here */}
          </div>
        </div>
      </Box>
    </>
  );
}

export default Home;
