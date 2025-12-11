"use server";

import { Widget } from "../../../../components/widget";
import { DefaultLayout } from "../../../../layouts/default";
import { Root } from "../../../../root";
import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import { getEnvironmentVariable } from '@kinde/infrastructure'

// export const publicUrl = 


const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  console.log(getEnvironmentVariable('APP_PUBLIC_URL').value)
  return (
    <Root context={context} request={request}>
      <DefaultLayout>
        <Widget
          heading={context.widget.content.heading}
          description={context.widget.content.description}
        />
      </DefaultLayout>
    </Root>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}

export const pageSettings = {
  bindings: {
    "kinde.env": {},
  },
};
