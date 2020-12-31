import React from "react";
import axios from "axios";
import { withNamespaces } from "react-i18next";
import ReactPaginate from "react-paginate";
import "./stylesheet.css";

class RetrieveMyMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0,
      pageCount: null,
    };
  }

  receivedData() {
   // const BASE_URL = "http://localhost:50/perledorange/serverperledorange";
    const BASE_URL = "http://perledorange.com";
    const API_PATH = BASE_URL + "/messages/RetrieveContactMessages.php";
    axios.get(API_PATH).then((res) => {
      console.log(res);
      const messages = res.data;
      const count = messages.length;
      const slice = messages.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((pd) => <React.Fragment></React.Fragment>);
      this.setState({
        messages,
        pageCount: Math.ceil(count/ this.state.perPage),
        postData,
      });
      //   this.setState({ persons: res.data });
      console.log(messages);
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }

  renderMessages() {
    return this.state.products.map((message) => {
      return (
        <tr>
          <td>{message.Id}</td>
          <td>{message.FirstName}</td>
          <td>{message.Email}</td>
          <td>{message.Phone}</td>
          <td>{message.Subject}</td>
          <td>{message.Date}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div >
        <div >  
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
            {this.state.messages.map((message) => (
              <tr>
                <td>{message.FirstName}</td>
                <td>{message.Email}</td>
                <td>{message.Phone}</td>
                <td>{message.Subject}</td>
                <td>{message.Date}</td>

                <td>
                  <form onSubmit={this.handleEditSubmit}>
                    <button
                      type="submit"
                      value={message.Id}
                      onClick={(e) => this.onEdit(e)}
                    >
                      Edit
                    </button>
                  </form>
                  <form onSubmit={this.handleSubmit}>
                    <button
                      type="submit"
                      value={message.Id}
                      onClick={(e) => this.onClick(e)}
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </table>
          {this.state.postData}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          /> 
        </div>
      </div>
    );
  }
}

export default withNamespaces()(RetrieveMyMessages);
