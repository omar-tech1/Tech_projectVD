const lessons = [
  {
    id: "cs-intro",
    title: "ما هي علوم الحاسوب؟",
    duration: "14 دقيقة",
    summary: "ابدأ من الفكرة الأساسية: كيف نفكّر في المشكلات ونحوّلها إلى حلول يمكن للحاسوب تنفيذها.",
    questions: [
      {
        prompt: "ما المجال الأساسي الذي تدرسه علوم الحاسوب؟",
        choices: ["طرق حل المشكلات ومعالجة المعلومات باستخدام الحاسوب", "تصميم الأجهزة الإلكترونية فقط", "استخدام برامج المكتب فقط", "إصلاح أعطال الإنترنت"],
        correct: 0,
        explanation: "تدرس علوم الحاسوب طرق تمثيل المعلومات ومعالجتها وبناء حلول للمشكلات."
      },
      {
        prompt: "ما المقصود بالخوارزمية؟",
        choices: ["مجموعة خطوات مرتبة لحل مشكلة", "نوع من وحدات التخزين", "لغة طبيعية فقط", "قطعة من الشاشة"],
        correct: 0,
        explanation: "الخوارزمية تسلسل واضح ومنظم من الخطوات للوصول إلى نتيجة."
      },
      {
        prompt: "أي وصف يوضح أن علوم الحاسوب أوسع من كتابة الكود؟",
        choices: ["تشمل تحليل المشكلة وتصميم الحل واختباره، وليس كتابة الكود فقط", "تعني استخدام لوحة المفاتيح", "تقتصر على الألعاب", "تعني شراء حاسوب"],
        correct: 0,
        explanation: "كتابة الكود جزء من العملية؛ التفكير والتصميم والاختبار أجزاء أساسية أيضًا."
      },
      {
        prompt: "ما الترتيب الشائع لمعالجة البيانات في الحاسوب؟",
        choices: ["مدخلات ثم معالجة ثم مخرجات", "مخرجات ثم مدخلات ثم حذف", "معالجة ثم إيقاف دائم", "تخزين فقط"],
        correct: 0,
        explanation: "يستقبل الحاسوب البيانات، يعالجها وفق التعليمات، ثم ينتج مخرجات."
      },
      {
        prompt: "ما فائدة التجريد (Abstraction)؟",
        choices: ["إخفاء التفاصيل غير الضرورية والتركيز على المهم", "زيادة تعقيد المشكلة", "حذف الحل", "تحويل الحاسوب إلى شبكة"],
        correct: 0,
        explanation: "يساعد التجريد على التعامل مع الفكرة المهمة دون الانشغال بكل التفاصيل."
      },
      {
        prompt: "ما الخطوة المناسبة قبل البدء بكتابة برنامج لحل مشكلة؟",
        choices: ["فهم المشكلة وتحديد المطلوب", "اختيار لون الشاشة", "إغلاق الحاسوب", "حذف البيانات"],
        correct: 0,
        explanation: "فهم المشكلة يوضح ما الذي ينبغي للحل أن يحققه."
      },
      {
        prompt: "ما المقصود بتصحيح الأخطاء (Debugging)؟",
        choices: ["اكتشاف الأخطاء في الحل أو البرنامج وإصلاحها", "زيادة سرعة الإنترنت", "نسخ البرنامج دون فحص", "تغيير اسم الملف فقط"],
        correct: 0,
        explanation: "تصحيح الأخطاء يعني تحديد سبب الخلل ثم إصلاحه والتحقق من الحل."
      },
      {
        prompt: "أي خاصية مهمة في الخوارزمية الجيدة؟",
        choices: ["خطوات واضحة ومنتهية وتوصل إلى نتيجة", "خطوات غير محددة بلا نهاية", "تعتمد على التخمين دائمًا", "لا تحتاج إلى مدخلات أو نتيجة"],
        correct: 0,
        explanation: "ينبغي أن تكون خطوات الخوارزمية واضحة وأن تنتهي بنتيجة."
      },
      {
        prompt: "كيف يتعامل الحاسوب مع المعلومات في النهاية؟",
        choices: ["يمثلها ويعالجها وفق تعليمات", "يفهمها كإنسان دون تعليمات", "يعالج النصوص فقط", "لا يخزن أي معلومات"],
        correct: 0,
        explanation: "يمثل الحاسوب المعلومات بصيغ مناسبة ويعالجها باتباع التعليمات."
      },
      {
        prompt: "أي مما يلي مثال على التفكير الحاسوبي؟",
        choices: ["تقسيم مشكلة كبيرة إلى أجزاء أصغر قابلة للحل", "تجاهل المشكلة", "تكرار الخطأ دون تحليل", "تغيير السؤال"],
        correct: 0,
        explanation: "تفكيك المشكلة إلى أجزاء أصغر يجعل فهمها وحلها أسهل."
      }
    ]
  },
  {
    id: "binary",
    title: "النظام الثنائي",
    duration: "7 دقائق",
    summary: "تعرّف إلى اللغة الأساسية التي تستخدمها الحواسيب لتمثيل الأعداد والبيانات.",
    questions: [
      {
        prompt: "ما الرمزان المستخدمان في النظام الثنائي؟",
        choices: ["0 و1", "1 و2", "0 إلى 9", "A وB"],
        correct: 0,
        explanation: "يعتمد النظام الثنائي على رمزين فقط: الصفر والواحد."
      },
      {
        prompt: "كم قيمة خانة واحدة (bit)؟",
        choices: ["0 أو 1", "من 0 إلى 9", "حرف كامل دائمًا", "ثمانية أرقام عشرية"],
        correct: 0,
        explanation: "يمثل البِت حالة واحدة من حالتين: 0 أو 1."
      },
      {
        prompt: "كم بتًا يتكوّن منها البايت الواحد؟",
        choices: ["8", "2", "10", "16"],
        correct: 0,
        explanation: "يتكوّن البايت الواحد من ثمانية بِتّات."
      },
      {
        prompt: "ما قيمة الخانات الثنائية من اليمين إلى اليسار؟",
        choices: ["1 ثم 2 ثم 4 ثم 8", "1 ثم 10 ثم 100 ثم 1000", "2 ثم 3 ثم 4 ثم 5", "8 ثم 6 ثم 4 ثم 2"],
        correct: 0,
        explanation: "تتضاعف قيمة كل خانة عند الانتقال إلى اليسار: 1، ثم 2، ثم 4، ثم 8."
      },
      {
        prompt: "ما القيمة العشرية للعدد الثنائي 1010؟",
        choices: ["10", "8", "12", "14"],
        correct: 0,
        explanation: "في 1010 نجمع قيم الخانات التي تحتوي على 1: 8 + 2 = 10."
      },
      {
        prompt: "ما القيمة العشرية للعدد الثنائي 1101؟",
        choices: ["13", "11", "9", "15"],
        correct: 0,
        explanation: "نجمع قيم الخانات النشطة: 8 + 4 + 1 = 13."
      },
      {
        prompt: "كيف يُكتب العدد العشري 5 بالنظام الثنائي؟",
        choices: ["101", "110", "100", "111"],
        correct: 0,
        explanation: "يمثّل العدد 5 مجموع خانتي 4 و1، لذلك يكتب 101."
      },
      {
        prompt: "لماذا يناسب النظام الثنائي الدوائر الرقمية؟",
        choices: ["لأنه يعبّر عن حالتين واضحتين مثل تشغيل وإيقاف", "لأنه يستخدم عشرة رموز", "لأنه لا يحتاج إلى كهرباء", "لأنه يمنع تخزين البيانات"],
        correct: 0,
        explanation: "يمكن تمثيل 0 و1 بحالتين كهربائيتين واضحتين في الدوائر."
      },
      {
        prompt: "ما القيمة العشرية للعدد الثنائي 10000؟",
        choices: ["16", "8", "10", "32"],
        correct: 0,
        explanation: "الخانة الأولى من اليسار هنا تساوي 16، وبقية الخانات تساوي صفرًا."
      },
      {
        prompt: "أي عبارة صحيحة عن البِت؟",
        choices: ["أصغر وحدة بيانات، ويمكن أن تكون 0 أو 1", "يساوي دائمًا بايتًا كاملًا", "لا يستخدم في تمثيل البيانات", "يتكوّن من عشرة بايتات"],
        correct: 0,
        explanation: "البِت أصغر وحدة بيانات، ويأخذ إحدى القيمتين 0 أو 1."
      }
    ]
  }
];

