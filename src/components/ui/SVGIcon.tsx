export interface SVGIconProps {
    svg:string,
    fill:string
}

export const SVGIcon = ({ svg, fill = '#EEE' }:SVGIconProps) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: svg.replace(/#EEE/g, fill) }} />
  );
};

