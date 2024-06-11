import { Field, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import $ from 'jquery';
import i18next from "i18next";
import { langContext } from "../../Context/LangContext";
import axios from "axios";

function AgreementForm({Id}) {
  const { Lang, setLang } = useContext(langContext);
  console.log(Id);
  const [responsibilities, setresponsibilities] = useState([]);
  const [itemValue, setitemValue] = useState(null);
  const [QuestionsService, setQuestionsService] = useState([]);

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
 async function getQuestionsService(){
  let url = `http://192.168.1.108/api/questions?lang=${Lang.toLowerCase()}&service_id=${Id}`
  console.log(url);
  let {data} = await axios.get(url,{
    headers:{'accept':'application/json'}
  })
  setQuestionsService(data)
  console.log(QuestionsService);
 }
  // function clear(){
  //   document.getElementById("inputText").value = ""
  // }
  function dd(e) {

    console.log(e.target.nextSibling);
    let dodo = e.target;
    // console.log(dodo.nextSibling);
    // console.log(dodo.querySelectorAll(".form-menu .dropdown-item"))
    let items = Array.from(
      e.target.nextSibling.querySelectorAll(".dropdown-item")
    );
    console.log(items);
    items.map((e, i) =>
      e.addEventListener("click", function (e) {
        // console.log(e.target.innerHTML)
        setitemValue(e.target.innerHTML);
        dodo.innerHTML = e.target.innerHTML;
        // console.log(itemValue);
      })
    );
    // console.log(valueSelect);
    // map(()=>{

    // })
    // );
  }
  function submit() {
   
    Swal.fire({
      showCloseButton: true,

      title: "تأكيد الاتفاقية",
      confirmButtonText:"تأكيد",

      html: `
         <div className="payment-modal">
            <div>
              <h4 className="fw-bold">بيانات شخصية</h4>
              <h6>: الاسم بالكامل  </h6>
              <p> احمد محمد محمد</p>
              <h6>: البريد الأكتروني  </h6>
              <p>ِAhmed@gmail.com</p>
              <h6> الجنس </h6>
              <p>ذكر</p>
              <h6>رقم الجوال</h6>
              <p>8484848484848484 </p>
            </div>
            <div>
              <h4>الاتفاقية</h4>
              <h6>: الاسم الاتفاقية  </h6>
              <p> سياسة الخدمة</p> 
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <h6>اللغة</h6>
                      <p>لغه عربية</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <h6> الدولة </h6>

                      <p> السعوديه </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <h6> شركة ام مؤسسة </h6>

                      <p> شركة </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <h6> ملتقي الاتفاقية </h6>

                      <p> شركة </p>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div>
                      <h6> وصف الذي تتعاون في القيام به </h6>

                      <p>
                        ....
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <h6> الارباح </h6>

                      <p> مشتركة </p>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div>
                      <h6> وصف الذي تتعاون في القيام به </h6>

                      <p>
                        ....
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div>
                      <h6> مسؤليات متلقي التعاون </h6>

                      <p>
                        .....
                      </p>
                      
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div>
                      <h6> البريد الالكتروني المتلقي للاتفاقية </h6>

                      <p> Name@example.com </p>
                    </div>
                  </div>
                  <hr />
                  
              </div>
            </div>
            <table >
               <tr>
                <td>  <h6 className="text-end">500 ر.س</h6></td>
                                <td>  <h6 className="text-end">المبلغ</h6></td>

               </tr>
               <tr>
                <td>  <h6 className="text-end">500 ر.س</h6></td>
                                <td>  <h6 className="text-end">الضريبه</h6></td>

               </tr>
               <tr>
                <td>  <h6 className="text-end">500 ر.س</h6></td>
                                <td>  <h6 className="text-end">المجموع</h6></td>

               </tr>
            </table>
          </div>


    `,
    // width:'150px',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal({
          title: 'Multiple inputs',
          html:
            '<input id="swal-input1" class="swal2-input">' +
            '<input id="swal-input2" class="swal2-input">',
          preConfirm: function () {
            return new Promise(function (resolve) {
              resolve([
                $('#swal-input1').val(),
                $('#swal-input2').val()
              ])
            })
          },
          onOpen: function () {
            $('#swal-input1').focus()
          }
        }).then(function (result) {
          Swal.fire(JSON.stringify(result))
        }).catch(Swal.noop)
        // if (email) {
        //   Swal.fire(`Entered email: ${email}`);
        // }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });;
  }
  useEffect(() => {
    getQuestionsService()
  }, [Lang,Id])
  return (
    <>
  
      {/* <h6 className="">بيانات شخصية</h6> */}
      {/* <Formik
       initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     ></Formik> */}
      <section className="mb-5 " id="ArForm">
        <div className="container shadow p-5">
       
         
          {/* <form action=""> */}
          <div className="row  g-md-5 gy-5">
            {QuestionsService?.map((ele,i)=>   
            // {ele.question.answers}
            <div className="col-md-12" key={i}>
            <div className="item">
              <label htmlFor="lang "> {ele.question.name}</label>
              {ele?.question?.answers[0].type =="select" ? 

               <div class="dropdown">
                 <a
                   onClick={(e) => dd(e)}
                   class="btn btn-secondary dropdown-toggle btn btn-outline-form rounded-pill bg-transparent "
                   href="#"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                 >
                  {i18next.t("chose")}
                  
                 </a>
 
                 <ul class="dropdown-menu form-menu">
                  {(ele?.question?.answers).map((q,i)=> 
                    (q.options).map((qq,i)=><li key={i}>
                    <a class="dropdown-item">{qq.name_ar}</a>
                    {/* <span className="ps-5 d-none">{q.description}</span> */}
                  </li>)
                  )}
                   
                 </ul>
                 </div>
              
              :
              (ele?.question?.answers).map((q,i)=> <input key={i} type={q.type} className="form-control" name={ele.question.answers.input_name} /> )
              }
              {/* {(ele?.question?.answers[0]).map((qq,i)=><> */}
               
                {/* {qq.type  =="select"?
                 <div class="dropdown">
                 <a
                   onClick={(e) => dd(e)}
                   class="btn btn-secondary dropdown-toggle btn btn-outline-form rounded-pill bg-transparent "
                   href="#"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                 >
                  {i18next.t("chose")}
                  
                 </a>
 
                 <ul class="dropdown-menu form-menu">
                    <li>
                     <a class="dropdown-item">{qq.name}</a>
                     <span className="ps-5 d-none">{qq.description}</span>
                   </li>
                 </ul>
                 </div>
                 : 
null
                   } */}
                
                {/* </>) */}
           
              {/* } */}
            
                 
              

              
              {/* <div class="custom-select">
                  <div class="select-selected">Select an Option</div>
                  <div class="select-items">
                    <div>Select Option 1</div>
                    <div>Select Option 2</div>
                    <div>Select Option 3</div>
                  </div>
                </div>  */}

           
            </div>
          </div>
           )}
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
                  <h6> 500 ر.س </h6>
                </div>
              </div>
              <div className="col-6">
                <div className="item">
                  <h6 className="text-end">الضريبة</h6>
                </div>
              </div>
              <div className="col-6">
                <div className="item">
                  <h6> 500 ر.س </h6>
                </div>
              </div>
              <div className="col-6">
                <div className="item">
                  <h6 className="text-end">المجموع</h6>
                </div>
              </div>
              <div className="col-6">
                <div className="item">
                  <h6> 500 ر.س </h6>
                </div>
              </div>
            </div></div> 
           
            <div className="col-md-12 ">
              <div className="item  text-center">
                <button
                  className="btn btn-outline-gray rounded-pill w-lg-50  "
                  onClick={() => submit()}
                >
                  {i18next.t('BuyAgreement')}
                </button>
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      </section>
    </>
  );
}

export default AgreementForm;
