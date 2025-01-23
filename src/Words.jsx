import React from "react";

const words = [
    { word: "messi", hint: "أفضل لاعب في العالم والأكثر تتويجًا بالكرة الذهبية" },
    { word: "ronaldo", hint: "هداف تاريخي ورياضي مشهور عالميًا" },
    { word: "zidane", hint: "لاعب أسطوري فرنسي ومدرب ناجح" },
    { word: "neymar", hint: "نجم برازيلي معروف بمهاراته الرائعة" },
    { word: "pele", hint: "أسطورة كرة القدم البرازيلية وأحد أفضل اللاعبين في التاريخ" },
    { word: "maradona", hint: "نجم الأرجنتين وأحد أعظم لاعبي كرة القدم في التاريخ" },
    { word: "ronaldinho", hint: "ساحر كرة القدم البرازيلي وصاحب الابتسامة الدائمة" },
    { word: "mbappe", hint: "نجم فرنسي شاب وسريع للغاية" },
    { word: "lewandowski", hint: "هداف بولندي متميز في تسجيل الأهداف" },
    { word: "henry", hint: "أحد أعظم المهاجمين في تاريخ فرنسا وأرسنال" },
    { word: "iniesta", hint: "مايسترو وسط برشلونة وصاحب هدف كأس العالم 2010" },
    { word: "xavi", hint: "أسطورة خط الوسط وقائد برشلونة السابق" },
    { word: "modric", hint: "نجم كرواتي وفائز بالكرة الذهبية عام 2018" },
    { word: "zlatan", hint: "لاعب سويدي يمتاز بالقوة والثقة بالنفس" },
    { word: "ramos", hint: "مدافع إسباني مشهور بقيادته وشراسته" },
    { word: "salah", hint: "نجم مصري وأيقونة ليفربول" },
    { word: "kaka", hint: "لاعب برازيلي أنيق وفائز بالكرة الذهبية 2007" },
    { word: "beckham", hint: "لاعب إنجليزي مشهور بتمريراته الدقيقة وضرباته الحرة" },
    { word: "buffon", hint: "حارس إيطالي أسطوري" },
    { word: "ronaldo nazario", hint: "أسطورة برازيلية ويُعتبر من أفضل المهاجمين في التاريخ" }
  ];
  
  
  


export default function chooseRandom() {

  // Correct random selection
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];

  return randomWord;
}
