"use client";

import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

type RecaptchaProviderProps = {
  children: ReactNode;
};

export const RecaptchaProvider = ({ children }: RecaptchaProviderProps) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={sitekey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};
