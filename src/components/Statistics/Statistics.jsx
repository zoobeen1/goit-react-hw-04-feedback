import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>
        <b>Good:</b> {good}
      </p>
      <p>
        <b>Neutral:</b> {neutral}
      </p>
      <p>
        <b>Bad:</b> {bad}
      </p>
      <p>
        <b>Total:</b> {total}
      </p>
      <p>
        <b>Positive feedback:</b> {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
