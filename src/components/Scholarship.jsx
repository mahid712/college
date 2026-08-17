import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScholarshipNavbar from './ScholarshipNavbar';
import '../scss/Scholarship.scss';

const scholarshipsAndPrizesData = {
  scholarships: [
    {
      name: "CV Raman Scholarship",
      authority: "Dept of Collegiate Education (www.dce.kar.nic.in)",
      eligibility: "Students who have passed with very high marks in the II year PUC examination & pursuing their B.Sc course with any two of the following basic science subjects: 1) Physics, 2) Chemistry, 3) Mathematics, 4) Statistics, 5) Botany, 6) Zoology",
      amount: "Rs. 5,000/- per year"
    },
    {
      name: "INSPIRE-Scholarship",
      authority: "Dept of Science and Technology (www.online-inspire.gov.in)",
      eligibility: "Students who have passed with very high marks in the II year PUC examination & pursuing their B.Sc course in basic science subjects: 1) Physics, 2) Chemistry, 3) Mathematics, 4) Statistics, 5) Biology. Must apply through the web portal (open normally from Aug to Oct).",
      amount: "Rs. 60,000 + Rs. 20,000 for project per year"
    },
    {
      name: "KSTA (Karnataka Science & Technology Academy) Fellowship",
      authority: "KSTA (http://www.kstacademy.org/)",
      eligibility: "Students who have passed with very high marks in the II year PUC examination & pursuing their B.Sc course with any two of the following basic Science subjects: 1) Physics, 2) Chemistry, 3) Mathematics, 4) Botany, 5) Zoology",
      amount: "Rs. 10,000/- per year"
    },
    {
      name: "Sanchi Honnamma Scholarship",
      authority: "Dept of Collegiate Education",
      eligibility: "Meant for girl students studying in Degree courses. General merit min. of 50%, SC/ST 45% marks needed in previous exam. Should pass all semester exams in first attempt at degree level.",
      amount: "Rs. 2,00,0/- per year"
    },
    {
      name: "Educational Concession to Children of Service Personnel",
      authority: "Army, Air Force & Navy (PU & Degree)",
      eligibility: "To the children of Service Personnel",
      amount: "Tuition Fee, Lab Fee, Examination Fee and other Fees will be refunded."
    },
    {
      name: "Educational Concession to Children of Ex-Servicemen",
      authority: "Army, Air Force & Navy (PU & Degree)",
      eligibility: "To the children of Ex-Servicemen",
      amount: "Tuition Fee, Lab Fee, Examination Fee and other Fees will be refunded."
    },
    {
      name: "Beedi Workers Scholarship",
      authority: "For both PU & Degree",
      eligibility: "Children of Beedi workers whose family income does not exceed Rs. 10,000 per month and not receiving any other scholarship.",
      amount: "-"
    },
    {
      name: "Govt. of India National Merit Scholarship",
      authority: "Govt. of India",
      eligibility: "Selection on merit basis (marks above 80% in qualifying exams for freshers and 50% for renewal). Income should be Rs. 25,000 or below per year.",
      amount: "For PUC and I degree: Rs. 720 per year; For II and III year degree: Rs. 1,080 per year"
    },
    {
      name: "Govt. of India, Rashtriya Sanskrit Sansthan, Samskrita Scholarship",
      authority: "Govt. of India",
      eligibility: "For Ist Degree student, selection on merit basis (min. 75% in Sanskrit and 75% total in II PUC).",
      amount: "Rs. 1,750/- per year"
    },
    {
      name: "Govt. Scholarships for study in English/Kannada as major subjects",
      authority: "Degree Level",
      eligibility: "Students who have secured highest marks in the concerned relevant subject at the pre-university annual examination. Extended to II and III year only if the student passes the sem-exam in the first attempt.",
      amount: "Rs. 600/- per year"
    },
    {
      name: "Govt. of India, Hindi Scholarship",
      authority: "Students of Non-Hindi speaking state",
      eligibility: "Selection on merit basis (Marks above 80% in Hindi and 80% in aggregate in II PUC Examination).",
      amount: "I Degree: Rs. 600 per year | II Degree: Rs. 900 per year"
    },
    {
      name: "Govt. Scholarship to the Differently Abled Students",
      authority: "For both PU and Degree",
      eligibility: "Studied in Karnataka for at least 5 years. Students who secured 80% attendance in I degree are eligible for II degree. No income limit.",
      amount: "-"
    },
    {
      name: "Minority Scholarship (Christians & Muslims) / BCM / BCT",
      authority: "For both PU and degree",
      eligibility: "Parents'/guardians' annual income less than Rs. 2,00,000. Students should have secured 50% or above marks in previous exam. Income & Caste certificate issued by Tahsildar is necessary.",
      amount: "-"
    },
    {
      name: "SC/ST Scholarship",
      authority: "For both PU & Degree",
      eligibility: "To SC/ST students. Income limit of parent Rs. 2,50,000/- p.a.",
      amount: "-"
    },
    {
      name: "LIC Golden Jubilee Scholarship",
      authority: "LIC (www.licindia.in/GJF_scholorship.htm)",
      eligibility: "Students who passed II PUC and pursuing graduation in any discipline. Min marks in II PUC is 60%. Annual income not to exceed Rs. 1,00,000/- per annum.",
      amount: "Rs. 10,000/- per annum (payable in 10 monthly installments of Rs. 1,000/- each)"
    },
    {
      name: "M.H.R.D Scholarship",
      authority: "pue.kar.nic.in",
      eligibility: "Students who secured above 80% marks in II PUC and pursuing graduation in any discipline. Annual income not to exceed Rs. 4,50,000/- per annum.",
      amount: "Rs. 10,000/- per annum"
    },
    {
      name: "Rajiv Gandhi Loan Scholarship",
      authority: "Government / Bank",
      eligibility: "Economically weak and backward class students, family annual income less than Rs. 2.5 lakhs. Income certificate issued by Tahsildar is necessary.",
      amount: "Rs. 60,000 per year for 3 years (Total: Rs. 1,80,000/-)"
    }
  ],
  prizesAndEndowments: [
    { slNo: 1, name: "The Late Sir Krishna R. Haldipurkar scholarship", donor: "Directors of Syndicate Bank, Udupi", target: "To the best student in II P.U.C whose subject is Commerce (present student of II P.U.C based on I P.U.C marks)" },
    { slNo: 2, name: "Sri. T.A. Pai Book Scholarship", donor: "Sri. T.A. Pai", target: "To assist a deserving student to buy books" },
    { slNo: 3, name: "Sri. M. Vittal Kamath Memorial Scholarship", donor: "Sri. M.V. Kamath, Bombay", target: "To a financially poor student in Degree class to be continued for 3 years if not detained." },
    { slNo: 4, name: "Late Sri Aroor Laxminarayana Rao Scholarship", donor: "Late Sri A.L.N Rao, Udupi", target: "To a deserving student of Shivalli Brahmin Community in PUC to be continue in succeeding years if not detained" },
    { slNo: 5, name: "The M.G.M Co-operative Store Ltd. Scholarships", donor: "M.G.M College Co-operative Store", target: "To poor and deserving students of any class in the college." },
    { slNo: 6, name: "H.H. Sri Vishnuthirtha Memorial Scholarship", donor: "H.H. Sri Vishnuthirtha swamier of Sri Sode Vadiraja Mutt, Udupi", target: "To a deserving student of the Degree Class" },
    { slNo: 7, name: "Sri. Vadiraja Memorial Proficiency Prizes", donor: "H.H. Sri Vishnuthirtha swamier of Sri Sode Vadiraja Mutt, Udupi", target: "Awarded on the basis of proficiency in Preparatory Examinations." },
    { slNo: 8, name: "The Late Sir. P.A. Pai Memorial Scholarships", donor: "Sri. U.R. Rao", target: "To deserving student/students of the College" },
    { slNo: 9, name: "The Aravinda Motors Private Ltd. Scholarships", donor: "Directores of Aravinda Motors Private Ltd.", target: "To a deserving PUC student continued for succeeding years if not detained." },
    { slNo: 10, name: "The Shankar Vittal Motor Co. Ltd. Scholarships", donor: "Shankar Vittal Co. Ltd.", target: "To a deserving student in the College" },
    { slNo: 11, name: "The Shankar Vital Motor Company (Private) Ltd., Scholarship", donor: "The Shankar Vittal Motor Company Ltd.", target: "To a deserving student of the I year B.Com class of the college" },
    { slNo: 12, name: "The Shanker Vittal Motor company (Private) Ltd. Scholarship", donor: "The Shanker Vittal Motor company (Private) Ltd.", target: "To a deserving student of the I year Degree class." },
    { slNo: 13, name: "L.I.C of India Employees Committee Scholarship", donor: "Employees of L.I.C of India Udupi", target: "To a deserving student in the college" },
    { slNo: 14, name: "Late Sri. K.R.K Bhat Scholarship", donor: "Late Sri. K.R.K Bhat", target: "To a poor deserving student of the college" },
    { slNo: 15, name: "Smt. Asha K.R.K Bhat", donor: "Late Sri K.R.K Bhat", target: "To a poor deserving girl student of the College" },
    { slNo: 16, name: "Smt. Asha K.R.K Bhatspecial Scholarship", donor: "The College Trust", target: "To provide free Mid-day lunch in health kitchen of Mid-Day meals club(girl student)" },
    { slNo: 17, name: "Late Sri Pejawara Ramanna Bhat Scholarship", donor: "The college trust Late Sri K.R.K Bhat", target: "To a poor deserving Shivalli Brahmin Boy every year." },
    { slNo: 18, name: "Smt. Asha K.R.K Bhat Scholarship", donor: "Late Sri K.R.K Bhat", target: "To a poor deserving Shivalli Brahmin Girl." },
    { slNo: 19, name: "Dr. T.M.A. Pai Benevolent Trust Fund Scholarship", donor: "Dr. T.M.A. Pai", target: "To a deserving student for any charitable purpose." },
    { slNo: 20, name: "M.G.M College Old Students’ Association Music Prize", donor: "M.G.M College Old Students’ Association, Udupi", target: "To the best student taking part in the Annual College Day Music Competition" },
    { slNo: 21, name: "Rtn. Dr. P.N. srinivasa Rao Scholarship in Commemoration of 105th Eye Camp", donor: "Rotary Club of Udupi Manipal Dist. 318", target: "Awarded to the children of low paid MGM College employees or in Government or Private bodies." },
    { slNo: 22, name: "H.H. Sri Prejawara Swamier Sanskrit Prize", donor: "H.H. Sri Swamier of Prejawara Mutt, Udupi", target: "To the student who stands first in the PUC Examination in Sanskrit under Part-1 and continues his/her studies in the college." },
    { slNo: 23, name: "Late Sri Narayana Kille Memorial Prize", donor: "Late Sri. T.A. Pai, B.Com", target: "To a first year student who scores highest marks in II puc kannada" },
    { slNo: 24, name: "Manjunath Sona Kamath English Essay writing Prize", donor: "Smt. Girija Bai Vittal Kamath / Sri. M.V. Kamath", target: "To the best student in English Essay writing" },
    { slNo: 25, name: "Kochikar Moodlagiri Pai, English Elocution Prize", donor: "Smt. Girija Bai Vittal Kamath / Sri. M.V. Kamath", target: "To the best student in English Elocution" },
    { slNo: 26, name: "Parvathiamma, Kannada essay Writing Prize", donor: "Smt. Girija Bai Vittal Kamath / Sri. M.V. Kamath", target: "To the best student in Kannada Essay Writing" },
    { slNo: 27, name: "The Tulsiamma, Kannada Elocution Prize", donor: "Smt. Girija Bai Vittal Kamath / Sri. M.V. Kamath", target: "To the best student in Kannada Elocution." },
    { slNo: 28, name: "S.D. Srinivasan Mathematics Prize", donor: "Sri. S.D. Srinivasan M.A., F.I.A. (London)", target: "To the best student in PUC examination in Mathematics, who continues his/her studies in the College" },
    { slNo: 29, name: "Sri. H. Rama Rao and Mrs. H. Sita Bai Prize", donor: "Sri. H. Sundar Rao, M.A.", target: "Highest marks in Final B.A. Opt. Eng." },
    { slNo: 30, name: "Kota Govinda Prabhu Sanskrit Prize", donor: "Dr. M.V. Kamath, L.M.&S.", target: "To the best student taking part in the Annual College Day Sanskrit Recitation Competition" },
    { slNo: 31, name: "The Vittal Kamath Memorial Prize", donor: "Sri. M. Surendra Kamath and Sri Narendranath Kamath", target: "To the best outgoing student of PUC of PCMB group with Hindi under Part –1" },
    { slNo: 32, name: "Late Sri Aroor Laxminarayana rao, Kannada Prize", donor: "Late Sri Aroor Laxminarayana Rao, Udupi", target: "To a 1 year degree student who scores the highest marks in Kannada in the II PUC Examination and continues to study in the College" },
    { slNo: 33, name: "Dr. U. Sundar Ram Pai Prize", donor: "Victoria Jubilee Club", target: "To the best N.C.C Cadet of the College or alternatively to the best sportsman." },
    { slNo: 34, name: "Late Sri Kochkar Padmanabha Pai Memorial Prize", donor: "Sri. C. Sukumaran Nair, Hosdurg", target: "To a student of III Year B.Com. Degree for the best performance in the II B.Com University Examination." },
    { slNo: 35, name: "Late Rashtrakavi M.Govind Pai, Memorial Prize", donor: "Sri. Anantha Pai, Banker Manjeshwar", target: "To a student who stands first in Kannada in the II B.A Degree University Examination" },
    { slNo: 36, name: "Late Sri. P. Chandrashekar Rao Memorial Prize", donor: "Sri. P. Ramakrishna Rao", target: "To the student who stands first in the Public Examination in III B.Sc. Statistics main." },
    { slNo: 37, name: "Late Sri Srinivas Malliah Memorial Prize (Chemistry)", donor: "Lions Club of Udupi", target: "a) To a student of this College who scores highest marks in Chemistry(Opt) Subject in Final Year B.Sc. Degree Examination of Mangalore University in Preceding year." },
    { slNo: 38, name: "Late Sri Srinivas Malliah Memorial Prize (History)", donor: "Lions Club of Udupi", target: "b) To a student of this College who scores highest marks in History(Opt) Subject in Final Year B.A. Degree Examination of Mangalore University in Preceding year." },
    { slNo: 39, name: "Sujir Sovereign Tile Works Prize", donor: "M/s Sujir Sovereign Tile Works", target: "To a poor deserving student" },
    { slNo: 40, name: "Kumbla Upendra Nayak Family Trust Prize", donor: "Kumbla Upendra Nayak Family Trust", target: "To the best student of the College" },
    { slNo: 41, name: "Dr. T.M.A. Pai Gold Medal", donor: "Dr. T.M.A. Pai", target: "To the best student in the Final B.Sc. Degree Public Examination based on performance in the exam." },
    { slNo: 42, name: "Late Sri Andrade Memorial Prize", donor: "Mrs. Elias Andrade", target: "To a poor deserving student." },
    { slNo: 43, name: "Late Sri Aroor Laxminarayana rao Gold Medal for Arts", donor: "Aroor brothers for the ABC Trust", target: "To the best outgoing student of B.A. based on the performance in the Final Year Degree." },
    { slNo: 44, name: "Dr. R.L Adiga Gold Medal for Commerce", donor: "Dr. R.L. Adiga", target: "To the student who stands first in the final B.Com class judged on the performance at the Final Year Degree examination." },
    { slNo: 45, name: "Prof. K.A. Krishnamurthi Gold Medal II", donor: "Prof. K.A. Krishnamurthi felicitation Committee", target: "To the student obtaining highest marks in the Final B.Sc Major Maths in Mangalore and Udupi Districts." },
    { slNo: 46, name: "M/s Chandrana Brothers Silver Plaque", donor: "M/s Chandrana Brothers, Mangalore", target: "To the best all-round Athlete of the College during the year." },
    { slNo: 47, name: "Sri. Laxminarayana R. Bhat Fellowship Prize", donor: "Dr. R.L. Adiga", target: "To the student of the II year B.Sc. of each year on the basis of his/her performance at the II P.U.C Public Examination..." },
    { slNo: 48, name: "Laxmi Bai L. Adiga Fellowship Prize", donor: "Dr. R.L. Adiga", target: "To the student of II Year B.Sc. of each year, on the basis of his/her performance at the I B.Sc. University Examination..." },
    { slNo: 49, name: "Dr. R.L. Adiga Fellowship Prize", donor: "Dr. R.L. Adiga", target: "To the student of III Year B.Sc. of each year, on the basis of his/her performance at the II B.Sc. University Examination..." },
    { slNo: 50, name: "Smt. Beedu Laxmiamma Narayana Balla Memorial Prize", donor: "Sri Vyasaraya Ballal and Brothers", target: "To the student scoring highest marks in Sanskrit in the II B.A degree Examination every year." },
    { slNo: 51, name: "The Late Prof. H. Sunder Rao Memorial English Prize", donor: "Mrs. Hemalatha G. Kuber", target: "To the student who secures the highest marks in English at I year PUC (April every year)" },
    { slNo: 52, name: "B. Jyothi bai Memorial Prize", donor: "Sri. B. Shivashankar Rao", target: "To the student securing highest marks in Economics at the Final B.A. University Examination." },
    { slNo: 53, name: "Pavanje Guru Rao Memorial Prize", donor: "Mrs. Mandakini Bai", target: "Purandaradasa Music Competition Prize to the student who stands first at the competition held in Vocal Recital of Purandaradas Keertanas." },
    { slNo: 54, name: "Padukudru Govina Bhat Memorial Proficiency Award Prize", donor: "Sri. P. Narayana Bhat", target: "To the most deserving student (both Academic and Economic conditions) studying the II P.U.C." },
    { slNo: 55, name: "Late Vasudeva Setty Memorial Prize", donor: "Late Vasudeva Setty Prize", target: "To the best all-round student judged by his/her performance in curricular and extracurricular activities" },
    { slNo: 56, name: "Late Rtn. Vasudeva Setty Memorial Rolling shield", donor: "Rotary Club Udupi (West)", target: "To the best outgoing NSS student of the year" },
    { slNo: 57, name: "Late Sri Achutha Pai Kochikar Memorial Prize/Scholarship", donor: "Smt. Sathyabhama Pai", target: "To the 3 students standing first in II PUC (Public) Examinations in Arts, Commerce and Science (PCMB)" },
    { slNo: 58, name: "Prof. B. Krishnappa Memorial English Prize", donor: "Students Council, M.G.M College 1981 – 82", target: "To the student who stands first in English language Paper II of B.A. B.Sc. Examination held by the University in April each year." },
    { slNo: 59, name: "Smt. Rajeshwari Ramanarayana Memorial Scholarship", donor: "M.G.M College Staff Club and Management", target: "To the student of I B.A. (Optional English) who has scored highest marks in English of II PUC Board examination in April of previous year." },
    { slNo: 60, name: "Late Sri. T.A. Pai Memorial Prize", donor: "All India Syndicate Bank Officers’ Association", target: "To be awarded to the student of the college who secures highest marks in Final Year B.Com Degree Examination every year." },
    { slNo: 61, name: "Rajeshwari Memorial Endowment Prize", donor: "Sri. S.K. Menon", target: "To be awarded to the student who secures the highest marks in optional English at the final B.A. Examination of April each year." },
    { slNo: 62, name: "Prof. B. Krishnappa Memorial English Scholarship", donor: "Smt. Rathnamma B. Krishnappa", target: "To be awarded to the student studying the II year B.A. class with optional English who secures the highest marks..." },
    { slNo: 63, name: "Late Sri M. Robert Peres Memorial Prize", donor: "M.G.M College Staff Club", target: "To be awarded each year as a prize to the First Year B.A. student of the College who has secured highest marks in Economics..." },
    { slNo: 64, name: "Late Sri Pundalika Shenoy Memorial Prize", donor: "Sri. U. Harish P. Shenoy, Udupi", target: "To 4 poor and deserving students" },
    { slNo: 65, name: "Late Sri. K. Shekhar Shetty Memorial Prize", donor: "Students’ Council 1983 – 84", target: "To 4 students of the College who have obtained highest marks in Biology/Botany/ PU Board/ University examinations..." },
    { slNo: 66, name: "Late Srinivas Putturaya Memorial Prize", donor: "Late Srnivasa Putturaya Memorial Committee", target: "To be awarded each year. Light-Vocal Music I and II, Classical Vocal Music." },
    { slNo: 67, name: "Padur Ramakrishna Tantry Memorial Prof. K.S. Haridasa Bhat Gold Medal", donor: "Smt. P. Saraswathy Tantry Gulbarga", target: "To the best student of the College with Economics as one of the optional subject..." },
    { slNo: 68, name: "Smt. Thailambal Ammal Annual Prize", donor: "Prof. K.K. Easwaran", target: "To be awarded to the best outgoing student of this college of the Final Year B.Sc., with Botany..." },
    { slNo: 69, name: "National Cadet Corps Prize", donor: "NCC Sub-Unit M.G.M College, Udupi", target: "To the best outgoing cadet of NCC Naval Sub-Unit of the College studying in the Final Year Degree..." },
    { slNo: 70, name: "Dr. T.M.A. Pai Udayavani Endowment Prize", donor: "20th year Festival Committee of Udayavani", target: "Three students of II PUC based on their merit in I PUC (Arts, Science and Commerce) and character." },
    { slNo: 71, name: "Late Sri P.S. Acharya endowment Scholarship Prize", donor: "Dr. P.B. Rao Smt. Manorama S. Acharya and Family", target: "To a Brahmin Student who has secured the highest marks in II PUC Board Examination..." },
    { slNo: 77, name: "Late Sri N.V. Kamath Endowment Prize", donor: "Sri M.V. Kamath, Mumbai", target: "To the student of I B.Com, Degree class who secures highest marks in Business, Statistics and Mathematics." },
    { slNo: 78, name: "Late Sri Narain S. Pai Kochikar Endowment Scholarship Prize", donor: "Sri. Raghuram N. Pai, Udupi", target: "To the best outgoing NCC Cadet of the College each year" },
    { slNo: 79, name: "Late Sri T.A. Pai Memorial Prize", donor: "Sri. M.V. Padiyar, Manipal", target: "To a Gowda Saraswath Brahmin student of this college who scores highest marks in the Final B.Com Degree examination." },
    { slNo: 80, name: "Rajaram Kamath Prize", donor: "Sri Rajaram Kamath Kasargod", target: "To a student of this College who scores the highest marks in Hindi in the II Year B.Com degree Exam." },
    { slNo: 81, name: "Late Sri Kochikar Padmanabha Pai Memorial Scholarship Prize (Comp Sci)", donor: "Kochikar Trust Fund, Udupi", target: "To a deserving student of this College who passes Final B.Sc. with highest marks in Computer Science (Opt)." },
    { slNo: 82, name: "Late Sri Kochikar Padmanabha Pai Memorial Scholarship Prize (Home Sci)", donor: "Kochikar Trust Fund, Udupi", target: "To a deserving student of this College who passes Final B.Sc./ Final B.A. with highest marks in Home Science (Opt)." },
    { slNo: 83, name: "Late Sri Kochikar Padmanabha Pai Memorial Scholarship Prize (Pol Sci)", donor: "Kochikar Trust Fund, Udupi", target: "To a deserving student of this College who passes Final B.A. with highest marks in Political Science (Opt)." },
    { slNo: 84, name: "Late Sri Kochikar Padmanabha Pai Memorial Scholarship Prize (Physics)", donor: "Kochikar Trust Fund, Udupi", target: "To a deserving student of this College who passes Final B.Sc. with highest marks in Physics (Opt)." },
    { slNo: 85, name: "Late Sri Kochikar Panduranga Pai Memorial Scholarship Prize (Zoology)", donor: "Kochikar Trust Fund, Udupi", target: "To a deserving student of this College who passes Final B.Sc. with highest marks in Zoology (Opt)." },
    { slNo: 86, name: "Late Sri Kochikar Panduranga Pai Memorial Scholarship Prize (Kannada)", donor: "Kochikar Trust Fund, Udupi", target: "To a deserving student of this College who passes Final B.A. with highest marks in Kannada (Opt)." },
    { slNo: 87, name: "Late Miss. A.J. Bharathi Memorial Scholarship Prize (I PUC)", donor: "Dr. A.L. Jayadevappa Chikmagalur", target: "To a deserving student of this College who scores highest Marks in I P.U. Annual Examination with arts subjects." },
    { slNo: 88, name: "Late Miss. A.J. Bharathi Memorial Scholarship Prize (II PUC)", donor: "Dr. A.L. Jayadevappa Chikmagalur", target: "To a deserving student of this College who scores highest Marks in II P.U. Board Examination with arts subjects." },
    { slNo: 89, name: "Late Sri. H. Vasudeva Nayak Scholarship Prize", donor: "Sri. H., Raghuram Nayak, Udupi", target: "To the student scoring highest marks in Chemistry of I B.Sc., University Examination" },
    { slNo: 90, name: "Prof. U.L. Acharya Endowment Scholarship (PUC Physics)", donor: "Sr. S.A. Bhandarkar Bahrain", target: "To a student of this college who secures highest marks in Physics at the Second Year Pre-University Board Examination." },
    { slNo: 91, name: "Prof. U.L. Acharya Endowment Scholarship (B.Sc Physics)", donor: "Sr. S.A. Bhandarkar Bahrain", target: "To a student of this college who secures highest marks in Physics in the Final Year B.Sc. Degree Examination." },
    { slNo: 92, name: "Sri. R. Nagasraj Endowment Scholarship Prize", donor: "Sri. R. Nagaraj, Sirsi", target: "To the outgoing student of Final B.A. who scores highest marks in Optional English in University Examination taken together." },
    { slNo: 93, name: "M.G.M College staff Club Endowment Scholarship", donor: "M.G.M College staff Club", target: "To the award of any member of the Non-Teaching Staff of M.G.M College, who secures highest marks in S.S.L.C." },
    { slNo: 94, name: "Late Srimathi Kidiyoor Nagaveni Amma Memorial Endowment Scholarship", donor: "Kidiyoor Nagalakshmi Srinivas Trust (Regd). Udupi", target: "To a student of this College who obtains the highest marks in I B.A. Final Examination" },
    { slNo: 95, name: "Late Kidiyoor Laxmi Narayana Rao Memorial Endowment Scholarship", donor: "Kidiyoor Nagalakshmi Srinivas Trust (Regd). Udupi", target: "To a student of this College who obtains the highest marks in I B.Com., Final Examination." },
    { slNo: 96, name: "Late Dr. S R Kidiyoor Memorial Endowment Scholarship", donor: "Kidiyoor Nagalakshmi Srinivas Trust (Regd). Udupi", target: "To a student of this College who obtains the highest marks in I B.Sc., Final Examination." },
    { slNo: 97, name: "Late Sri. Ashwin Shetty Memorial Endowment Scholarship", donor: "Sri. P. Shivaji Shetty & Mrs. Jayanthi S. Shetty", target: "To a student of II PUC with PCMB of this college, who scores highest marks in the Board Examination" },
    { slNo: 98, name: "Late Sri. Gautham Shetty Memorial Endowment Scholarship", donor: "Sri. P. Shivaji Shetty & Mrs. Jayanthi S. Shetty", target: "To a Final Year B.A. student of this college, with English, Economics and History on the basis of merit." },
    { slNo: 99, name: "Late Major Chandrapal Memorial Endowment Scholarship", donor: "Dr. Ram Challarege, New York.", target: "To a student of II B.Sc. Degree class who has completed the I B.Sc Course in this college itself (Merit/NSS/NCC)." },
    { slNo: 100, name: "Late Prof. B.V. Achar Endowment Scholarship Prize", donor: "Students of Prof. B.V. Achar", target: "To a best student of the College in the II B.Sc. class who scores the highest marks in Mathematics in I B.Sc." },
    { slNo: 101, name: "Late Samuel Christananda Memorial Endowment Scholarship", donor: "Non Teaching staff M.G.M college", target: "To a child of a member of non-teaching staff who has scored highest marks in I P.U.C." },
    { slNo: 102, name: "Late Miss Girija Memorial Endowment Scholarship", donor: "Vadiraja Vidyarthini Nilaya M.G.M College Hostel", target: "To an inmate of V.V. Nilaya and studying in the II year B.Com Degree on the basis of I year University exam marks." },
    { slNo: 103, name: "Aroor Kinni Sheshagiri Rao Memorial Endowment Scholarship", donor: "Smt. Kalyani Amma Udupi", target: "To a Brahmin student who scored highest marks in the I year PUC annual Examination in Arts" },
    { slNo: 104, name: "Aroor Padmavathi Amma Memorial Endowment Scholarship", donor: "Smt. Kalyani Amma Udupi", target: "To a Brahmin student who scored highest marks in the I year PUC annual Examination in Commerce" },
    { slNo: 105, name: "Aroor Venkata Rao Memorial Endowment Scholarship", donor: "Smt. Kalyani Amma Udupi", target: "To a Brahmin student who scored highest marks in the I year PUC annual Examination in Science" },
    { slNo: 106, name: "Smt. Sujatha P.Rao, Sri Pratap Rao and Bhat Endowment", donor: "Smt. Sujatha P.Rao & Family", target: "Free Mid-Day Meals during the academic year to a poor and deserving Lady student selected by the Principal" },
    { slNo: 107, name: "Late Sri Kochikar Manjunath Pai scholarship", donor: "Kochikar Trust Fund Udupi", target: "To a poor and deserving student of the College" },
    { slNo: 108, name: "K.S.O.U. study center, M.G.M College Endowment Scholarship", donor: "Coordinator and staff, K.S.O.U. study center", target: "To a Final Year B.A. student who has scored highest percentage of marks in Economics of I and II Year Degree." },
    { slNo: 109, name: "Late Smt. Sushila Somasundar and Sri. D.N. Somasundara Endowment", donor: "Sri. D.N. Somasundara Ret. Phy. Director", target: "Final Year B.A. student who scores highest marks in II Year B.A, B.Sc., B.Com and active in extracurriculars." },
    { slNo: 110, name: "Sri. K. Prabhakar Pai & Smt. Nirupama Prabhakar Pai Scholarship", donor: "Ms. Mahima Joishy, America", target: "To male and female students of this college who score the highest marks in chemistry of II PUC Board Exam." },
    { slNo: 111, name: "Late Prof. K.S. Haridas Bhat Memorial Endowment", donor: "Smt. U.Kusuma, M.G.M College, Udupi", target: "To a student of this college who stood first in the Essay Competition of current affair conducted in the college" },
    { slNo: 112, name: "Mrs Vanajakshi Adiga Scholarship", donor: "Sri. Balakrishna Adiga, Bangalore", target: "To one or more needy merited brahmin students of I year degree class of this college." },
    { slNo: 113, name: "Late Sri Kochikar Panduranga Pai and Late Smt.Radha Bai Memorial", donor: "Sri Prakash Pai Kochikar, Thonse", target: "Best outgoing college students of the college." },
    { slNo: 114, name: "Late Smt.K.Beefathimabi memorial endowment prize", donor: "Smt.Bee Isabi Bailoor", target: "To a poor and deserving I PUC students." },
    { slNo: 115, name: "Late Sri U Vittal Bhat and Late Smt.adithi Amma memorial", donor: "Dr. U K Shyama Bhat", target: "To a final year student who scores highest marks in Political science in April university exam in each year." },
    { slNo: 116, name: "Late Prof. U L Acharya endowment prize", donor: "The member of the family of prof. U L Acharya", target: "To a II BSc student who scores highest in Physics at his II year university exam" },
    { slNo: 117, name: "Sri.B N Achar & Smt. Vasanthi Achar endowment prize", donor: "Sri Jayaprakash Achar", target: "To a II PUC & III Degree student (preferably a brahmin) who scores a minimum of 60% in the preceding final exam" },
    { slNo: 118, name: "Late Katpady Madhava Shenoy & Yamuna Shenoy Endowment", donor: "Sri K. Raghunath Shenoy & Brothers", target: "To Girl Student (Computer Science) and Boy Student (Commerce) belonging to GSB Community securing highest SSLC marks." },
    { slNo: 119, name: "Late Sri Kochikar Panduranga Radhabai Memorial Endowment", donor: "Nirmala A. Rao", target: "Best outgoing student of the College" },
    { slNo: 120, name: "Late Gururaj Bhat Memorial Prize", donor: "M. G. M. P.U. Students 2005- 2006", target: "To a needy Brahmin student of II P.U. Commerce." },
    { slNo: 121, name: "Late Kochikar Raghuram N. Pai Memorial Endowment", donor: "Mrs. Nirmala N. Pai", target: "To a G.S.B. Student of the II Year B.Com. securing highest total marks in I B.Com. Exam." },
    { slNo: 123, name: "Dr. T.M.A. Pai Memorial", donor: "Dr. Naresh Nayak", target: "The best Male and Females students of I PUC who will continue to II PUC (parents are not income tax payers)." },
    { slNo: 124, name: "Sharadha M. Pai Memorial scholarship", donor: "Dr. Naresh Nayak", target: "Best female student." },
    { slNo: 126, name: "Potty Anjaneyulu and Pottymoorthy Subba Rao Memorial", donor: "Potty Raghava Rao and Appa Rao", target: "To two meritorious and deserving students of I Year B.Sc" },
    { slNo: 127, name: "Late Ramakrishna Vasudeva Kamath Memorial Endowment", donor: "Smt. Shakunthala Kamath", target: "To two meritorious and poor students of B.Sc." },
    { slNo: 128, name: "Corporation Bank Gold Medal", donor: "Corporation Bank Head Office Mangalore.", target: "Best outgoing student of the Degree College." },
    { slNo: 129, name: "Late M. Katpadi Ramesh Shenoy Endowment", donor: "Mrs. Sheela B. Shenoy & Mrs. Shyamala Shenoy", target: "Two best students-one girl and one boy of I PUC securing highest marks in SSLC." },
    { slNo: 130, name: "S.M. Pejathaya Prize", donor: "Sri S. M. Pejathaya", target: "Best Cadet of Naval Wing & Best Cadet of Army Wing." },
    { slNo: 131, name: "Alumni Association Prize", donor: "Alumni Association of MGM College", target: "Five merited Degree students." },
    { slNo: 132, name: "PTA Prize", donor: "PTA of MGM College", target: "To supplement to Krishnamurthy Gold Medal." },
    { slNo: 133, name: "Late Vakil Ramanath Pai & Kalyani Pai Memorial Scholarship", donor: "Dr. J.P. Kochikar", target: "To Meritorious I B.A. student." },
    { slNo: 134, name: "Late Shri K. Mohandas Kamath Memorial Prize", donor: "Mrs. Kusuma Kamath", target: "Highest marks in Physics in respective University exam and Physics Seminar Competition winner." },
    { slNo: 135, name: "Sri. K. H. Karki Memorial Prize", donor: "Dr. Deepa Karki", target: "To a Student of Second PUC who gets highest marks in Chemistry in II PUC Annual Examination." },
    { slNo: 136, name: "Chokkady Archaka Family Endowment Prize", donor: "Prof. C.A. Bhat", target: "To Economically Poor Madhwa Student or Students studying in B.Sc class who secure highest Mark in Mathematics." },
    { slNo: 137, name: "Mrs. Kamala Udupa & Ms. Bharathi Udupa Endowment", donor: "Sri Raghavendra Udupa", target: "Highest scores in II PU Science with Sanskrit and final BSc Student with Sanskrit." },
    { slNo: 138, name: "Prof. B. Krishnappa Memorial Endowment Prize", donor: "Jayaram Beladakere & Naganandini Jayaram", target: "To the deserving student studying in I or II year MSc (Comp.Sc)" }
  ],
  note: "Note: These scholarships shall be extended to the subsequent years only if the student passes the Semester examination in one attempt."
};

