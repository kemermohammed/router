// app/component/JokeList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJokes } from '../redux/slice/joke';

const JokeList = () => {
  const dispatch = useDispatch();
  const { jokes, loading, error } = useSelector((state) => state.jokes);

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl mb-4 font-semibold">Jokes</h2>
      <ul className="space-y-4">
        {jokes.map((joke, index) => (
          <li key={index} className="border p-4 rounded-lg shadow bg-white hover:bg-gray-50">
            <div className="text-lg text-blue-600 mb-2">
              <span className="font-semibold">{joke.category}:</span>
            </div>
            <div className="text-gray-800">
              {joke.setup ? (
                <>
                  <div className="font-medium">{joke.setup}</div>
                  <div className="mt-2">{joke.delivery}</div>
                </>
              ) : (
                <div>{joke.joke}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JokeList;
