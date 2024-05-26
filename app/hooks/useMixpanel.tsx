import mixpanel from "mixpanel-browser";

export interface SendMixpanelEvent {
  eventName: string; //`${string & { __brand: "[A-Z]+(_[A-Z]+)*" }}`
  [key: string]: any;
}

export const useMixpanel = () => {
  const trackEvent = (event: SendMixpanelEvent) => {
    const { eventName, ...rest } = event;
    mixpanel.track(eventName, {
      whatTimeIsIt: Date.now(),
      ...rest,
    });
  };
  return { trackEvent };
};
