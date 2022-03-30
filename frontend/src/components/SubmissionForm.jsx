import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    const { title, authors, source, pubyear, doi } = data;
    const claim = '';
    const evidence = '';

    const newArticle = {
      title,
      authors,
      source,
      pubyear,
      doi,
      claim,
      evidence,
    };

    fetch('http://localhost:5000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    }).then(() => {
      navigate('/SEPractice');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder='Title' />
      <p>
        <input {...register('authors')} placeholder='Authors' />
      </p>
      <p>
        <input {...register('source')} placeholder='Source' />
      </p>
      <p>
        <input {...register('pubyear')} placeholder='Publication Year' />
      </p>
      <p>
        <input {...register('doi')} placeholder='DOI' />
      </p>

      <select {...register('sepractice')}>
        <option value=''>Select SE practice...</option>
        <option value='TDD'>TDD</option>
        <option value='Mob Programming'>Mob Programmin</option>
      </select>
      {/* <p>{result}</p> */}
      <input type='submit' />
    </form>
  );
};

export default SubmissionForm;
