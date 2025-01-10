let currentQuestion = 0;
let score = 0;
let AgeInput = 0;


const questions = [
  {
    question: "1. เลขต่อไปในลำดับนี้คืออะไร: 2, 4, 8, 16, __?",
    answers: ["32", "24", "64", "48"],
    correctAnswer: 0
  },
  {
    question: "ข้อ 2: 5 - 3 เท่ากับเท่าไหร่?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 1
  },
  {
    question: "ข้อ 3: เลขในข้อใดที่ไม่เหมือนกับเลขอื่น: 3, 5, 9, 12?",
    answers: ["3", "5", "9", "12"],
    correctAnswer: 3
  },
  {
    question: "ข้อ 4: 'Mary is 30 years old, Tom is half her age. How old is Tom?' (Tom อายุเท่าไหร่)",
    answers: ["15", "14", "20", "10"],
    correctAnswer: 0
  },
  {
    question: "ข้อ 5: หาคำที่ไม่เหมือนกันในกลุ่มนี้: น้ำ, แก้ว, ร่ม, ฟ้าผ่า",
    answers: ["น้ำ", "แก้ว", "ร่ม", "ฟ้าผ่า"],
    correctAnswer: 3
  },
  {
    question: "ข้อ 6: 8, 6, 4, 2, __? (เลขที่หายไปคืออะไร?)",
    answers: ["0", "1", "3", "5"],
    correctAnswer: 0
  },
  {
    question: "ข้อ 7: 'Find the missing number: 3, 6, 9, 12, __?'",
    answers: ["14", "15", "13", "11"],
    correctAnswer: 1
  },
  {
    question: "ข้อ 8: คำว่า 'Human' อะไรเป็นคำตรงข้ามที่ดีที่สุดในกลุ่มนี้: Robot, Person, Alien, Animal",
    answers: ["Robot", "Alien", "Person", "Animal"],
    correctAnswer: 1
  },
  {
    question: "ข้อ 9: การหมุนภาพตามเข็มนาฬิกาหรือทวนเข็มนาฬิกาจะทำให้คุณเห็นรูปแบบใดจากตัวเลือกนี้?",
    answers: ["การหมุน 90 องศา", "การหมุน 180 องศา", "การหมุน 45 องศา", "การหมุน 360 องศา"],
    correctAnswer: 1
  },
  {
    question: "ข้อ 10: หาคำที่ไม่เหมือนจากชุดคำต่อไปนี้: สุนัข, เสือ, แมว, กุ้ง",
    answers: ["สุนัข", "เสือ", "แมว", "กุ้ง"],
    correctAnswer: 3
  },
  {
    question: "ข้อ 11: จำนวนที่หายไป: 7, 11, 15, __, 23",
    answers: ["17", "18", "19", "20"],
    correctAnswer: 0
  },
  {
    question: "ข้อ 12: เลขในข้อใดที่หายไป: 2, 4, 8, 16, __",
    answers: ["18", "24", "32", "64"],
    correctAnswer: 2
  },
  {
    question: "ข้อ 13: ลำดับนี้เป็นการเพิ่มขึ้นของการคูณหรือการบวก? 1, 2, 4, 8, 16, 32",
    answers: ["คูณ 2", "บวก 2", "คูณ 3", "บวก 4"],
    correctAnswer: 0
  },
  {
    question: "ข้อ 14: ถ้า A = 1, B = 2, C = 3, D = 4, แล้ว Z เท่ากับ?",
    answers: ["26", "25", "30", "27"],
    correctAnswer: 0
  },
  {
    question: "ข้อ 15: หาคำที่ไม่เหมือน: โต๊ะ, เก้าอี้, พัดลม, หมวก",
    answers: ["โต๊ะ", "เก้าอี้", "พัดลม", "หมวก"],
    correctAnswer: 3
  },
  {
    question: "ข้อ 16: จากตัวเลขต่อไปนี้: 5, 10, 20, 40, 80, __?",
    answers: ["100", "160", "120", "90"],
    correctAnswer: 1
  },
  {
    question: "ข้อ 17: หาก 3 คนทำงานได้ใน 6 วัน, กี่วันจะทำงานเสร็จหากมี 6 คนทำงาน?",
    answers: ["3 วัน", "1 วัน", "2 วัน", "6 วัน"],
    correctAnswer: 0
  },
  {
    question: "ข้อ 18: เลือกคำที่มีความหมายตรงข้ามกับ 'ปกติ': พิเศษ, แปลก, ทั่วไป, เสียหาย",
    answers: ["พิเศษ", "แปลก", "ทั่วไป", "เสียหาย"],
    correctAnswer: 1
  },
  {
    question: "ข้อ 19: ข้อใดในนี้แสดงถึงการวัดความยาว?",
    answers: ["กิโลกรัม", "เซลเซียส", "เมตร", "ลิตร"],
    correctAnswer: 2
  },
  {
    question: "ข้อ 20: 15 + 3 * 2 = ?",
    answers: ["21", "23", "18", "20"],
    correctAnswer: 0
  }
];

function calculateIQ(mentalAge, chronologicalAge) {
  if (chronologicalAge === 0) {
      return "อายุจริงไม่สามารถเป็น 0 ได้";
  }
  let iq = (mentalAge / chronologicalAge) * 100;
  return iq;
}
function submitAge(){
  let Age = document.getElementById("AgeInput")
  AgeInput = Age.value;
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById("AgeInput").style.display='none';
  document.getElementById("submitAge").style.display='none'
  let IQresult = calculateIQ(score,AgeInput)
  document.getElementById('score').style.display = 'block';
      document.getElementById('scoretext').style.display = 'block';
      document.getElementById("restartButton").style.display='block'
  document.getElementById('score').textContent = IQresult.toFixed(0);
}
function loadQuestion() {
  if (currentQuestion < questions.length) {
    document.getElementById('question').textContent = questions[currentQuestion].question;
    const answers = document.getElementById('answers');
    answers.innerHTML = '';
    questions[currentQuestion].answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.onclick = () => answerQuestion(index);
      answers.appendChild(button);
    });
  } else {
    if(AgeInput==0){
      document.getElementById('question-container').style.display = 'none';
      document.getElementById('score').style.display = 'none';
      document.getElementById('scoretext').style.display = 'none';
      document.getElementById("restartButton").style.display='none'
      document.getElementById('result-container').style.display = 'block'
    }
  }
}

function answerQuestion(answerIndex) {

  if (currentQuestion < questions.length) {
    
    const currentQuestionData = questions[currentQuestion];
    
    if (currentQuestionData && answerIndex === currentQuestionData.correctAnswer) {
      score++;
    }
    currentQuestion++;
    loadQuestion();
  } else {
    console.error('currentQuestion เกินขอบเขตของอาร์เรย์ questions');
  }
}


function restartTest() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('result-container').style.display = 'none';
  document.getElementById('question-container').style.display = 'block';
  loadQuestion();
}

loadQuestion();
