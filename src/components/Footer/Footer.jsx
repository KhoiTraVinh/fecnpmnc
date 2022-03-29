import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <p>This is a footer</p>
        <p>Contact:</p>
        <div className="social">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
        <p className="end">CopyRight</p>
      </footer>
    </div>
  );
};

export default Footer;
