import articles from '../dummydata/articles';
import Styles from '../components/TableStyle';
import Table from '../components/EvidenceTable';
import tablecolumns from '../components/tableColumns';

const SEPractice = () => {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Styles>
        <Table data={articles} columns={tablecolumns} />
      </Styles>
    </div>
  );
};

export default SEPractice;
