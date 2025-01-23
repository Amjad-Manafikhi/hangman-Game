import React from "react";

const words = [
    { player: "messi", hint: "أفضل لاعب في العالم والأكثر تتويجًا بالكرة الذهبية" },
    { player: "ronaldo", hint: "هداف تاريخي ورياضي مشهور عالميًا" },
    { player: "zidane", hint: "لاعب أسطوري فرنسي ومدرب ناجح" },
    { player: "neymar", hint: "نجم برازيلي معروف بمهاراته الرائعة" },
    { player: "pele", hint: "أسطورة كرة القدم البرازيلية وأحد أفضل اللاعبين في التاريخ" },
    { player: "maradona", hint: "نجم الأرجنتين وأحد أعظم لاعبي كرة القدم في التاريخ" },
    { player: "ronaldinho", hint: "ساحر كرة القدم البرازيلي وصاحب الابتسامة الدائمة" },
    { player: "mbappe", hint: "نجم فرنسي شاب وسريع للغاية" },
    { player: "lewandowski", hint: "هداف بولندي متميز في تسجيل الأهداف" },
    { player: "henry", hint: "أحد أعظم المهاجمين في تاريخ فرنسا وأرسنال" },
    { player: "iniesta", hint: "مايسترو وسط برشلونة وصاحب هدف كأس العالم 2010" },
    { player: "xavi", hint: "أسطورة خط الوسط وقائد برشلونة السابق" },
    { player: "modric", hint: "نجم كرواتي وفائز بالكرة الذهبية عام 2018" },
    { player: "zlatan", hint: "لاعب سويدي يمتاز بالقوة والثقة بالنفس" },
    { player: "ramos", hint: "مدافع إسباني مشهور بقيادته وشراسته" },
    { player: "salah", hint: "نجم مصري وأيقونة ليفربول" },
    { player: "kaka", hint: "لاعب برازيلي أنيق وفائز بالكرة الذهبية 2007" },
    { player: "beckham", hint: "لاعب إنجليزي مشهور بتمريراته الدقيقة وضرباته الحرة" },
    { player: "buffon", hint: "حارس إيطالي أسطوري" },
    { player: "ronaldo nazario", hint: "أسطورة برازيلية ويُعتبر من أفضل المهاجمين في التاريخ" }
  ];
  
  
  


export default function chooseRandom() {

  // Correct random selection
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];

  return randomWord;
}
