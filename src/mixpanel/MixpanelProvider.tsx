"use client";

import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const projectToken = process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN;

export const MixpanelProvider = ({ children }: Props) => {
  useEffect(() => {
    mixpanel.init(projectToken!, {
      track_pageview: true,
      persistence: "localStorage",
    });
  }, []);

  return <>{children}</>;
};
