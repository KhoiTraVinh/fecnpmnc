import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Giao dịch gần đây</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Khách hàng</th>
          <th className="widgetLgTh">Ngày giao dịch</th>
          <th className="widgetLgTh">Số tiền</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/474x/ea/f2/9d/eaf29d7da7ee6459bc76950547630114--johnny-depp-news-jack-oconnell.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Thức Phạm</span>
          </td>
          <td className="widgetLgDate">31-05-2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/474x/ea/f2/9d/eaf29d7da7ee6459bc76950547630114--johnny-depp-news-jack-oconnell.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Thức Phạm</span>
          </td>
          <td className="widgetLgDate">31-05-2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/474x/ea/f2/9d/eaf29d7da7ee6459bc76950547630114--johnny-depp-news-jack-oconnell.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Thức Phạm</span>
          </td>
          <td className="widgetLgDate">31-05-2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/474x/ea/f2/9d/eaf29d7da7ee6459bc76950547630114--johnny-depp-news-jack-oconnell.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Thức Phạm</span>
          </td>
          <td className="widgetLgDate">31-05-2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
