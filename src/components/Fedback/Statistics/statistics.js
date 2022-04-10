import React from "react";
import ValueStatistic from "./valueStatistic";
import PropTypes from 'prop-types';


const Statistic = ({good,neutral,bad,total,positivePercentage}) =>
        <div>
            <ValueStatistic titleName="Good" valueStat={good} />
            <ValueStatistic titleName="Neutral" valueStat={neutral} />
            <ValueStatistic titleName="Bad" valueStat={bad} />
            <ValueStatistic titleName="Total" valueStat={total} />
            <ValueStatistic titleName="Positive feedback" valueStat={positivePercentage}/>    
        </div>
export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};