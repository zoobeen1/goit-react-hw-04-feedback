import { Box } from 'components/common';
import PropTypes from 'prop-types';
export const NotificationMessage = ({ message }) => {
  return (
    <Box mt={2}>
      <p>{message}</p>
    </Box>
  );
};
NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
