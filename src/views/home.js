import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Open Warmhearted Kingfisher</title>
        <meta property="og:title" content="Open Warmhearted Kingfisher" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">#</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">#</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">#</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">#</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14 thq-body-large">Trang chủ</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15 thq-body-large">Giới thiệu</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16 thq-body-large">Vị trí</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17 thq-body-large">Liên hệ</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20 thq-body-small">
              Trang chủ - Xem thông tin chính về đất vườn
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21 thq-body-small">
              Giới thiệu - Xem video giới thiệu về đất vườn
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Vị trí - Xem bản đồ vị trí của đất vườn
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              Liên hệ - Liên hệ với Mr Hoàng để biết thêm thông tin chi tiết
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24 thq-body-small">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25 thq-body-small">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26 thq-body-large">
              Thuộc phường Long Thành Trung, Thị xã Hòa Thành, tỉnh Tây Ninh
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27 thq-heading-1">
              Đất vườn 2599 m2 có sẳn 300 m2 thổ cư
            </span>
          </Fragment>
        }
      ></Hero17>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text28">Gọi ngay: 0936.156.257</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text29 thq-body-large">
              Hãy gọi cho chúng tôi hoặc để lại tin nhắn để được tư vấn miễn phí
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text30 thq-heading-2">
              Liên hệ ngay để biết thêm thông tin chi tiết
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text31 thq-heading-2">Diện tích đất</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text32 thq-heading-2">Vị trí</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text33 thq-heading-2">Quy hoạch</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text34 thq-body-small">
              2599 m2 với 300 m2 thổ cư
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text35 thq-body-small">
              Phường Long Thành Trung, Thị xã Hòa Thành, tỉnh Tây Ninh
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text36 thq-body-small">
              Đất thương mại, dịch vụ và Đất ở tại đô thị
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text37 thq-heading-2">
              Xem video giới thiệu
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text38 thq-heading-2">Liên hệ thông tin</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text39 thq-heading-2">
              Xem vị trí trên bản đồ
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text40 thq-heading-2">
              Xem sơ đồ quy hoạch
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text41 thq-body-small">
              Xem video giới thiệu về đất vườn 2599 m2 tại phường Long Thành
              Trung, Thị xã Hòa Thành, tỉnh Tây Ninh
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text42 thq-body-small">
              Liên hệ Mr Hoàng qua số điện thoại 0936.156.257 để biết thêm thông
              tin chi tiết về đất
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text43 thq-body-small">
              Xem vị trí chính xác của đất trên Google Map để hiểu rõ hơn về môi
              trường xung quanh
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Xem sơ đồ quy hoạch của đất để hiểu rõ mục đích sử dụng và tiềm
              năng phát triển của khu vực
            </span>
          </Fragment>
        }
      ></Steps2>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text45 thq-body-large">
              Để biết thêm thông tin chi tiết về đất vườn, vui lòng liên hệ theo
              thông tin sau:
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text46 thq-heading-2">Liên hệ</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text47 thq-heading-3">
              Phường Long Thành Trung, Thị xã Hòa Thành, Tây Ninh
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text48 thq-heading-3">
              Số điện thoại: 0936.156.257
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text49 thq-body-large">
              Vui lòng đến trực tiếp địa chỉ trên để xem đất và thảo luận trực
              tiếp với chúng tôi.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text50 thq-body-large">
              Gọi điện trực tiếp theo số điện thoại trên để được tư vấn và hỗ
              trợ.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text51 thq-body-small">
              https://s.net.vn/fd7C
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text52 thq-body-small">
              https://bit.ly/3AO6Vas
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text53 thq-body-small">
              https://bit.ly/3MpPNKJ
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
