import { ICharacter } from '@/interfaces/character';

export function HeroCard({
  character,
  classname,
}: {
  character: ICharacter;
  classname: string;
}) {
  const thumbnailUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <div className={classname}>
      <img
        src={thumbnailUrl}
        alt={character.name}
        className='object-cover w-full h-full'
      />
      <p className='text-center'>{character.name}</p>
    </div>
  );
}
