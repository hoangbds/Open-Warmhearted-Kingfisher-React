import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-filled thq-button-animated steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text27 thq-heading-2">
                      Xem video giới thiệu
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text31 thq-body-small">
                      Xem video giới thiệu về đất vườn 2599 m2 tại phường Long
                      Thành Trung, Thị xã Hòa Thành, tỉnh Tây Ninh
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text30 thq-heading-2">
                      Liên hệ thông tin
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text29 thq-body-small">
                      Liên hệ Mr Hoàng qua số điện thoại 0936.156.257 để biết
                      thêm thông tin chi tiết về đất
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text26 thq-heading-2">
                      Xem vị trí trên bản đồ
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text32 thq-body-small">
                      Xem vị trí chính xác của đất trên Google Map để hiểu rõ
                      hơn về môi trường xung quanh
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text25 thq-heading-2">
                      Xem sơ đồ quy hoạch
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text28 thq-body-small">
                      Xem sơ đồ quy hoạch của đất để hiểu rõ mục đích sử dụng và
                      tiềm năng phát triển của khu vực
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step3Title: undefined,
  step1Title: undefined,
  step4Description: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step1Description: undefined,
  step3Description: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
  step1Title: PropTypes.element,
  step4Description: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
}

export default Steps2