const futureLessons = ["تمثيل البيانات", "أساسيات البرمجة", "التفكير المنطقي"];
const storageKey = "oloom-alhasoob-completed-v1";
const workspace = document.getElementById("lesson-workspace");
const roadmap = document.getElementById("roadmap-list");
const futureList = document.getElementById("future-lessons");
const roadmapNote = document.getElementById("roadmap-note");
const toast = document.getElementById("toast");
let activeLessonId = lessons[0].id;
let questionIndex = 0;
let answeredCorrectly = false;
let activeCorrectIndex = 0;
let toastTimer;

function readCompleted() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return new Set(Array.isArray(value) ? value.filter(id => lessons.some(lesson => lesson.id === id)) : []);
  } catch {
    return new Set();
  }
}

const completed = readCompleted();

function persistCompleted() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completed]));
  } catch {
    showToast("تعذّر حفظ التقدّم على هذا الجهاز.");
  }
}

function isUnlocked(lesson) {
  return lesson.id === lessons[0].id || completed.has(lessons[0].id);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3100);
}

function renderProgress() {
  const availableCount = lessons.filter(isUnlocked).length;
  const completionCount = completed.size;
  const percent = Math.round((completionCount / lessons.length) * 100);
  document.getElementById("journey-count").textContent = `${completionCount} من ${lessons.length}`;
  document.getElementById("journey-percent").textContent = `${percent}٪`;
  document.getElementById("journey-ring").style.setProperty("--progress", `${percent}%`);
  document.querySelector(".journey-count span").textContent = `${availableCount} دروس متاحة حاليًا`;
  roadmapNote.classList.toggle("is-unlocked", isUnlocked(lessons[1]));
  roadmapNote.querySelector("p").textContent = isUnlocked(lessons[1])
    ? "أحسنت. أصبح درس النظام الثنائي متاحًا لك."
    : "أجب عن أسئلة الدرس الأول بشكل صحيح لفتح درس النظام الثنائي.";
}

