export const Icon = ({ name }: { name: string }) => {
  return <img src={`/icons/${name}.svg`} alt={`${name} icon`} />;
};
