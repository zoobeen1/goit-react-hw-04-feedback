import { Component } from 'react';
import { Statistics } from './Statistics';
import { Container, Section } from './common';
import { FeedbackOptions } from './FeedbackOptions';
import { NotificationMessage } from './NotificationMessage';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.Good + this.state.Neutral + this.state.Bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.Good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = option => {
    this.setState(prevValue => ({
      [option]: prevValue[option] + 1,
    }));
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const stateKeys = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
