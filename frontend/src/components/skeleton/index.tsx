import ContentLoader from "react-content-loader";

interface SkeletonProps {
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
}

export function Skeleton(props: SkeletonProps) {
  const { height = 100, width = "100%", borderRadius = 8 } = props;
  return (
    <ContentLoader
      speed={1}
      width={width}
      height={height}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect
        x="0"
        y="0"
        rx={borderRadius}
        ry={borderRadius}
        width={width}
        height={height}
      />
    </ContentLoader>
  );
}
