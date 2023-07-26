import { ICharacter } from '@/interfaces/character';

export function fixNotAvailableThumbnails(characters: ICharacter[]) {
  const treatedCharacters = characters.map((character) => {
    if (character.thumbnail.path.includes('image_not_available')) {
      return {
        ...character,
        thumbnail: {
          path: '/404',
          extension: 'jpg',
        },
      };
    }
    return character;
  });

  return treatedCharacters;
}
