import './App.css';

function App() {
  // http://54.88.130.203:3000/Login
  // http://207.180.199.240/
  // http://54.88.130.203/#!/
  return (
    <div className="container">
      <div className='wrapper'>
        <div className='header__top'>
          <div className='the_100_exch'>
            <img src='/img/logo.jpg' alt='' />
          </div>
          <div className='whatsapp'>
              <div className='parent'>
                <a href="https://api.whatsapp.com/send/?phone=441892710894&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
              <p>Whats App</p>
            </div>
        </div>
        <div className='lucky__theme'>
            <p>Develop your own Exchange</p>
        </div>
        
        <div className='grid'>
          <div className='child'>
          <a href='#' target='_blank'>
            <img src='https://s3.ap-south-1.amazonaws.com/winstarexch.net/img/skyimg.webp' alt='' />
            </a>
          </div>
          <div className='child'>
            <a href='#' target='_blank'>
              <img src='https://s3.ap-south-1.amazonaws.com/winstarexch.net/img/diamondimg.webp' alt='' />
            </a>
          </div>
          <div className='child'>
              <a href='#' target='_blank'>
            <img src='https://s3.ap-south-1.amazonaws.com/winstarexch.net/img/lotusimg.webp' alt='' />
            </a>
          </div>
          <div className='child'>
              <a href='#' target='_blank'>
            <img src='https://s3.ap-south-1.amazonaws.com/winstarexch.net/img/worldimg.webp' alt='' />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
