import { ChangeEvent, useState } from 'react';
import { Inter } from 'next/font/google';

import { useMarvelCharacters } from '../hooks/useMarvelCharacters';
import { HeroCard } from '@/components/organisms/heroCard';
import { ICharacter } from '@/interfaces/character';
import SearchInput from '@/components/molecules/searchInput';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: characters, isLoading, error } = useMarvelCharacters();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro ao carregar os personagens.</div>;
  return (
    <main
      className={`flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12${inter.className}`}
    >
      <div className='flex mb-8'>
        <SearchInput value={searchValue} onChange={handleSearchInputChange} />
      </div>
      <div>
        <h1 className='text-3xl text-center mb-2'>Personagens da Marvel</h1>
      </div>
      <section className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {characters?.map((character: ICharacter) => (
          <HeroCard key={character.id} character={character} classname='mb-2' />
        ))}
      </section>
      <div className='mt-12'>paginação</div>
    </main>
  );
}
