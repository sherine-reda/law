import { Field, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import $ from "jquery";
import i18next from "i18next";
import { langContext } from "../../Context/LangContext";
import axios from "axios";
import { json } from "react-router-dom";
import { DataApi } from "../../Api";
function AgreementForm({ Id }) {
  const { Lang, setLang } = useContext(langContext);
  // console.log(Id);
  const [responsibilities, setresponsibilities] = useState([]);
  const [itemValue, setitemValue] = useState(null);
  const [totalPrice, settotalPrice] = useState(0);
  const [Taxes, setTaxes] = useState(0);
  const [isCheckedItem, setisCheckedItem] = useState(false);
  const [QuestionsService, setQuestionsService] = useState([]);
  const [myData, setmyData] = useState([]);
  let arr = [];

  function add(e) {
    // console.log(e.target.nextSibling.value);
    let x = document.getElementById("inputText").value;
    setresponsibilities((prevStateArray) => [...prevStateArray, x]);
    // setresponsibilities(arr)
    console.log(responsibilities);
    // e.target.nextSibling.value = ""
  }
  function deleteRes(i) {
    setresponsibilities(
      responsibilities.filter((ele) => ele !== responsibilities[i])
    );
  }
  let index;
  function setUpdateRes(i) {
    index = i;
    document.getElementById("inputText").value = responsibilities[i];
    document.getElementById("plusIcon").classList.add("d-none");
    document.getElementById("editIcon").classList.remove("d-none");
    console.log(i);
  }
  function editRes() {
    // console.log(e.target.nextSibling.value);
    let x = document.getElementById("inputText").value;
    setresponsibilities(
      responsibilities.map((ele) => (ele == responsibilities[index] ? x : null))
    );
    document.getElementById("plusIcon").classList.remove("d-none");
    document.getElementById("editIcon").classList.add("d-none");

    console.log(x);
    // clear()
  }
  async function getQuestionsService() {
    let url = `http://192.168.1.108/api/questions?lang=${Lang.toLowerCase()}&service_id=${Id}`;
    // console.log(url);
    let { data } = await axios.get(url, {
      headers: { accept: "application/json" },
    });
    console.log(DataApi);
    // console.log(data);
    setQuestionsService(DataApi);
    // console.log(QuestionsService);
  }
 
  function dd(e) {
    let dodo = e.target;

    let items = Array.from(
      e.target?.nextSibling?.querySelectorAll(".dropdown-item")
    );
    // console.log(items);
    items.map((e, i) =>
      e.addEventListener("click", function (e) {
        setitemValue(e.target.innerHTML);
        dodo.innerHTML = e.target.innerHTML;
      })
    );

  }
  function handleSubmit(event) {
    event.preventDefault(); // prevent the form from submitting
  }
  function isChecked(i, e) {
    let x = !document.getElementById(i).checked;
    console.log(x);
    setisCheckedItem(x);
    console.log(isCheckedItem);
    x
      ? e.target.classList.add("bg-main", "text-white")
      : e.target.classList.remove("bg-main", "text-white");
    // x?:null
    if (x) {
      amoumt(e);
    } else {
      subtractAmount(e);
    }

  }
  function amoumt(e) {
    console.log(e.target.innerHTML);
    let x = e.target.innerHTML.indexOf("+");
    let y = e.target.innerHTML.indexOf("SAR");
    // console.log(x,y);
    // console.log(e.target.innerHTML.slice(x+1,y));
    let z = totalPrice + Number(e.target.innerHTML.slice(x + 1, y));
    let tax = (z * 15) / 100;
    //  console.log(z,tax);
    settotalPrice(z);
    setTaxes(tax);
  }
  function subtractAmount(e) {
    console.log(e.target.innerHTML);
    let x = e.target.innerHTML.indexOf("+");
    let y = e.target.innerHTML.indexOf("SAR");
    // console.log(x,y);
    // console.log(e.target.innerHTML.slice(x+1,y));
    let z = totalPrice - Number(e.target.innerHTML.slice(x + 1, y));
    let tax = (z * 15) / 100;
    settotalPrice(z);
    setTaxes(tax);
  }
  async function submit() {
    const form = document.getElementById("form");
    const submitter = document.querySelector("button[value=save]");
    const formData = new FormData(form, submitter);
    console.log(formData);
    // const output = document.getElementById("output");

    // formData.append('id',"sdsad")
  console.log("hello");
    for (const [key, value] of formData) {
      console.log(key +":" +value);
    }
  }
  useEffect(() => {
    getQuestionsService();
  }, [Lang, Id]);
  return (
    <>
      <section className="mb-5 " id="ArForm">
        <div className="container shadow p-5">
          <form onSubmit={handleSubmit} id="form">
            <div className="row  g-md-5 gy-5 p-5 text-center">
              {QuestionsService?.map((ele, i) => (
                <div className="col-md-12" key={i}>
                  <div className="item">
                    <label htmlFor="lang "> {ele.question.name}</label>
                    {ele?.question?.answers[0]?.type == "select" ? (
                      <div class="dropdown">
                        <a
                          onClick={(e) => dd(e)}
                          class="btn btn-secondary dropdown-toggle btn btn-outline-form rounded-pill bg-transparent"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {i18next.t("chose")}
                        </a>

                        <ul class="dropdown-menu form-menu">
                          {ele?.question?.answers?.map((q, i) =>
                            q.options.map((qq, i) => (
                              <li key={i} className="">
                                <a class="dropdown-item d-flex justify-content-between  align-items-center  position-relative fs-5">
                                  <span className="fs-6">{qq.name} </span>
                                  {q.price > 0 ? (
                                    <span className="text-end  position-absolute price-Check start-5">
                                      +{q.price} SAR
                                    </span>
                                  ) : null}
                                </a>
                                {/* <span className="ps-5 d-none">{q.description}</span> */}
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    ) : (
                      <>
                        {
                          ele?.question?.answers[0]?.type == "checkbox" ? (
                            <div className="row">
                              {ele?.question?.answers?.map((q, i) => (
                                <div className="col-md-4 m-auto">
                                  <div className="item">
                                    <label
                                      htmlFor={i}
                                      onClick={(e) => isChecked(i, e)}
                                      className="checkboxItem btn btn-outline-form position-relative rounded-pill fs-5"
                                    >
                                      {q.name}
                                      <span className="position-absolute price-Check start-5 fs-6 fw-bold">
                                        +{q.price} SAR
                                      </span>
                                    </label>
                                    <input
                                      id={i}
                                      key={i}
                                      type={q.type}
                                      name={q.input_name}
                                      value={q.name}
                                      hidden
                                      aria-hidden
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) :
                          (ele?.question?.answers).map((q,i)=> <input key={i} type={q.type} className="form-control" name={ele.question.answers.input_name} value={ele.question.answers.name} placeholder={ele.question.answers.name}/> )
                        }
                      </>
                    )}
                  </div>
                </div>
              ))}
              {/* ///////////////////////////// */}

              <div className="col-md-12">
                <div className="row my-5 text-center m-auto  w-50 gy-3 ">
                  <div className="col-6 ">
                    <div className="item ">
                      <h6 className="text-end">المبلغ</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6> {totalPrice} ر.س </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6 className="text-end">الضريبة</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6> {Taxes} ر.س </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6 className="text-end">المجموع</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item">
                      <h6>{totalPrice + Taxes} ر.س </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 ">
                <div className="item  text-center">
                  <button
                    className="btn btn-outline-gray rounded-pill w-lg-50  "
                       name="intent"
                      value="save"
                    onClick={() => submit()}
                   
                  >
                    {i18next.t("BuyAgreement")}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AgreementForm;