function icon(name) {
  const icons = {
    play: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m8 5.5 6.5 4.5L8 14.5v-9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    lock: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4.5" y="8.5" width="11" height="8" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M7 8.5V6a3 3 0 0 1 6 0v2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 10.2 3.2 3.2L15.5 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    book: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 4.5h8.5A2.5 2.5 0 0 1 15 7v9H6.5A2.5 2.5 0 0 0 4 18V4.5Zm0 0A2.5 2.5 0 0 0 1.5 7v9H10" transform="translate(2 -1)" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/></svg>',
    quiz: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 3.5h8a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 16V5A1.5 1.5 0 0 1 6 3.5Z" stroke="currentColor" stroke-width="1.4"/><path d="M7.5 7.5h5m-5 3h5m-5 3h2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    clock: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.4"/><path d="M10 6v4.2l2.7 1.7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>'
  };
  return icons[name] || "";
}

function renderRoadmap() {
  roadmap.innerHTML = lessons.map((lesson, index) => {
    const locked = !isUnlocked(lesson);
    const done = completed.has(lesson.id);
    const active = lesson.id === activeLessonId;
    const statusIcon = locked ? "lock" : done ? "check" : "play";
    const subline = locked ? "مقفل — أكمل الدرس الأول" : done ? "مكتمل" : `الدرس ${index + 1} · ١٠ أسئلة`;
    return `
      <button class="lesson-card${active ? " is-active" : ""}${locked ? " is-locked" : ""}${done ? " is-complete" : ""}" type="button" data-lesson-id="${lesson.id}" aria-label="${lesson.title}${locked ? "، مقفل" : ""}" aria-current="${active ? "step" : "false"}">
        <span class="lesson-card-icon">${icon(index === 0 ? "book" : "quiz")}</span>
        <span class="lesson-card-copy"><strong>${lesson.title}</strong><small>${subline}</small></span>
        <span class="lesson-card-status">${icon(statusIcon)}</span>
      </button>`;
  }).join("");

  futureList.innerHTML = futureLessons.map((title, index) => `
    <button class="lesson-card future-card is-locked" type="button" data-future-title="${title}">
      <span class="lesson-card-icon">${icon("lock")}</span>
      <span class="lesson-card-copy"><strong>${title}</strong><small>محتوى قادم</small></span>
      <span class="lesson-card-status">${icon("lock")}</span>
    </button>`).join("");

  roadmap.querySelectorAll("[data-lesson-id]").forEach(button => {
    button.addEventListener("click", () => {
      const lesson = lessons.find(item => item.id === button.dataset.lessonId);
      if (!isUnlocked(lesson)) {
        showToast("اجتز أسئلة الدرس الأول بشكل صحيح لفتح درس النظام الثنائي.");
        return;
      }
      selectLesson(lesson.id);
    });
  });
  futureList.querySelectorAll("[data-future-title]").forEach(button => {
    button.addEventListener("click", () => showToast("سيتوفر هذا المحتوى قريبًا"));
  });
}

