import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text27 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text32 thq-body-small">
                  I am extremely satisfied with the quality of the land and the
                  professional service provided by Mr. Hoàng. Highly
                  recommended!
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text36 thq-body-large">
                            Nguyễn Văn A
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text29 thq-body-small">
                            CEO at Company ABC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text25 thq-body-small">
                        Great experience dealing with this property. The
                        location is perfect for my business needs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text24 thq-body-large">
                            Trần Thị B
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33 thq-body-small">
                            Business Owner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text31 thq-body-small">
                        The land exceeded my expectations. The process was
                        smooth and efficient.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text35 thq-body-large">
                            Lê Văn C
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30 thq-body-small">
                            Investor
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text28 thq-body-small">
                        I am impressed with the potential of this land for
                        future development. Thank you for the opportunity.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text37 thq-body-large">
                            Phạm Thị D
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26 thq-body-small">
                            Real Estate Agent
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text34 thq-body-small">
                        Working with Mr. Hoàng was a pleasure. He provided
                        valuable insights and made the buying process seamless.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDY4NDM2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  author4Position: undefined,
  heading1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1515027037286-7da2d06130cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDY4NDM2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of Nguyễn Văn A',
  review3: undefined,
  author2Alt: 'Image of Trần Thị B',
  author1Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1706885093487-7eda37b48a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDY4NDM2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  review2: undefined,
  content1: undefined,
  author2Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDY4NDM2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Lê Văn C',
  review4: undefined,
  author3Name: undefined,
  author1Name: undefined,
  author4Alt: 'Image of Phạm Thị D',
  author4Name: undefined,
}

Testimonial17.propTypes = {
  author2Name: PropTypes.element,
  author3Src: PropTypes.string,
  review1: PropTypes.element,
  author4Position: PropTypes.element,
  heading1: PropTypes.element,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  review3: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author2Src: PropTypes.string,
  author3Position: PropTypes.element,
  review2: PropTypes.element,
  content1: PropTypes.element,
  author2Position: PropTypes.element,
  author1Src: PropTypes.string,
  author3Alt: PropTypes.string,
  review4: PropTypes.element,
  author3Name: PropTypes.element,
  author1Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author4Name: PropTypes.element,
}

export default Testimonial17
