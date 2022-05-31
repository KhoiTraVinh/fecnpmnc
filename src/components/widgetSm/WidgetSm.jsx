import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Thức Phạm trong đây nè</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/474x/ea/f2/9d/eaf29d7da7ee6459bc76950547630114--johnny-depp-news-jack-oconnell.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Thức Phạm</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <a href="https://www.facebook.com/thuc.pham.56679">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}
