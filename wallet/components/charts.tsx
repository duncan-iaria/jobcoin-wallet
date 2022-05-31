import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import {colors} from './theme';

export const BalanceLineChart = ({data, labels}: {data: any; labels: any}) => {
  return (
    <LineChart
      data={{
        labels: [...labels],
        datasets: [
          {
            data: [...data],
          },
        ],
      }}
      // withHorizontalLabels={false}
      // withVerticalLabels={false}

      fromZero
      width={Dimensions.get('window').width} // from react-native
      height={220}
      // yAxisLabel="$"
      // yAxisSuffix="c"
      yAxisInterval={15} // optional, defaults to 1
      chartConfig={{
        backgroundColor: colors.background,
        backgroundGradientFrom: colors.background,
        backgroundGradientTo: colors.background,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1, index) => `rgba(255, 197, 70, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(45, 31, 16, ${opacity})`,
        style: {
          // borderRadius: 16,
        },
        propsForDots: {
          r: '4',
          strokeWidth: 1,
          stroke: colors.black,
        },
        propsForHorizontalLabels: {
          fontSize: 12,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        // borderRadius: 16,
      }}
    />
  );
};
