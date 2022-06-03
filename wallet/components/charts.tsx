import React from 'react';
import {LinearGradient, Stop} from 'react-native-svg';
import {SlideAreaChart} from '@connectedcars/react-native-slide-charts';

import {colors} from './theme';

const defaultAreaChartFillGradient = (props: any) => {
  return (
    <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" {...props}>
      <Stop stopColor="#eba500" offset="0%" stopOpacity="0.2" />
      <Stop stopColor="#f2d88c" offset="100%" stopOpacity="0.2" />
    </LinearGradient>
  );
};

export const BalanceLineChart = ({data, markerLabels}: any) => {
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
