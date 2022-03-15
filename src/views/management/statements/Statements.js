import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './statements.scss';
import {
  Col,
  Row,
} from 'react-bootstrap'
const BasicForms = () => {
  return (
    <>
      <div class="backBlueColor">
        <Row className="statementBreadcrumb">
          <Col md="12" className="font-weight700 font-size24 dark-black">
            <Breadcrumb>
              <Breadcrumb.Item href="#" className="font-size16 font-weight600">ABC Statements</Breadcrumb.Item>
              <Breadcrumb.Item active className="font-size16 font-weight600 ">Statements</Breadcrumb.Item>
            </Breadcrumb>
            Statements
          </Col>
        </Row>
        <Row className="">
          <Col md="6" className="mt-4 dark-black">
            <div className="statementBox bg-white box-shadow brdrRadius8">
              <div class="d-flex align-items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle opacity="0.1" cx="22" cy="22" r="22" fill="#0FEE9F" />
                  <path d="M22 11V33" stroke="#0FEE9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27 15H19.5C18.5717 15 17.6815 15.3687 17.0251 16.0251C16.3687 16.6815 16 17.5717 16 18.5C16 19.4283 16.3687 20.3185 17.0251 20.9749C17.6815 21.6313 18.5717 22 19.5 22H24.5C25.4283 22 26.3185 22.3687 26.9749 23.0251C27.6313 23.6815 28 24.5717 28 25.5C28 26.4283 27.6313 27.3185 26.9749 27.9749C26.3185 28.6313 25.4283 29 24.5 29H16" stroke="#0FEE9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <strong className="font-size18 font-weight600 ml-3">Revenue</strong>
              </div>
              <Row>
                <Col md="4">
                  <strong className="h4 font-size18 font-weight600">$3,821  <small className="font-weight700 font-size16 greena">+2.3%</small><br />
                    <span class="font-size12 font-weight400 secondaryGreyColor">Today</span></strong>
                </Col>
                <Col md="4">
                  <strong className="h4 font-size18 font-weight600   ">$28,329  <small className="font-weight700 font-size16 greena">+1.3%</small><br />
                    <span class="font-size12 font-weight400 secondaryGreyColor">This Month</span></strong>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md="6" className="mt-4 dark-black">
            <div className="statementBox bg-white box-shadow brdrRadius8">
              <div class="d-flex align-items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle opacity="0.1" cx="22" cy="22" r="22" fill="#FF9A32" />
                  <path d="M30.9996 19C30.7344 19 30.48 19.1054 30.2925 19.2929C30.1049 19.4804 29.9996 19.7348 29.9996 20V24C29.9996 24.2652 30.1049 24.5196 30.2925 24.7071C30.48 24.8946 30.7344 25 30.9996 25C31.2648 25 31.5191 24.8946 31.7067 24.7071C31.8942 24.5196 31.9996 24.2652 31.9996 24V20C31.9996 19.7348 31.8942 19.4804 31.7067 19.2929C31.5191 19.1054 31.2648 19 30.9996 19ZM25.8296 16H22.7296L21.5896 18H25.8196C25.8822 18.0517 25.9314 18.1178 25.9628 18.1927C25.9941 18.2677 26.0068 18.3491 25.9996 18.43V25.57C26.0063 25.6499 25.9945 25.7303 25.965 25.8049C25.9355 25.8795 25.8892 25.9463 25.8296 26H22.9996L21.8496 28H25.8496C26.4554 27.9588 27.0207 27.6808 27.423 27.226C27.8254 26.7712 28.0325 26.1763 27.9996 25.57V18.43C28.0324 17.8204 27.8225 17.2226 27.4159 16.7673C27.0093 16.312 26.439 16.0361 25.8296 16ZM13.9996 25.57V18.43C13.9936 18.3501 14.0058 18.27 14.0352 18.1955C14.0647 18.121 14.1106 18.0542 14.1696 18H16.9996L18.1296 16H14.1296C13.5273 16.0462 12.9671 16.3264 12.569 16.7806C12.1708 17.2348 11.9664 17.8269 11.9996 18.43V25.57C11.9668 26.1796 12.1766 26.7774 12.5833 27.2327C12.9899 27.688 13.5602 27.9639 14.1696 28H17.2696L18.4096 26H14.1796C14.1169 25.9483 14.0678 25.8822 14.0364 25.8073C14.005 25.7323 13.9924 25.6509 13.9996 25.57Z" fill="#FF9A32" />
                  <path d="M18.9979 29.9995C18.822 30.0002 18.6491 29.9545 18.4965 29.8671C18.3439 29.7796 18.2171 29.6534 18.1289 29.5013C18.0406 29.3491 17.9941 29.1764 17.9939 29.0005C17.9937 28.8247 18.0399 28.6519 18.1279 28.4995L21.2779 22.9995H16.9979C16.8234 22.9985 16.6522 22.9518 16.5013 22.8641C16.3504 22.7764 16.2251 22.6507 16.1379 22.4995C16.0501 22.3475 16.0039 22.1751 16.0039 21.9995C16.0039 21.824 16.0501 21.6516 16.1379 21.4995L20.1379 14.4995C20.2705 14.2688 20.4893 14.1002 20.7463 14.0308C21.0032 13.9614 21.2771 13.9969 21.5079 14.1295C21.7386 14.2621 21.9072 14.481 21.9766 14.7379C22.046 14.9948 22.0105 15.2688 21.8779 15.4995L18.7179 20.9995H22.9979C23.1724 21.0006 23.3436 21.0473 23.4945 21.135C23.6453 21.2227 23.7706 21.3484 23.8579 21.4995C23.9456 21.6516 23.9919 21.824 23.9919 21.9995C23.9919 22.1751 23.9456 22.3475 23.8579 22.4995L19.8579 29.4995C19.7706 29.6507 19.6453 29.7763 19.4945 29.8641C19.3436 29.9518 19.1724 29.9985 18.9979 29.9995Z" fill="#FF9A32" />
                </svg>
                <strong className="font-size18 font-weight600 ml-3">Charging Session</strong>
              </div>
              <Row>
                <Col md="5">
                  <strong className="h4 font-size18 font-weight600">21 Sessions <br />
                    <span class="font-size12 font-weight400 secondaryGreyColor">Today</span></strong>
                </Col>
                <Col md="7">
                  <strong className="h4 font-size18 font-weight600">16,221 Sessions<br />
                    <span class="font-size12 font-weight400 secondaryGreyColor">This Month</span></strong>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="pt-3 pb-4">
          <Col md="6" className="mt-2 dark-black">
            <div className="statementBox bg-white box-shadow brdrRadius8">
              <div class="d-flex align-items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle opacity="0.1" cx="22" cy="22" r="22" fill="#FF9A32" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5008 15.9508H29.5008C29.7793 15.9508 30.0463 16.0614 30.2432 16.2583C30.4402 16.4552 30.5508 16.7223 30.5508 17.0008V27.0008C30.5508 27.2793 30.4402 27.5463 30.2432 27.7432C30.0463 27.9402 29.7793 28.0508 29.5008 28.0508H14.5008C14.2223 28.0508 13.9552 27.9402 13.7583 27.7432C13.5614 27.5463 13.4508 27.2793 13.4508 27.0008V17.0008C13.4508 16.7223 13.5614 16.4552 13.7583 16.2583C13.9552 16.0614 14.2223 15.9508 14.5008 15.9508ZM14.5008 14.3008C13.7847 14.3008 13.0979 14.5852 12.5916 15.0916C12.0852 15.5979 11.8008 16.2847 11.8008 17.0008V27.0008C11.8008 27.7169 12.0852 28.4036 12.5916 28.91C13.0979 29.4163 13.7847 29.7008 14.5008 29.7008H29.5008C30.2169 29.7008 30.9036 29.4163 31.41 28.91C31.9163 28.4036 32.2008 27.7169 32.2008 27.0008V17.0008C32.2008 16.2847 31.9163 15.5979 31.41 15.0916C30.9036 14.5852 30.2169 14.3008 29.5008 14.3008H14.5008ZM30.3875 16.1197C30.6201 16.3539 30.7508 16.6706 30.7508 17.0008V27.0008C30.7508 27.3323 30.6191 27.6502 30.3847 27.8847C30.1502 28.1191 29.8323 28.2508 29.5008 28.2508H14.5008C14.1694 28.2508 13.8515 28.1192 13.6171 27.8849C13.8515 28.1193 14.1695 28.251 14.501 28.251H29.501C29.8325 28.251 30.1504 28.1193 30.3849 27.8849C30.6193 27.6504 30.751 27.3325 30.751 27.001V17.001C30.751 16.6707 30.6203 16.3539 30.3875 16.1197ZM14.5008 14.5008C13.8377 14.5008 13.2019 14.7642 12.733 15.233C12.2642 15.7019 12.0008 16.3377 12.0008 17.0008V27.0008C12.0008 27.6431 12.248 28.2599 12.6897 28.7241C12.2481 28.26 12.001 27.6432 12.001 27.001V17.001C12.001 16.3379 12.2644 15.7021 12.7332 15.2332C13.2021 14.7644 13.8379 14.501 14.501 14.501H29.501C30.164 14.501 30.7999 14.7644 31.2687 15.2332C31.2687 15.2331 31.2686 15.2331 31.2685 15.233C30.7997 14.7642 30.1638 14.5008 29.5008 14.5008H14.5008Z" fill="#FF9A32" />
                  <path d="M14.5 18.875C14.5 18.7092 14.5658 18.5503 14.6831 18.4331C14.8003 18.3158 14.9592 18.25 15.125 18.25H17.625C17.7908 18.25 17.9497 18.3158 18.0669 18.4331C18.1842 18.5503 18.25 18.7092 18.25 18.875V20.125C18.25 20.2908 18.1842 20.4497 18.0669 20.5669C17.9497 20.6842 17.7908 20.75 17.625 20.75H15.125C14.9592 20.75 14.8003 20.6842 14.6831 20.5669C14.5658 20.4497 14.5 20.2908 14.5 20.125V18.875Z" fill="#FF9A32" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 22.625C14.5 22.4592 14.5658 22.3003 14.6831 22.1831C14.8003 22.0658 14.9592 22 15.125 22H21.375C21.5408 22 21.6997 22.0658 21.8169 22.1831C21.9342 22.3003 22 22.4592 22 22.625C22 22.7908 21.9342 22.9497 21.8169 23.0669C21.6997 23.1842 21.5408 23.25 21.375 23.25H15.125C14.9592 23.25 14.8003 23.1842 14.6831 23.0669C14.5658 22.9497 14.5 22.7908 14.5 22.625ZM14.5 25.125C14.5 24.9592 14.5658 24.8003 14.6831 24.6831C14.8003 24.5658 14.9592 24.5 15.125 24.5H16.375C16.5408 24.5 16.6997 24.5658 16.8169 24.6831C16.9342 24.8003 17 24.9592 17 25.125C17 25.2908 16.9342 25.4497 16.8169 25.5669C16.6997 25.6842 16.5408 25.75 16.375 25.75H15.125C14.9592 25.75 14.8003 25.6842 14.6831 25.5669C14.5658 25.4497 14.5 25.2908 14.5 25.125ZM18.25 25.125C18.25 24.9592 18.3158 24.8003 18.4331 24.6831C18.5503 24.5658 18.7092 24.5 18.875 24.5H20.125C20.2908 24.5 20.4497 24.5658 20.5669 24.6831C20.6842 24.8003 20.75 24.9592 20.75 25.125C20.75 25.2908 20.6842 25.4497 20.5669 25.5669C20.4497 25.6842 20.2908 25.75 20.125 25.75H18.875C18.7092 25.75 18.5503 25.6842 18.4331 25.5669C18.3158 25.4497 18.25 25.2908 18.25 25.125ZM22 25.125C22 24.9592 22.0658 24.8003 22.1831 24.6831C22.3003 24.5658 22.4592 24.5 22.625 24.5H23.875C24.0408 24.5 24.1997 24.5658 24.3169 24.6831C24.4342 24.8003 24.5 24.9592 24.5 25.125C24.5 25.2908 24.4342 25.4497 24.3169 25.5669C24.1997 25.6842 24.0408 25.75 23.875 25.75H22.625C22.4592 25.75 22.3003 25.6842 22.1831 25.5669C22.0658 25.4497 22 25.2908 22 25.125ZM25.75 25.125C25.75 24.9592 25.8158 24.8003 25.9331 24.6831C26.0503 24.5658 26.2092 24.5 26.375 24.5H27.625C27.7908 24.5 27.9497 24.5658 28.0669 24.6831C28.1842 24.8003 28.25 24.9592 28.25 25.125C28.25 25.2908 28.1842 25.4497 28.0669 25.5669C27.9497 25.6842 27.7908 25.75 27.625 25.75H26.375C26.2092 25.75 26.0503 25.6842 25.9331 25.5669C25.8158 25.4497 25.75 25.2908 25.75 25.125Z" fill="#FF9A32" />
                </svg>
                <strong className="font-size18 font-weight600 ml-3">Payment Type</strong>
              </div>
              <Row className="mt-1">
                <Col md="4" className="pr-0">
                  <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect width="8" height="8" rx="2" fill="#0FEE9F" />
                  </svg><small className="font-weight700 font-size12 pl-1">43.8% </small>
                    <span class="font-size12 font-weight400 ml-1"> Cards</span></strong>
                </Col>
                <Col md="4" className="pr-0">
                  <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect width="8" height="8" rx="2" fill="#2D3F8E" />
                  </svg><small className="font-weight700 font-size12 pl-1">17.1% </small>
                    <span class="font-size12 font-weight400 ml-1"> Charging Code</span></strong>
                </Col>
                <Col md="4" className="pr-0">
                  <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect width="8" height="8" rx="2" fill="#CECECE" />
                  </svg><small className="font-weight700 font-size12 pl-1">1.2% </small>
                    <span class="font-size12 font-weight400 ml-1"> Master Key Card</span></strong>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <strong className="h4 font-size12 font-weight600 d-flex align-items-center mmb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect width="8" height="8" rx="2" fill="#11A1FD" />
                  </svg><small className="font-weight700 font-size12 pl-1">32.6% </small>
                    <span class="font-size12 font-weight400 ml-1"> Google Pay</span></strong>
                </Col>
                <Col md="4">
                  <strong className="h4 font-size12 font-weight600 d-flex align-items-center mmb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect width="8" height="8" rx="2" fill="#FF9A32" />
                  </svg><small className="font-weight700 font-size12 pl-1">6.5% </small>
                    <span class="font-size12 font-weight400 ml-1"> Apple Pay</span></strong>
                </Col>
                <Col md="4">
                  <strong className="h4 font-size12 font-weight600 d-flex align-items-center mmb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect width="8" height="8" rx="2" fill="#F43EF8" />
                  </svg><small className="font-weight700 font-size12 pl-1">0.8% </small>
                    <span class="font-size12 font-weight400 ml-1"> Free Charging</span></strong>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md="6" className="mt-2 dark-black">
            <div className="statementBox bg-white box-shadow brdrRadius8 minHgt152">
              <div class="d-flex align-items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle opacity="0.1" cx="22" cy="22" r="22" fill="#11A1FD" />
                  <path d="M29.8735 18.4211H24.7102L29.3532 12.5547C29.4493 12.4305 29.3626 12.25 29.2055 12.25H20.2172C20.1516 12.25 20.0883 12.2852 20.0555 12.3437L13.9829 22.832C13.9102 22.9562 13.9993 23.1133 14.1446 23.1133H18.2321L16.1368 31.4945C16.0922 31.6773 16.3126 31.8062 16.4485 31.675L30.0024 18.7422C30.1243 18.6273 30.0422 18.4211 29.8735 18.4211Z" fill="#11A1FD" />
                </svg>
                <strong className="font-size18 font-weight600 ml-3">Energy Cunsumption</strong>
              </div>
              <Row>
                <Col md="5">
                  <strong className="h4 font-size18 font-weight600">621 KWH  <small className="font-weight700 font-size16 greena">+2.3%</small><br />
                    <span class="font-size12 font-weight400">Today</span></strong>
                </Col>
                <Col md="7">
                  <strong className="h4 font-size18 font-weight600">210,619 KWH   <small className="font-weight700 font-size16 greena">+1.3%</small><br />
                    <span class="font-size12 font-weight400">This Month</span></strong>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col className="mb-3 pl-0 pr-0">  <img className="w-100" src={require('../../../assets/img/graph6.png').default} alt="" /></Col>

      </Row>
      <Row>

        <Col className="mb-3 pl-0 pr-0">  <img className="w-100" src={require('../../../assets/img/graph7.png').default} alt="" /></Col>

      </Row>
      <Row>

        <Col className="mb-3 pl-0 pr-0">  <img className="w-100" src={require('../../../assets/img/graph8.png').default} alt="" /></Col>
      </Row>






    </>
  )
}

export default BasicForms
