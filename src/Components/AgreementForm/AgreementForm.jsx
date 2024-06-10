import { Field, Formik } from "formik";
import React, { useState } from "react";

function AgreementForm() {
  const [responsibilities, setresponsibilities] = useState([]);
  const [arr, setarr] = useState([]);

  function add(e) {
    // console.log(e.target.nextSibling.value);
    let x = document.getElementById("inputText").value
    setresponsibilities((prevStateArray) => [
      ...prevStateArray,
      x,
    ]);
    // setresponsibilities(arr)
    console.log(responsibilities);
    // e.target.nextSibling.value = ""
  }
  function deleteRes(i) {
    setresponsibilities(
      responsibilities.filter((ele) => ele !== responsibilities[i])
    );
  }
  let index ;
  function setUpdateRes(i) {
    index= i
    document.getElementById("inputText").value = responsibilities[i];
    document.getElementById("plusIcon").classList.add("d-none")
    document.getElementById("editIcon").classList.remove("d-none")
    console.log(i);
  }
  function editRes(){
    // console.log(e.target.nextSibling.value);
    let x = document.getElementById("inputText").value
    setresponsibilities(responsibilities.map((ele)=>ele == responsibilities[index]?x:null))
    document.getElementById("plusIcon").classList.remove("d-none")
    document.getElementById("editIcon").classList.add("d-none")

    console.log(x);
  // clear()
  }
  // function clear(){
  //   document.getElementById("inputText").value = ""
  // }
  return (
    <>
      {/* <Formik
       initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     ></Formik> */}
      <section className="mb-5">
        <div className="container shadow p-5">
          <form action="">
            <div className="row flex-row-reverse g-md-5 gy-5">
              <div className="col-md-6">
                <div className="item">
                  <label htmlFor="lang ">اختر لغة </label>
                  <select
                    name="lang"
                    id="lang"
                    className="d-block btn btn-outline-form rounded-pill"
                  >
                    <option value="volvo">اختر</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item">
                  <label htmlFor="lang ">اختر لغة </label>
                  <select
                    name="lang"
                    id="lang"
                    className="d-block btn btn-outline-form rounded-pill"
                  >
                    <option value="volvo">اختر</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item">
                  <label htmlFor="lang ">اختر لغة </label>
                  <select
                    name="lang"
                    id="lang"
                    className="d-block btn btn-outline-form rounded-pill"
                  >
                    <option value="volvo">اختر</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item">
                  <label htmlFor="lang ">اختر لغة </label>
                  <select
                    name="lang"
                    id="lang"
                    className="d-block btn btn-outline-form rounded-pill"
                  >
                    <option value="volvo">اختر</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="item">
                  <label htmlFor="lang ">اختر لغة </label>

                  <div className="position-relative">
                    <i
                      onClick={(e) => add(e)}
                      id="plusIcon"
                      className="fa-solid fa-circle-plus position-absolute top-50 ms-4 text-main fs-5  start-0 translate-middle-y"
                    ></i>
                    <i
                      id="editIcon"
                      onClick={(e)=>editRes(e)}
                      className="d-none fa-solid fa-pen-to-square position-absolute top-50 ms-4 text-main fs-5  start-0 translate-middle-y"
                    ></i>
                    <input
                      type="text"
                      className="btn btn-outline-form rounded-pill"
                      id="inputText"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 ">
                <div className="container ">
                  <div className="row g-4 ">
                    {responsibilities.map((ele, i) => (
                      <div key={i} className="col-lg-4">
                        <div className=" responsibilitiesTag shadow text-white rounded-pill px-4 py-2 ">
                          {i + 1} <span className="me-3">-</span>
                          {ele}
                          <i
                            className="fa-solid fa-trash mx-3 text-danger"
                            onClick={() => deleteRes(i)}
                          ></i>
                          <i
                            className="fa-solid fa-pen text-warning"
                            onClick={() => setUpdateRes(i)}
                          ></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="item">
                  <label htmlFor="lang ">اختر لغة </label>
                  <select
                    name="lang"
                    id="lang"
                    className="d-block btn btn-outline-form rounded-pill"
                  >
                    <option value="volvo">اختر</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 ">
                <div className="item  text-center">
                  <button className="btn btn-outline-gray rounded-pill w-lg-50  ">
                    شراء الاتفاقية
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="row my-5  flex-row-reverse gy-3 ">
            <div className="col-6 ">
              <div className="item ">
                <h6 className="text-end">المبلغ</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="item">
                <h6> س.ر500 </h6>
              </div>
            </div>
            <div className="col-6">
              <div className="item">
                <h6 className="text-end">الضريبة</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="item">
                <h6> س.ر500 </h6>
              </div>
            </div>
            <div className="col-6">
              <div className="item">
                <h6 className="text-end">المجموع</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="item">
                <h6> س.ر500 </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AgreementForm;
