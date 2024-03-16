export interface ChipProps {
  text: string;
  color: string;
  fondo: string;
  img?: string;
  imgAlt?: string;
}

export const Chip = ({ color, fondo, text, img = '', imgAlt = '' }: ChipProps) => {


  return (
    <div style={{backgroundColor:fondo, border:`1px solid ${color}`}} className={`flex flex-row items-center justify-between rounded-xl px-3 py-1`}>
      {img && <img className='h-5 w-5' src={img} alt={imgAlt}></img>}
      <p style={{color:color}} className="ml-2 text-sm">{text}</p>
    </div>
  );
};
