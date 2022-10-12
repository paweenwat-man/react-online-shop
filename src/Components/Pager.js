import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Pager = (props) => {
  const { total, active } = props;
  const message = props.message || `${total} หน้า`;
  const [searchParams, setSearchParams] = useSearchParams();

  const items = [];
  for (let number = 1; number <= total; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setSearchParams({ page: number });
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <h6 className="text-center mb-3">{message}</h6>
      <Pagination>
        <Pagination.First
          disabled={active <= 1}
          onClick={() => {
            setSearchParams({ page: active - 1 });
          }}
        />
        {items}
        <Pagination.Last
          disabled={active >= total}
          onClick={() => {
            setSearchParams({ page: active + 1 });
          }}
        />
      </Pagination>
    </div>
  );
};

export default Pager;
