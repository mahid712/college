import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Syllabus.scss';

const syllabusFiles = import.meta.glob('../assets/syllabus/**/*.pdf', {
  eager: true,
  import: 'default',
  query: '?url',
});

const pdfUrl = (filePath) => syllabusFiles[`../assets/syllabus/${filePath}`];

const programs = [
  {
    id: 'bca',
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'Select your preferred BCA specialization to view the curriculum and semester syllabus.',
    selectorLabel: 'Choose Specialization',
    options: [
      {
        id: 'general',
        label: 'BCA (General)',
        description: 'Core programming, software development, data structures, and database frameworks.',
        sections: [
          ['1st & 2nd Semester', [['View Semester 1 & 2 Syllabus', 'bca(syllabus)/general/BCA.pdf']]],
          ['3rd & 4th Semester', [['View Semester 3 & 4 Syllabus', 'bca(syllabus)/general/2-BCA-syllabus-III-IV.pdf']]],
          ['5th & 6th Semester', [['View Semester 5 & 6 Syllabus', 'bca(syllabus)/general/BCA Syllabus (V-VI).pdf']]],
          ['Updated Course List', [['View Updated Course List', 'bca(syllabus)/general/Corrected skill course in IV sem BCA.pdf']]],
        ],
      },
      {
        id: 'aiml',
        label: 'BCA (Artificial Intelligence & Machine Learning)',
        description: 'Neural networks, predictive modeling, data science, and intelligent automation systems.',
        sections: [
          ['1st & 2nd Semester', [['View Semester 1 & 2 Syllabus', 'bca(syllabus)/aiml/BCA (AIML).pdf']]],
          ['3rd & 4th Semester', [['View Semester 3 & 4 Syllabus', 'bca(syllabus)/aiml/4-BCA-AIML-syllabus-III-IV.pdf']]],
          ['5th & 6th Semester', [['View Semester 5 & 6 Syllabus', 'bca(syllabus)/aiml/BCA(AIML)-V_VI.pdf']]],
          ['Updated Course List', [['View Updated Course List', 'bca(syllabus)/aiml/Corrected skill course in IV semBCA AI-ML   (1).pdf']]],
        ],
      },
    ],
  },
  {
    id: 'bsc',
    title: 'Bachelor of Science (B.Sc.)',
    description: 'Select a subject combination to view the respective curriculum and semester syllabus.',
    selectorLabel: 'Choose Combination',
    options: [
      {
        id: 'bzc', label: 'Botany, Zoology & Chemistry', description: 'Life sciences blended with animal biology and chemical laboratory sciences.',
        sections: [
          ['Botany', [['Botany Syllabus (Sem I - VI)', 'bsc/bzc/Botany-syllabus-SEP-I-VI updated Feb 2026 2.pdf']]],
          ['Zoology', [['Zoology Syllabus', 'bsc/bzc/Zoology Syllabus.pdf']]],
          ['Chemistry', [['Chemistry Syllabus (Sem I - VI)', 'bsc/bzc/Chemistry-Syllabus-I-VI.pdf'], ['B.Sc. Chemistry Overview', 'bsc/bzc/B.Sc.Chemistry.pdf'], ['Scheme of Valuation Changes', 'bsc/bzc/Chemistry Changes in Scheme of Valuation Practicals Sem  I and II-SEP.pdf']]],
        ],
      },
      {
        id: 'msp', label: 'Mathematics, Statistics & Physics', description: 'Mathematical modeling, statistical data theory, and classical physics.',
        sections: [
          ['Mathematics', [['Mathematics Syllabus (Sem I - VI)', 'bsc/msp/MathematicsSyllabus-I-VI-sem.pdf'], ['B.Sc. Mathematics Overview', 'bsc/msp/B. Sc-Mathematics.pdf']]],
          ['Statistics', [['Statistics Overview', 'bsc/msp/Statistics.pdf'], ['Statistics Syllabus', 'bsc/msp/14-Statistics-Syllabus-for-BSC-Programme.pdf'], ['IV Semester Elective Course', 'bsc/msp/IV sem Elective course in Statistics-.pdf']]],
          ['Physics', [['B.Sc. Physics Syllabus', 'bsc/msp/B.Sc. Physics.pdf'], ['Skill Course in Physics', 'bsc/msp/Skill course in Physics.pdf']]],
        ],
      },
      {
        id: 'mpc', label: 'Mathematics, Physics & Chemistry', description: 'Mathematical reasoning, physical laws, and chemical reactions and synthesis.',
        sections: [
          ['Mathematics', [['Mathematics Syllabus (Sem I - VI)', 'bsc/mpc/MathematicsSyllabus-I-VI-sem.pdf'], ['B.Sc. Mathematics Overview', 'bsc/mpc/B. Sc-Mathematics.pdf']]],
          ['Physics', [['B.Sc. Physics Syllabus', 'bsc/mpc/B.Sc. Physics.pdf'], ['Skill Course in Physics', 'bsc/mpc/Skill course in Physics.pdf']]],
          ['Chemistry', [['Chemistry Syllabus (Sem I - VI)', 'bsc/mpc/Chemistry-Syllabus-I-VI.pdf'], ['B.Sc. Chemistry Overview', 'bsc/mpc/B.Sc.Chemistry.pdf'], ['Scheme of Valuation Changes', 'bsc/mpc/Chemistry Changes in Scheme of Valuation Practicals Sem  I and II-SEP.pdf']]],
        ],
      },
      {
        id: 'mpcs', label: 'Mathematics, Physics & Computer Science', description: 'Mathematics, physical concepts, and practical software computing and programming.',
        sections: [
          ['Mathematics', [['Mathematics Syllabus (Sem I - VI)', 'bsc/mpcs/MathematicsSyllabus-I-VI-sem.pdf'], ['B.Sc. Mathematics Overview', 'bsc/mpcs/B. Sc-Mathematics.pdf']]],
          ['Physics', [['B.Sc. Physics Syllabus', 'bsc/mpcs/B.Sc. Physics.pdf'], ['Skill Course in Physics', 'bsc/mpcs/Skill course in Physics.pdf']]],
          ['Computer Science', [['B.Sc. Computer Science Overview', 'bsc/mpcs/B.Sc. Computer Science.pdf'], ['Computer Science Syllabus', 'bsc/mpcs/9-Computer-sc-Syllabus.pdf'], ['Computer Science (Sem V - VI)', 'bsc/mpcs/Computer sc Syllabus-V-VI.pdf'], ['Corrected Skill Course (Sem IV)', 'bsc/mpcs/Corrected skill course in comp sc for IV sem BSC.pdf']]],
        ],
      },
      {
        id: 'mscs', label: 'Mathematics, Statistics & Computer Science', description: 'Analytical computing, statistical analytics, and algorithmic problem-solving.',
        sections: [
          ['Mathematics', [['Mathematics Syllabus (Sem I - VI)', 'bsc/mscs/MathematicsSyllabus-I-VI-sem.pdf'], ['B.Sc. Mathematics Overview', 'bsc/mscs/B. Sc-Mathematics.pdf']]],
          ['Statistics', [['Statistics Overview', 'bsc/mscs/Statistics.pdf'], ['Statistics Syllabus', 'bsc/mscs/14-Statistics-Syllabus-for-BSC-Programme.pdf'], ['IV Semester Elective Course', 'bsc/mscs/IV sem Elective course in Statistics-.pdf']]],
          ['Computer Science', [['B.Sc. Computer Science Overview', 'bsc/mscs/B.Sc. Computer Science.pdf'], ['Computer Science Syllabus', 'bsc/mscs/9-Computer-sc-Syllabus.pdf'], ['Computer Science (Sem V - VI)', 'bsc/mscs/Computer sc Syllabus-V-VI.pdf'], ['Corrected Skill Course (Sem IV)', 'bsc/mscs/Corrected skill course in comp sc for IV sem BSC.pdf']]],
        ],
      },
    ],
  },
  {
    id: 'bcom',
    title: 'Bachelor of Commerce (B.Com.)',
    description: 'Select a B.Com. program or vocational specialization to view its semester syllabus.',
    selectorLabel: 'Choose Specialization',
    options: [
      { id: 'general', label: 'B.Com. (General)', description: 'Financial accounting, corporate law, taxation, and economics.', sections: [['I & II Semester', [['B.Com. Revised Syllabus', 'bcom/general/16 B.Com(I_II) Revised.pdf'], ['B.Com. Regular', 'bcom/general/I-II-Sem-B.Com-Regular.pdf'], ['II Semester Corrected Syllabus', 'bcom/general/II-SEM_BCom-syllabus-corrected.pdf']]], ['III & IV Semester', [['B.Com. Revised Syllabus', 'bcom/general/17 B.Com(III_IV) Revised.pdf'], ['III & IV Semester Syllabus', 'bcom/general/Syllabus of III-IV sem BCom.pdf']]], ['V & VI Semester', [['B.Com. Syllabus', 'bcom/general/1 B.COM syllabus(V-VI).pdf']]] ] },
      { id: 'tax', label: 'B.Com. (Vocational - Tax Procedure & Practice)', description: 'Direct and indirect taxation, GST procedures, and auditing practice.', sections: [['I & II Semester', [['Tax Procedure & Practice', 'bcom/tax/BCom (Tax Procedure & Practice)-I-II sem.pdf']]], ['III & IV Semester', [['Revised Syllabus', 'bcom/tax/8  B.Com(Voc)TP (III_IV) Revised.pdf'], ['III & IV Semester Syllabus', 'bcom/tax/Syllabus of III-IV sem BCom (Voc)Tax procedure & Practice.pdf']]], ['V & VI Semester', [['Tax Procedure & Practice Syllabus', 'bcom/tax/3 B..Com (Voc) TP-V-VI.pdf']]] ] },
      { id: 'acc', label: 'B.Com. (Vocational - Accounts & Finance)', description: 'Computerized accounting, corporate finance, banking operations, and portfolio analytics.', sections: [['I & II Semester', [['Revised Syllabus', 'bcom/acc&fin/18 Bcom(Voc)_A_F(I-II) Revised.pdf'], ['Accounting & Finance Syllabus', 'bcom/acc&fin/BCom (Accounting & Finance)-I-II sem.pdf']]], ['III & IV Semester', [['Revised Syllabus', 'bcom/acc&fin/13 B.Com(Voc)A-F  -III-IV revised.pdf'], ['III & IV Semester Syllabus', 'bcom/acc&fin/Syllabus of III-IV sem BCom(VOC) Accounting & Finance.pdf']]], ['V & VI Semester', [['Accounts & Finance Syllabus', 'bcom/acc&fin/5 BCom(A-F)V-VI.pdf']]] ] },
    ],
  },
  {
    id: 'ba',
    title: 'Bachelor of Arts (B.A.)',
    description: 'Select a B.A. combination to view the respective curriculum and semester syllabus.',
    selectorLabel: 'Choose Combination',
    options: [
      { id: 'ehe', label: 'English Optional, History & Economics', description: 'Literature, historical events, socio-economic structures, and economic theory.', sections: [['English Optional', [['English Syllabus (I & II Sem)', 'ba/ehe/Englishsyllabus  I-II.pdf'], ['English Syllabus (III to VI Sem)', 'ba/ehe/English syllabus-III-VI.pdf']]], ['History', [['History Syllabus (I & II Sem)', 'ba/ehe/History Syllabus.pdf'], ['History Syllabus (III & IV Sem)', 'ba/ehe/History syllabus-III-IV.pdf'], ['History Syllabus (V & VI Sem)', 'ba/ehe/5 History( V-VI ).pdf']]], ['Economics', [['Economics Syllabus (I & II Sem)', 'ba/ehe/Economics.pdf'], ['Economics Syllabus (III & IV Sem)', 'ba/ehe/Economics syllabus-III-IV.pdf'], ['Economics Syllabus (V & VI Sem)', 'ba/ehe/3.Economics(V-VI).pdf']]] ] },
      { id: 'hep', label: 'History, Economics & Political Science', description: 'Political systems, public governance, history, and market economies.', sections: [['History', [['History Syllabus (I & II Sem)', 'ba/hep/History Syllabus.pdf'], ['History Syllabus (III & IV Sem)', 'ba/hep/History syllabus-III-IV.pdf'], ['History Syllabus (V & VI Sem)', 'ba/hep/5 History( V-VI ).pdf']]], ['Economics', [['Economics Syllabus (I & II Sem)', 'ba/hep/Economics.pdf'], ['Economics Syllabus (III & IV Sem)', 'ba/hep/Economics syllabus-III-IV.pdf'], ['Economics Syllabus (V & VI Sem)', 'ba/hep/3.Economics(V-VI).pdf']]], ['Political Science', [['Political Science Syllabus', 'ba/hep/Political Science.pdf'], ['Political Science (IV Sem)', 'ba/hep/Political-Science-IV-Sem.pdf'], ['Final UG Syllabus', 'ba/hep/Final-UG-Political-Science-Syllabus.pdf']]] ] },
      { id: 'jkp', label: 'Journalism, Kannada Optional & Political Science', description: 'Mass communication, regional literature, and political governance.', sections: [['Journalism', [['Journalism Syllabus (I & II Sem)', 'ba/jkp/Journalism.pdf'], ['Journalism Syllabus (III & IV Sem)', 'ba/jkp/19-Journalism-Syllabus-III-IV.pdf'], ['Journalism Syllabus (V & VI Sem)', 'ba/jkp/7 Journalism (V-VI).pdf']]], ['Kannada Optional', [['Kannada Syllabus (I & II Sem)', 'ba/jkp/kannada I-II.pdf'], ['Kannada Syllabus (III & IV Sem)', 'ba/jkp/kannada syllabus -III-IV sem.pdf'], ['Kannada Core Course (V & VI Sem)', 'ba/jkp/4  Kan(I-II)Revised and Kan core course(V-VI).pdf']]], ['Political Science', [['Political Science Syllabus', 'ba/jkp/Political Science.pdf'], ['Political Science (IV Sem)', 'ba/jkp/Political-Science-IV-Sem.pdf'], ['Final UG Syllabus', 'ba/jkp/Final-UG-Political-Science-Syllabus.pdf']]] ] },
    ],
  },
  { id: 'mca', title: 'Master of Computer Applications (MCA)', description: 'Advanced computing, full-stack software architecture, and enterprise frameworks.', options: [{ id: 'main', label: 'Complete Syllabus', description: '', sections: [['Master Syllabus & Semesters', [['View Complete Syllabus (Sem I - IV)', 'MCA-revised-syllabus.pdf']]]] }] },
  { id: 'msc', title: 'Master of Science (M.Sc.)', description: 'Postgraduate scientific research and advanced analytical modules.', options: [{ id: 'main', label: 'Complete Syllabus', description: '', sections: [['Master Syllabus & Semesters', [['View Complete Syllabus (Sem I - IV)', 'Computer-Science-revised-syllabus.pdf']]]] }] },
  { id: 'mcom', title: 'Master of Commerce (M.Com.)', description: 'Advanced financial management, strategic accounting, and market research.', options: [{ id: 'main', label: 'Complete Syllabus', description: '', sections: [['Master Syllabus & Semesters', [['View Complete Syllabus (Sem I - IV)', 'M-Com-Syllabus-Notification-2026.pdf']]]] }] },
];

