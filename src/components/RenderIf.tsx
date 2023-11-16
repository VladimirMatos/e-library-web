import { memo } from "react";

const RenderIf = ({
  condition,
  children,
}: {
  condition: boolean;
  children: any;
}): JSX.Element => {
  if (condition) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return children;
  }

  return <></>;
};

export default memo(RenderIf);
