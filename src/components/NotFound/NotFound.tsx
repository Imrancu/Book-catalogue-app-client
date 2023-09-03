import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div>
      <img
        src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1697673600&v=beta&t=ysuifpFxKxh8N-1O85Om_P_JvcJhG6AXTIlR-xlcYLY"
        alt=""
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default NotFound;