function ProgramCard({ program }) {
  const [selectedId, setSelectedId] = useState(program.options[0].id);
  const selectedOption = program.options.find((option) => option.id === selectedId) || program.options[0];

  return (
    <article className="syllabus-card">
      <h2>{program.title}</h2>
      <p className="program-description">{program.description}</p>
      {program.options.length > 1 && (
        <label className="selector-label">
          {program.selectorLabel}
          <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
            {program.options.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
          </select>
        </label>
      )}
      {selectedOption.description && <p className="combination-description">{selectedOption.description}</p>}
      <div className="semester-list">
        {selectedOption.sections.map(([title, links]) => (
          <section className="semester-section" key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map(([label, path]) => <li key={path}><a href={pdfUrl(path)} target="_blank" rel="noreferrer">{label}</a></li>)}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}

export default function Syllabus() {
  return (
    <div className="syllabus-page">
      <section className="syllabus-hero">
        <h1>Course Syllabus & Curriculum</h1>
        <p>Access semester-wise curriculum breakdowns, updated course lists, and syllabus files for all programs.</p>
        <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/academics">Academics</Link> / Syllabus</div>
      </section>
      <main className="syllabus-content">
        <h2>Program Syllabi & Course Structure</h2>
        <p className="intro">Browse the program cards below to view semester-wise syllabi and updated course sheets.</p>
        <div className="syllabus-grid">{programs.map((program) => <ProgramCard key={program.id} program={program} />)}</div>
      </main>
    </div>
  );
}