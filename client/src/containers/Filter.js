import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Filter from "components/Filters/Filter";
import qs from "query-string";

const mapStateToProps = (_, ownProps) => {
  const queries = qs.parse(ownProps.location.search);
  const { filter } = queries;
  return {
    active: !!filter && queries.filter === ownProps.filter
  };
};

export default withRouter(connect(mapStateToProps)(Filter));
