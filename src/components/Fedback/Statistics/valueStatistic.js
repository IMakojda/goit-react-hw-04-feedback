import React from "react";
import PropTypes from 'prop-types';

const ValueStatistic = ({ titleName, valueStat }) =>
    <p className="title">
        {titleName}:{valueStat}
    </p>;

export default ValueStatistic;

ValueStatistic.propTypes = {
    titleName: PropTypes.string.isRequired,
    valueStat: PropTypes.number.isRequired,
};