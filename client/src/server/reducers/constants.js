import { TOPIC_CLASSIFICATIONS } from '../../assets/constants';

export const initExPanelState = () => {
  if (!Array.isArray(TOPIC_CLASSIFICATIONS.ALL)) return {};
  const exPanel = {};
  TOPIC_CLASSIFICATIONS.ALL.forEach((classification) => {
    exPanel[`${classification.value}`] = true;
  });
  return exPanel;
}
