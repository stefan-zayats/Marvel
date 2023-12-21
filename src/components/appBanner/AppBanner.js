import './appBanner.scss';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img src={avengers} alt="Avengers" />
            <div className="app__banner-text">
                New comics every week!<br />
                Stay tuned!
            </div>
            <div className="app__banner-text-row">
                New comics every week!
                Stay tuned!
            </div>
            <img className="app__banner-logo" src={avengersLogo} alt="Avengers logo" />
        </div>
    )
}

export default AppBanner;