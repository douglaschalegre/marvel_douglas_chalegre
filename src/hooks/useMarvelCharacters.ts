import { useQuery } from 'react-query';
import axios from 'axios';
import md5 from 'md5';
import { ICharacter } from '@/interfaces/character';
import { fixNotAvailableThumbnails } from '@/services/charactersTreatment';

const publicKey = '546a0e6483584fc64fecd635d47f16d8';
const privateKey = 'a92538931b5aa2fa098c4f3d84562474f98d525a';
const baseURL = 'https://gateway.marvel.com/v1/public/characters';

export const useMarvelCharacters = () => {
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + privateKey + publicKey);

  const fetchCharacters = async () => {
    const response = await axios.get(baseURL, {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
      },
    });

    const treatedResults: ICharacter[] = fixNotAvailableThumbnails(
      response.data.data.results
    );
    return treatedResults;
  };

  return useQuery('characters', fetchCharacters);
};
