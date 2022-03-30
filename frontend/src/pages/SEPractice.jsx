import { useState, useEffect } from 'react';
import SEArticles from '../dummydata/articles';
import Styles from '../components/TableStyle';
import Table from '../components/EvidenceTable';
import tablecolumns from '../components/tableColumns';
import Dropdown from '../components/Dropdown';
import practices from '../dummydata/SEPractices';

const SEPractice = () => {
  const [articles, setArticles] = useState(SEArticles);
  const [value, setValue] = useState(-1);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (value == -1) {
      console.log('default');
      setArticles(SEArticles);
      return;
    }

    // eslint-disable-next-line eqeqeq
    const practice = practices.find(practice => practice.value == value);
    console.log(practice);

    const newArticles = SEArticles.filter(article =>
      article.title.match(practice.regexp)
    );

    setArticles(newArticles);
  }, [value]);

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
