import statuses from './common/statuses';
import ageRanges from './common/ageRanges';
import genders from './common/genders';
import statusIcons from './svgData/statusIcons';
import ageRangeIcons from './svgData/ageRangeIcons';
import genderIcons from './svgData/genderIcons';

const degToRad = Math.PI / 180;
const genderMultiplier = 0.9;
const ageRangeMultiplier = 0.8;

const masterTitleRadius = 520;
const masterElementRadius = 455;
const masterPercentagesRadius = 325;
const masterIconRadius = (masterElementRadius + masterPercentagesRadius) * 0.5;
const masterSankeyEndRadius = masterPercentagesRadius - 25;

const masterPercentageFontSize = 25;
const masterElementFontSize = 20;
const masterTitleFontSize = 40;

const config = {
  graphOrigin: [500, 418],
  graphSectors: {
    statuses: {
      startAngle: 140 * degToRad,
      endAngle: 40 * degToRad,
      title: {
        radius: masterTitleRadius,
        text: 'How Do We All Feel?',
      },
      elements: {
        radius: masterElementRadius,
        text: statuses,
        count: statuses.length,
      },
      percentages: {
        radius: masterPercentagesRadius,
        count: statuses.length,
      },
      icons: {
        radius: masterIconRadius,
        data: statusIcons,
        scale: 1,
        bottomTowardsCenter: false,
      },
      sankey: {
        width: 100,
        startRadius: 110,
        invertSplitOrder: true,
        tipHeight: 7.5,
        endRadius: masterSankeyEndRadius,
      },
      colors: {
        sankey: '#F1EE1F',
        title: '#F1EE1F',
        elements: '#F1EE1F',
        percentages: '#F1EE1F',
        icons: '#333333',
        iconBackgrounds: '#F1EE1F',
      },
      fontSizes: {
        title: masterTitleFontSize,
        elements: masterElementFontSize,
        percentages: masterPercentageFontSize,
      },
      fontFamilies: {
        title: 'Oswald',
        elements: 'Oswald',
        percentages: 'Open Sans',
      },
    },
    ageRanges: {
      startAngle: 287.5 * degToRad,
      endAngle: 372.5 * degToRad,
      title: {
        radius: masterTitleRadius * ageRangeMultiplier,
        text: 'How Old is Everyone?',
      },
      elements: {
        radius: masterElementRadius * ageRangeMultiplier,
        text: ageRanges,
        count: ageRanges.length,
      },
      percentages: {
        radius: masterPercentagesRadius * ageRangeMultiplier,
        count: ageRanges.length,
      },
      icons: {
        radius: masterIconRadius * ageRangeMultiplier,
        data: ageRangeIcons,
        scale: ageRangeMultiplier,
        bottomTowardsCenter: true,
      },
      sankey: {
        width: 100 * ageRangeMultiplier,
        startRadius: 105,
        invertSplitOrder: false,
        tipHeight: 7.5,
        endRadius: masterSankeyEndRadius * ageRangeMultiplier,
      },
      colors: {
        sankey: '#CC7C2D',
        title: '#CC7C2D',
        elements: '#CC7C2D',
        percentages: '#CC7C2D',
        icons: '#CC7C2D',
      },
      fontSizes: {
        title: masterTitleFontSize * ageRangeMultiplier,
        elements: masterElementFontSize * ageRangeMultiplier,
        percentages: masterPercentageFontSize * ageRangeMultiplier,
      },
      fontFamilies: {
        title: 'Oswald',
        elements: 'Oswald',
        percentages: 'Open Sans',
      },
    },
    genders: {
      startAngle: 184.5 * degToRad,
      endAngle: 235.5 * degToRad,
      title: {
        radius: masterTitleRadius * genderMultiplier,
        text: 'What About Gender?',
      },
      elements: {
        radius: masterElementRadius * genderMultiplier,
        text: genders,
        count: genders.length,
      },
      percentages: {
        radius: masterPercentagesRadius * genderMultiplier,
        count: genders.length,
      },
      icons: {
        radius: masterIconRadius * genderMultiplier,
        data: genderIcons,
        scale: genderMultiplier,
        bottomTowardsCenter: true,
      },
      sankey: {
        width: 100 * genderMultiplier,
        startRadius: 105,
        invertSplitOrder: false,
        tipHeight: 7.5,
        endRadius: masterSankeyEndRadius * genderMultiplier,
      },
      colors: {
        sankey: '#3E993D',
        title: '#3E993D',
        elements: '#3E993D',
        percentages: '#3E993D',
        icons: '#3E993D',
      },
      fontSizes: {
        title: masterTitleFontSize * genderMultiplier,
        elements: masterElementFontSize * genderMultiplier,
        percentages: masterPercentageFontSize * genderMultiplier,
      },
      fontFamilies: {
        title: 'Oswald',
        elements: 'Oswald',
        percentages: 'Open Sans',
      },
    },
  },
  startBadge: {
    origin: [500, 418],
    radius: 95,
    counterLine: 0,
    textLines: [
      null,
      'count',
      'users have shared',
      'how they are',
      'feeling',
      null,
    ],
    textLineWeights: [
      1,
      3,
      1,
      1,
      1,
      1.5,
    ],
    colors: {
      text: '#eeeeee',
      counter: '#F1EE1F',
      background: '#333333',
    },
    fontFamilies: {
      text: 'Open Sans',
      counter: 'Oswald',
    },
    fontSizes: {
      text: 18,
      counter: 50,
    },
  },
};

export default config;
