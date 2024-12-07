type Props = {
  variant: "red" | "blue" | "green";
};

export const Circle = ({ variant }: Props) => {
  let bgColor;
  // variantで受け取る値によって、色を変更する
  switch (variant) {
    case "red":
      bgColor = "bg-red-500";
      break;
    case "blue":
      bgColor = "bg-blue-500";
      break;
    case "green":
      bgColor = "bg-green-500";
      break;
  }
  return <div className={`${bgColor} w-14 h-14 p-2 rounded-full`}></div>;
};
