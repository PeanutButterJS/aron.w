import ReactGA from "react-ga4";

/* type RegexPattern<Pattern extends string> = `${string & {
  __brand: "([A-Z]+)_([A-Z]+)";
}}`; */
/* type Letter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y";

type Hey = Uppercase<string> | `${Uppercase<string>}_${Uppercase<string>}`; */

export interface SendEvent {
  eventName: string; //`${string & { __brand: "[A-Z]+(_[A-Z]+)*" }}`
  [key: string]: any;
}

export const useGa = () => {
  const initialize = (trackingId: string) => {
    ReactGA.initialize(trackingId);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
  };

  const sendEvent = (event: SendEvent) => {
    const { eventName, ...rest } = event;
    ReactGA.event(eventName, {
      whatTimeIsIt: Date.now(),
      ...rest,
    });
  };
  return { sendEvent, initialize };
};
