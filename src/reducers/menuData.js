import { default as type } from '../constants/ActionTypes';
import ageRanges from '../constants/common/ageRanges';
import genders from '../constants/common/genders';
import statuses from '../constants/common/statuses';

const initialState = {
  ageRanges,
  genders,
  statuses,
};

const menuData = (state = initialState, action) => {
  switch (action.type){
    default:
      return state;
  }
};

export default menuData;
