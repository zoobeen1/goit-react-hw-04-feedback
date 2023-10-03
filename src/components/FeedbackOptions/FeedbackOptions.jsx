import PropTypes from 'prop-types';
import { Box } from 'components/common';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Box
      key={option}
      as="button"
      mr="5px"
      p={2}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </Box>
  ));
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
