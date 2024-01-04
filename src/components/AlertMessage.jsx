// npm install @mui/material @emotion/react @emotion/styled
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import PropTypes from "prop-types";

function AlertMessage({ type, title, exp }) {
  return (
    <Alert severity={type} className="my-4">
      <AlertTitle>
        <strong>{title}</strong>
      </AlertTitle>
      {exp}
    </Alert>
  );
}

export default AlertMessage;

AlertMessage.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
};
