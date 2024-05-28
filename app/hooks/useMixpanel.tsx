import mixpanel from "mixpanel-browser";

export interface MixpanelUser {
  id: string;
  name?: string;
}

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

  const initialize = (token: string, user?: MixpanelUser) => {
    mixpanel.init(token, {
      debug: true,
      track_pageview: true,
      persistence: "localStorage",
    });
    if (user) {
      mixpanel.identify(user?.id);
      mixpanel.people.set({ $name: user?.name });
    }
  };

  return { trackEvent, initialize };
};
