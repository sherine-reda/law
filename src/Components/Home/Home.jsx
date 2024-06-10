import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AgreementForm from "../AgreementForm/AgreementForm";
import Footer from "../Footer/Footer";
import { langContext } from "../../Context/LangContext";
// import { resources } from "../../language/Lang";
import i18next from "i18next";
import axios from "axios";
function Home() {
  const { Lang, setLang } = useContext(langContext);
  // console.log(Lang.toLowerCase());
  async function services(){
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://e454-105-36-145-36.ngrok-free.app/api/services?lang=en',
      headers: { 
        'Accept': 'application/json'
      }
    };
    

axios.request(config)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});
    // let url = `https://husky-willing-directly.ngrok-free.app/api/services?lang=en`
    // let {data} = await axios.get(url,{
    //   headers:{'accept':'application/json'}
    // })
    // console.log(url);
    // console.log(data);
  }
  useEffect(() => {
    services()
  }, [])
  
  // console.log(Lang);
  return (
    <>
      <header
        id="home"
        className="mt-lg-5 d-flex justify-content-center align-items-center"
      >
        <div>
          <h1> {i18next.t('header')}</h1>
          <p>
            {/* {Lang=='Ar'?"  إصدر إتفاقيات خلال دقائق. موثوق بها من ٥٠٠+ شركة في الخليج":"Generate business agreements in minutes. Trusted by 500+ gulf companies"} */}
            {i18next.t('title')}
          </p>
        </div>
      </header>
      {/* طريقة العمل */}
      <section id="HowWork" className="my-5">
        <div className="container text-center py-5  mb-5 ">
          <h2 className="pb-5 title"> {i18next.t('OurProcess')}</h2>
          {/* className="row mt-5" */}
          <div  className={"row mt-5"} >
          <div className="col-md-4">
              <div className="item">
                <div className="circle">
                  <div className="inside-circle d-flex justify-content-center align-items-center">
                    {" "}
                    <span>01</span>
                  </div>
                </div>
                <h2 className="mt-4"> {i18next.t('OurProcess_t1')}</h2>
              </div>
            </div>
          
            <div className="col-md-4">
              <div className="item">
                <div className="circle">
                  <div className="inside-circle d-flex justify-content-center align-items-center">
                    {" "}
                    <span>02</span>
                  </div>
                </div>
                <h2 className="mt-4">{i18next.t('OurProcess_t2')}</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="circle ">
                  <div className="inside-circle d-flex justify-content-center align-items-center">
                    {" "}
                    <span>03</span>
                  </div>
                </div>
                <h2 className="mt-4">{i18next.t('OurProcess_t3')}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* صيغ الاتفاقات */}
      <section id="AgreementForms" className="mt-5">
        <div className="container text-center py-5">
          <h2 className="pb-5 title">صيغ الاتفاقات</h2>
          <div className="row mt-5 gy-5">
            <div className="col-lg-4 col-md-6 ">
              <div className="item item1 m-auto d-flex justify-content-center align-items-end pb-4 rounded-5 shadow">
                <div className="content ">
                  <h3 className="text-white">سياسية الخصوصية</h3>
                  <Link to="" className="btn readMore shadow">
                    اقرا المزيد
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item item2 d-flex m-auto justify-content-center align-items-end pb-4 rounded-5 shadow">
                <div className="content ">
                  <h3 className="text-white">(NDA) عدم الافصاح </h3>
                  <Link to="" className="btn readMore shadow">
                    اقرا المزيد
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item item3 d-flex m-auto justify-content-center align-items-end pb-4 rounded-5 shadow">
                <div className="content ">
                  <h3 className="text-white">الشروط والاحكام</h3>
                  <Link to="" className="btn readMore shadow">
                    اقرا المزيد
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* الاتفاقية */}
      <section id="theAgreement" className="my-5 py-5 bg-gray">
        <div className="container text-center py-5">
          <h2 className=" title">الاتفاقية </h2>
          <p>اختر الاتفاقية</p>
          <div className="row g-lg-5 gy-5 my-5">
            <div className="col-lg-4 col-md-6">
              <div className="item ">
                <Link href="#" className="btn btn-outline-gray rounded-pill">الشروط والأحكام <br /><span>حماية لأعمالك وخدماتك</span></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item ">
                <Link href="#" className="btn btn-outline-gray rounded-pill">  (SLA) سياسة الخدمة <br /><span>حماية لك ولعميلك</span></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item ">
                <Link href="#" className="btn btn-outline-gray rounded-pill">الشراكة والتعاون<br /><span>  حماية لك ولشريك في العمل</span></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item ">
                <Link href="#" className="btn btn-outline-gray rounded-pill">الشروط والأحكام <br /><span>حماية لأعمالك وخدماتك</span></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item ">
                <Link href="#" className="btn btn-outline-gray rounded-pill">الشروط والأحكام <br /><span>حماية لأعمالك وخدماتك</span></Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item ">
                <Link href="#" className="btn btn-outline-gray rounded-pill">الشروط والأحكام <br /><span>حماية لأعمالك وخدماتك</span></Link>
              </div>
            </div>
          </div>
        </div>
        <AgreementForm />
      </section>

      <Footer />

    </>
  );
}

export default Home;
