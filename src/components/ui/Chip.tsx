export interface ChipProps {
  text: string;
  color: string;
  fondo: string;
  img?: string;
  imgAlt?: string;
  hideLabel?: boolean;
}

export const Chip = ({ color, fondo, text, img = '', imgAlt = '', hideLabel = false }: ChipProps) => {
  return (
    <div style={{ backgroundColor: fondo, border: `1px solid ${color}`}} className="flex min-w-fit items-center whitespace-nowrap rounded-xl px-3 py-1">
      {img && <img className="mr-2 h-5 w-5 flex-shrink-0" src={img} alt={imgAlt} />}
      {!hideLabel && <p style={{ color: color }} className="text-sm">{text}</p>}
    </div>
  );
};
