import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.statisticsItem}>
        Good: <span className={css.statisticsNumber}>{good}</span>
      </li>
      <li className={css.statisticsItem}>
        Neutral: <span className={css.statisticsNumber}>{neutral}</span>
      </li>
      <li className={css.statisticsItem}>
        Bad: <span className={css.statisticsNumber}>{bad}</span>
      </li>
      <li className={css.statisticsItem}>
        Total: <span className={css.statisticsNumber}>{total}</span>
      </li>
      <li className={css.statisticsItem}>
        Positive feedback:{' '}
        <span className={css.statisticsNumber}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
