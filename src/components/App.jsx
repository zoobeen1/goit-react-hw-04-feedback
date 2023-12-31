import { useState } from 'react';
import { Statistics } from './Statistics';
import { Container, Section } from './common';
import { FeedbackOptions } from './FeedbackOptions';
import { NotificationMessage } from './NotificationMessage';

export const App = () => {
  const [isGood, setIsGood] = useState(0);
  const [isNeutral, setIsNeutral] = useState(0);
  const [isBad, setIsBad] = useState(0);

  const countTotalFeedback = () => {
    return isGood + isNeutral + isBad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((isGood / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = option => {
    if (option === 'isGood') setIsGood(prevValue => prevValue + 1);
    if (option === 'isNeutral') setIsNeutral(prevValue => prevValue + 1);
    if (option === 'isBad') setIsBad(prevValue => prevValue + 1);
  };

  const stateKeys = ['isGood', 'isNeutral', 'isBad'];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={stateKeys}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={isGood}
            neutral={isNeutral}
            bad={isBad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
};
