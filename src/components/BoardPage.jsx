import { Table } from "react-bootstrap";
import data from "../data/board.json";

function BoardPage() {
  return (
    <container className='board_container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>댓글</th>
            <th>댓글 작성자</th>
          </tr>
        </thead>
        <tbody>
          {data.board.map((data) => {
            return (
              <tr>
                <th>{data.num}</th>
                <th>{data.title}</th>
                <th>{data.writer}</th>
              </tr>
            );
          })}
        </tbody>
        <div className='input_area'>
          <input value='text' placeholder='comment' />
          <input value='text' placeholder='writer' />
          <button>작성하기</button>
        </div>
      </Table>
    </container>
  );
}

export default BoardPage;