function renderLesson() {
  const lesson = lessons.find(item => item.id === activeLessonId);
  const lessonNumber = lessons.indexOf(lesson) + 1;
  const done = completed.has(lesson.id);
  const videoFile = `lesson-${lessonNumber}.mp4`;
  const videoSrc = window.location.protocol === "file:"
    ? `./videos/${videoFile}`
    : `/static/videos/${videoFile}`;
  const video = `<video controls playsinline preload="metadata" aria-label="فيديو درس ${lesson.title}">
      <source src="${videoSrc}" type="video/mp4">
      متصفحك لا يدعم تشغيل فيديو MP4.
    </video>`;

  workspace.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-overline"><span class="dot"></span> الدرس ${lessonNumber} من ${lessons.length} <span aria-hidden="true">·</span> ${done ? "تم إكماله" : "الدرس الحالي"}</div>
      <div class="lesson-title-row">
        <h2>${lesson.title}</h2>
        <span class="lesson-duration">${icon("clock")} ${lesson.duration}</span>
      </div>
      <p class="lesson-summary">${lesson.summary}</p>
    </div>
    <div class="video-frame">${video}</div>
    <div class="player-caption">
      <strong>شاهد الدرس ثم اختبر فهمك</strong>
      <span>فيديو محفوظ على الجهاز</span>
    </div>
    <section class="quiz-section" id="quiz-area" aria-label="اختبار الدرس"></section>`;

  if (done) {
    renderCompletion(lesson);
  } else {
    renderQuestion(lesson);
  }
  renderRoadmap();
  renderProgress();
}

function renderQuestion(lesson) {
  const question = lesson.questions[questionIndex];
  const correctAnswer = question.choices[question.correct];
  const answerPosition = (questionIndex * 3 + lessons.indexOf(lesson)) % question.choices.length;
  const displayedChoices = question.choices.filter((_, index) => index !== question.correct);
  displayedChoices.splice(answerPosition, 0, correctAnswer);
  activeCorrectIndex = answerPosition;
  const quiz = document.getElementById("quiz-area");
  answeredCorrectly = false;
  quiz.innerHTML = `
    <div class="quiz-topline">
      <div class="quiz-heading">
        <span class="quiz-icon">${icon("quiz")}</span>
        <span><h3>تأكّد من فهمك</h3><p>اختر إجابة واحدة لكل سؤال</p></span>
      </div>
      <span class="question-count">السؤال <strong>${questionIndex + 1}</strong> من ${lesson.questions.length}</span>
    </div>
    <div class="quiz-progress" role="progressbar" aria-label="تقدّم الاختبار" aria-valuemin="0" aria-valuemax="10" aria-valuenow="${questionIndex}">
      <span style="width:${(questionIndex / lesson.questions.length) * 100}%"></span>
    </div>
    <h3 class="question-text" id="question-prompt">${question.prompt}</h3>
    <div class="answers" role="group" aria-labelledby="question-prompt">
      ${displayedChoices.map((choice, index) => `
        <button type="button" class="answer-option" data-choice="${index}">
          <span class="answer-key">${["أ", "ب", "ج", "د"][index]}</span><span>${choice}</span>
        </button>`).join("")}
    </div>
    <div class="feedback" id="answer-feedback" role="status" aria-live="polite"></div>
    <div class="quiz-actions">
      <p class="quiz-hint">أجب بشكل صحيح للانتقال إلى السؤال التالي.</p>
      <button class="button-primary button-next" id="next-question" type="button" hidden>${questionIndex === lesson.questions.length - 1 ? "إنهاء الاختبار" : "السؤال التالي"} ${icon("play")}</button>
    </div>`;

  quiz.querySelectorAll("[data-choice]").forEach(button => {
    button.addEventListener("click", () => checkAnswer(lesson, Number(button.dataset.choice), button));
  });
  document.getElementById("next-question").addEventListener("click", () => {
    if (!answeredCorrectly) return;
    if (questionIndex + 1 === lesson.questions.length) {
      completeLesson(lesson);
      return;
    }
    questionIndex += 1;
    renderQuestion(lesson);
    quiz.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function checkAnswer(lesson, selectedIndex, selectedButton) {
  if (answeredCorrectly) return;
  const question = lesson.questions[questionIndex];
  const feedback = document.getElementById("answer-feedback");
  const choices = [...document.querySelectorAll(".answer-option")];

  if (selectedIndex !== activeCorrectIndex) {
    selectedButton.classList.add("is-wrong");
    selectedButton.setAttribute("aria-pressed", "true");
    feedback.className = "feedback is-visible is-error";
    feedback.innerHTML = `<span class="feedback-mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="m4 4 8 8m0-8-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span><span>ليست هذه الإجابة. جرّب مرة أخرى وفكّر في الفكرة الأساسية.</span>`;
    window.setTimeout(() => {
      selectedButton.classList.remove("is-wrong");
      selectedButton.removeAttribute("aria-pressed");
    }, 850);
    return;
  }

  answeredCorrectly = true;
  selectedButton.classList.add("is-correct");
  selectedButton.setAttribute("aria-pressed", "true");
  choices.forEach(button => { button.disabled = true; });
  feedback.className = "feedback is-visible is-success";
  feedback.innerHTML = `<span class="feedback-mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="m3.2 8.2 3.1 3.1 6.5-6.7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span>إجابة صحيحة. ${question.explanation}</span>`;
  document.getElementById("next-question").hidden = false;
  document.querySelector(".quiz-hint").textContent = "أحسنت، أصبحت الفكرة أوضح.";
  const progress = document.querySelector(".quiz-progress");
  progress.setAttribute("aria-valuenow", String(questionIndex + 1));
  progress.querySelector("span").style.width = `${((questionIndex + 1) / lesson.questions.length) * 100}%`;
}

function completeLesson(lesson) {
  completed.add(lesson.id);
  persistCompleted();
  renderProgress();
  renderRoadmap();
  renderCompletion(lesson);
}

function renderCompletion(lesson) {
  const lessonNumber = lessons.indexOf(lesson) + 1;
  const nextLesson = lessons[lessonNumber];
  const quiz = document.getElementById("quiz-area");
  if (!quiz) return;
  quiz.innerHTML = `
    <div class="completion-card">
      <span class="completion-seal">${icon("check")}</span>
      <h3>${lesson.id === lessons[0].id ? "اجتزت الدرس الأول." : "أتممت هذا الدرس."}</h3>
      <p>${lesson.id === lessons[0].id ? "فهمك لأساسيات علوم الحاسوب فتح لك الخطوة التالية." : "كل إجابة صحيحة أضافت فكرة جديدة إلى مسارك."}</p>
      <div class="completion-actions">
        ${nextLesson ? `<button class="button-primary button-next" id="open-next-lesson" type="button">انتقل إلى ${nextLesson.title} ${icon("play")}</button>` : ""}
        <button class="button-secondary" id="retry-quiz" type="button">أعد الاختبار</button>
      </div>
    </div>`;
  const nextButton = document.getElementById("open-next-lesson");
  if (nextButton) nextButton.addEventListener("click", () => selectLesson(nextLesson.id));
  document.getElementById("retry-quiz").addEventListener("click", () => {
    questionIndex = 0;
    renderQuestion(lesson);
    document.getElementById("quiz-area").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function selectLesson(id) {
  activeLessonId = id;
  questionIndex = 0;
  renderLesson();
  document.getElementById("lesson-workspace").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.getElementById("start-learning").addEventListener("click", () => {
  if (completed.has(lessons[0].id)) {
    selectLesson(isUnlocked(lessons[1]) ? lessons[1].id : lessons[0].id);
  } else {
    selectLesson(lessons[0].id);
  }
});

renderLesson();
