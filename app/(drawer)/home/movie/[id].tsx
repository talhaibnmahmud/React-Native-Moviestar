import { useLocalSearchParams } from 'expo-router';
import { MovieDetails } from '~/components/Details';

const Movie = () => {
    const { id } = useLocalSearchParams<{ id: string }>();

    return <MovieDetails id={id} />
}

export default Movie