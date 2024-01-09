import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DoctorCard({ doctor }) {
  return (
    <Link to={`/doctors/${doctor.id}`} className="remove-underline-from-links">
      <div className="card" style={{ height: '600px', width: '300px' }}>
        <img
          src={doctor.imageUrl}
          className="card-img-top"
          alt="..."
          style={{ height: '300px', width: '100%', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h4 className="card-title fw-bold text-center">{doctor.name}</h4>
          <div className="text-center">
            <hr className="mx-auto w-50" />
          </div>
          <p className="card-text text-center">{doctor.description}</p>
          <ul className="list-unstyled d-flex gap-2 justify-content-center">
            <li>
              <Link to="/">
                <img src="https://img.icons8.com/ios/30/facebook-new.png" alt="facebook-new" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="https://img.icons8.com/ios/30/instagram-new--v1.png" alt="instagram-new--v1" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="https://img.icons8.com/ios/30/twitterx--v2.png" alt="twitterx--v2" />
              </Link>
            </li>
          </ul>
          <Link to={`/doctors/${doctor.id}`} className="btn btn-info text-white w-100">
            Details
          </Link>
        </div>
      </div>
    </Link>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.element.isRequired,
};

export default DoctorCard;
