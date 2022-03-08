import {BrowserRouter, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="hero">
        <nav>
          <h2 class="logo">ComBo<span> UuDai</span></h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <a href="#" class="btn">Dat Ngay</a>
        </nav>
        <div class="content">
          <h4>ComBo</h4>
          <h1>Uu <span>Dai</span></h1>
          <h3>ComBo Uu Dai</h3>
          <div class="newslatter">
            <form>
              <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
              <input type="submit" name="submit" value="Lets Start"/>
            </form>
          </div>
        </div>
      </div>
      <section class="about">
        <div class="main">
          <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/274516969_3382908428589758_4161712813435574839_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mTHi65E0dVoAX9homCd&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-1EgPZovKxC8WXaAQVW1bAF6tlhUTjVDawkLS-tUsqBg&oe=622BA37B"/>
          <div class="about-text">
            <h2>Tour</h2>
            <h5>Thien <span> Khoi</span></h5>
            <p>Dep Trai</p>
            <button type="button">Du Lich Thoi</button>
          </div>
        </div>
      </section>
      <div class="contact-me">
        <p>Du Lich Thoi</p>
        <a class="button-two" href="#">Dat Ngay</a>
      </div>
      <footer>
        <p>Thien Khoi</p>
        <p>Contact:</p>
        <div class="social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-dribbble"></i></a>
        </div>
        <p class="end">CopyRight By Khoi</p>
      </footer>
          
    </BrowserRouter>
  );
}

export default App;
