import PropTypes from 'prop-types';

const MainHero = ({ title, description }) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">
                        {description}
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

MainHero.propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
};

export default MainHero;
