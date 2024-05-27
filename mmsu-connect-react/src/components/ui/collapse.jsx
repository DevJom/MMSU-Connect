import PropTypes from "prop-types";

const Collapse = ({ title, users }) => {
    return (
        <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">{title}</div>
            <div className="collapse-content">{users}</div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.node.isRequired,
    users: PropTypes.node.isRequired,
};

export default Collapse;