const Scholarship = () => {
  // State hook to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="scholarships-page-wrapper">
      <ScholarshipNavbar onOpenModal={() => setIsModalOpen(true)} />

      <div className="scholarships-container">
        {/* Header Section */}
        <header className="scholarships-header">
          <h1>Scholarships, Freeships, and Prizes</h1>
          <p>
            Mahatma Gandhi Memorial College (MGM College), Udupi provides complete information and access to various government and institutional benefits.
          </p>
        </header>

        {/* Scholarships Section */}
        <section className="scholarship-section">
          <h2>Scholarships</h2>
          <div className="scholarship-grid">
            {scholarshipsAndPrizesData.scholarships.map((item, index) => (
              <div key={index} className="scholarship-card">
                <div>
                  <h3>{item.name}</h3>
                  <p><em>Authority/Portal: {item.authority}</em></p>
                  <p><strong>Eligibility:</strong> {item.eligibility}</p>
                </div>
                <div className="scholarship-note" style={{ marginTop: '1rem' }}>
                  <p><strong>Amount/Benefit:</strong> {item.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note Notice */}
        <div className="scholarship-section">
          <div className="scholarship-note">
            <p>{scholarshipsAndPrizesData.note}</p>
          </div>
        </div>

        {/* Prizes and Endowments Table Section */}
        <section className="scholarship-section">
          <h2>Scholarships & Prizes Awarded Each Year</h2>
          <div className="table-responsive">
            <table className="prizes-table">
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Name of Prize</th>
                  <th>Donor</th>
                  <th>To whom awarded</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipsAndPrizesData.prizesAndEndowments.map((prize) => (
                  <tr key={prize.slNo}>
                    <td>{prize.slNo}</td>
                    <td>{prize.name}</td>
                    <td>{prize.donor}</td>
                    <td>{prize.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Modal Popup Component */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close 'X' Button */}
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>

            <h2>Scholarship Application Instructions</h2>
            <p className="modal-subtitle">
              Please ensure you have the following documents ready before applying:
            </p>

            <div className="modal-section-box">
              <div className="doc-category">
                <h3>📄 Essential Documents</h3>
                <ul>
                  <li>Recent Passport Size Photographs (Digital & Physical).</li>
                  <li>Valid <strong>Income Certificate</strong> issued by the Tahasildar.</li>
                  <li><strong>Caste Certificate</strong> (if applying under specific community categories).</li>
                  <li>Copy of <strong>[Aadhaar Redacted]</strong> (Self-attested).</li>
                  <li>Bank Account details (Passbook copy) linked with [Aadhaar Redacted].</li>
                </ul>
              </div>

              <div className="doc-category" style={{ marginTop: '1.5rem' }}>
                <h3>🎓 Academic Records</h3>
                <ul>
                  <li>Previous Year Marks Cards (SSLC / PUC / Degree Semesters).</li>
                  <li>College Identity Card / Fee Receipt of the current academic year.</li>
                  <li>Transfer Certificate (TC) if applicable.</li>
                </ul>
              </div>
            </div>

            <p className="modal-footer-note">
              *Note: Application deadlines are strict. For further assistance or verification of specific scholarship criteria (Sl.No 1-138), please visit the College Office.
            </p>

            <div className="modal-action-wrapper">
              <button 
                className="proceed-btn" 
                onClick={() => {
                  alert("Proceeding to application portal...");
                  setIsModalOpen(false);
                }}
              >
                I HAVE THE DOCUMENTS, PROCEED
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scholarship;