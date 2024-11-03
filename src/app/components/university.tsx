"use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUniversities } from '@/store/universitySlice';
import { RootState } from '@/store/store';

const UniversityList = () => {
  const dispatch = useDispatch();
  const universities = useSelector((state: RootState) => state.universities.universities);
  const status = useSelector((state: RootState) => state.universities.status);
  const error = useSelector((state: RootState) => state.universities.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUniversities());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      {universities.map((uni, index) => (
        <div key={index}>
          <h2>{uni.name.en}</h2>
          <p>{uni.description.en}</p>
          <img src={uni.country.flag} alt={`Flag of ${uni.country.en}`} />
        </div>
      ))}
    </div>
  );
};

export default UniversityList;
