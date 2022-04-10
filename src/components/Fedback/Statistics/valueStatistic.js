import React from "react";

const ValueStatistic = ({titleName, valueStat}) =>
    <p className="title">
        {titleName}:{valueStat}
    </p>;

export default ValueStatistic;