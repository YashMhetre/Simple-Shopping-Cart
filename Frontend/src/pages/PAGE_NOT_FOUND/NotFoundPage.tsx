import React from "react";
import { useNavigate } from "react-router-dom";
import { styles } from './styles';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.square}>
        <h1 style={styles.title}>Oops !</h1>
        <h2 style={styles.subtitle}>ERROR 404 : Page Not Found</h2>
        <p style={styles.description}>
          The page you are looking for might have been removed, changed, or is temporarily unavailable.
        </p>
        <button 
          style={styles.button}
          onClick={goToHomepage}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};



export default NotFoundPage;
