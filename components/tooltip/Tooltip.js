import React from "react";
import clsx from "clsx";
import { Tooltip as TippyTooltip } from "@nextui-org/react";

import s from "../hero/Hero.module.scss";
export default function Tooltip({ content, children }) {
  return (
    <TippyTooltip
      content={content}
      portalClassName={s.tooltip}
      hideArrow={true}
    >
      <span style={{ borderBottom: "1px dotted gray" }}>{children}</span>
    </TippyTooltip>
  );
}
