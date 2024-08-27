import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text16 thq-heading-2">Liên hệ</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text21 thq-body-large">
                    Để biết thêm thông tin chi tiết về đất vườn, vui lòng liên
                    hệ theo thông tin sau:
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text19 thq-heading-3">
                    Phường Long Thành Trung, Thị xã Hòa Thành, Tây Ninh
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text18 thq-body-large">
                    Vui lòng đến trực tiếp địa chỉ trên để xem đất và thảo luận
                    trực tiếp với chúng tôi.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text17 thq-heading-3">
                    Số điện thoại: 0936.156.257
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text20 thq-body-large">
                    Gọi điện trực tiếp theo số điện thoại trên để được tư vấn và
                    hỗ trợ.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  heading1: undefined,
  location1ImageAlt: 'Hình ảnh địa chỉ',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1506345276770-5a21fcc0e8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDY4NDM2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageAlt: 'Hình ảnh số điện thoại',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1595807315740-be90102940dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDY4NDM2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2: undefined,
  location1Description: undefined,
  location1: undefined,
  location2Description: undefined,
  content1: undefined,
}

Contact10.propTypes = {
  heading1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location2: PropTypes.element,
  location1Description: PropTypes.element,
  location1: PropTypes.element,
  location2Description: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact10
