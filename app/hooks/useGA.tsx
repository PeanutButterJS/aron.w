import ReactGA from "react-ga4";

export const useGa = () => {
  const sendEvent = (eventName: string, eventObj: {}) => {};
  return { sendEvent };
};
