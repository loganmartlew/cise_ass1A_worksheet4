import { useState, useEffect } from 'react';
import Styles from '../components/TableStyle';
import Table from '../components/EvidenceTable';
import tablecolumns from '../components/tableColumns';
import Dropdown from '../components/Dropdown';
import practices from '../dummydata/SEPractices';

const SEPractice = () => {
  const [baseArticles, setBaseArticles] = useState([]);
  const [articles, setArticles] = useState(baseArticles);
  const [value, setValue] = useState(-1);

  useEffect(() => {
    fetch('http://localhost:5000/articles')
      .then(res => res.json())
      .then(data => setBaseArticles(data));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (value == -1) {
      console.log('default');
      setArticles(baseArticles);
      return;
    }

    // eslint-disable-next-line eqeqeq
    const practice = practices.find(practice => practice.value == value);
    console.log(practice);

    const newArticles = baseArticles.filter(article =>
      article.title.match(practice.regexp)
    );

    setArticles(newArticles);
  }, [value, baseArticles]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown
        options={practices}
        value={value}
        onChange={handleChange}
        defaultText='Select an SE Practice'
      />
      <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles>
    </div>
  );
};

export default SEPractice;
