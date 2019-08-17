
const contractData = require('../../assets/contracts.json');
const marketingData = require('../../assets/marketing.json');
const warrantiesData = require('../../assets/warranties.json');
import * as data from '../../assets/appData';
import { mixDataToLessonList } from '../../assets/Functions';

const initState = {
  lessons: mixDataToLessonList(
    [
      contractData,
      marketingData,
      warrantiesData
    ],
    data.lessons
  ),
};

export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};