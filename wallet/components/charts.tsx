import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {LineChart as SVGLineChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {
  Circle,
  G,
  Line,
  Rect,
  Text,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {
  SlideAreaChart,
  XAxisLabelAlignment,
} from '@connectedcars/react-native-slide-charts';

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

const HorizontalLine = ({y}: any) => {
  return (
    <Line
      key={'zero-axis'}
      x1={'0%'}
      x2={'100%'}
      y1={y(50)}
      y2={y(50)}
      stroke={'grey'}
      strokeDasharray={[4, 8]}
      strokeWidth={2}
    />
  );
};

export const BalanceLineChart2 = ({data}: any) => {
  return (
    <LineChart
      style={{height: 200}}
      data={data}
      //@ts-ignore
      svg={{
        stroke: 'rgb(134, 65, 244)',
        strokeWidth: 2,
      }}
      contentInset={{top: 20, bottom: 20}}
      curve={shape.curveLinear}>
      <Grid />
      <HorizontalLine />
      {/* <Tooltip /> */}
    </LineChart>
  );
};
const defaultAreaChartFillGradient = (props: any) => {
  return (
    <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" {...props}>
      <Stop stopColor="#eba500" offset="0%" stopOpacity="0.2" />
      <Stop stopColor="#f2d88c" offset="100%" stopOpacity="0.2" />
    </LinearGradient>
  );
};

export const BalanceLineChart3 = ({data, markerLabels}: any) => {
  return (
    <SlideAreaChart
      chartLineColor={'#ffc546'}
      renderFillGradient={defaultAreaChartFillGradient}
      scrollable
      style={{marginTop: 32, backgroundColor: 'transparent'}}
      shouldCancelWhenOutside={false}
      data={data}
      alwaysShowIndicator={false}
      axisWidth={0}
      axisHeight={10}
      paddingBottom={8}
      paddingLeft={0}
      paddingRight={0}
      yAxisProps={{
        fullBaseLine: true,
        interval: 10,
        verticalLineWidth: 0,
        horizontalLineWidth: 0,
        horizontalLineColor: 'transparent',
        numberOfTicks: 0,
      }}
      xScale="time"
      xAxisProps={{
        axisLabelStyle: {
          color: colors.black,
          paddingHorizontal: 12,
        },
        axisMarkerLabels: markerLabels,
        adjustForSpecialMarkers: true,
        specialEndMarker: 'Today  ',
        specialStartMarker: ' ',
      }}
      toolTipProps={{
        toolTipTextRenderers: [
          ({scaleY, y}) => ({
            text: scaleY.invert(y).toFixed(0).toString(),
          }),
        ],
        fontSize: 16,
        borderRadius: 4,
      }}
    />
  );
};
